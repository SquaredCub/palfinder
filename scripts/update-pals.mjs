/**
 * Regenerates src/pals.ts and src/items.ts from paldb.cc and downloads
 * missing pal icons into public/images/pals/.
 *
 * paldb.cc is used as the single source of truth because it tracks game
 * updates closely (the pyPalworldAPI SQL dump this project originally used
 * lags behind and is missing newer pals such as Omascul).
 *
 * Usage:  node scripts/update-pals.mjs [--refresh]
 *
 * Detail pages are cached in scripts/.palcache/ so re-runs are cheap;
 * pass --refresh to ignore the cache and re-download everything.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CACHE_DIR = path.join(ROOT, "scripts", ".palcache");
const ICONS_DIR = path.join(ROOT, "public", "images", "pals");
const BASE = "https://paldb.cc/en/";
const REFRESH = process.argv.includes("--refresh");
const CONCURRENCY = 6;

const TYPE_ENUM = {
  Neutral: "NEUTRAL",
  Grass: "GRASS",
  Fire: "FIRE",
  Water: "WATER",
  Electric: "ELECTRIC",
  Ice: "ICE",
  Ground: "GROUND",
  Dark: "DARK",
  Dragon: "DRAGON",
};
const SUIT_ENUM = {
  Kindling: "KINDLING",
  Watering: "WATERING",
  Planting: "PLANTING",
  "Generating Electricity": "ELECTRICITY",
  "Medicine Production": "MEDICINE",
  Handiwork: "HANDIWORK",
  Gathering: "GATHERING",
  Lumbering: "LUMBERING",
  Mining: "MINING",
  Cooling: "COOLING",
  Transporting: "TRANSPORTING",
  Farming: "FARMING",
};

const decodeEntities = (s) =>
  s
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

const stripTags = (s) =>
  decodeEntities(s.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, ""))
    .replace(/\s+/g, " ")
    .trim();

async function fetchText(url, cacheKey) {
  const cacheFile = cacheKey && path.join(CACHE_DIR, cacheKey);
  if (cacheFile && !REFRESH && fs.existsSync(cacheFile)) {
    return fs.readFileSync(cacheFile, "utf8");
  }
  const res = await fetch(url, {
    headers: { "User-Agent": "palfinder-updater (github.com/SquaredCub/palfinder)" },
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  const text = await res.text();
  if (cacheFile) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
    fs.writeFileSync(cacheFile, text);
  }
  return text;
}

// ---------- list page ----------

function parseListPage(html) {
  const pals = [];
  // Each pal card is a `<div class="col" data-filters="...">` block.
  const cards = html.split(/<div class="col" data-filters="/).slice(1);
  for (const card of cards) {
    const filters = card.slice(0, card.indexOf('"'));
    const key = card.match(/#(\d+[A-Z]?)</)?.[1];
    const link = card.match(/<a class="itemname"[^>]*href="([^"]+)">([^<]+)<\/a>/);
    const icon = card.match(
      /src="(https:\/\/cdn\.paldb\.cc\/image\/Pal\/Texture\/PalIcon\/Normal\/[^"]+\.webp)"/
    );
    if (!key || !link) continue;
    const suitability = [];
    const suitRe = new RegExp(
      `(${Object.keys(SUIT_ENUM).join("|")})(\\d+)`,
      "g"
    );
    for (const m of filters.matchAll(suitRe)) {
      suitability.push({ type: m[1], level: Number(m[2]) });
    }
    const types = [];
    const typeRe = new RegExp(
      `\\b(${Object.keys(TYPE_ENUM).join("|")})\\b(?!\\d)`,
      "g"
    );
    for (const m of filters.matchAll(typeRe)) types.push(m[1]);
    pals.push({
      key: key.match(/^(\d+)([A-Z]?)$/)[1].padStart(3, "0") +
        key.replace(/^\d+/, ""),
      slug: link[1],
      name: decodeEntities(link[2]),
      icon: icon?.[1] ?? null,
      types,
      suitability,
    });
  }
  return pals;
}

// ---------- detail pages ----------

function parseDetailPage(html) {
  const description = stripTags(
    html.match(/>Summary<\/h5>\s*<div>([\s\S]*?)<\/div>/)?.[1] ?? ""
  );

  let aura = { name: "-", description: "" };
  const psTitle = html.match(
    /data-i18n="common_coop_action">Partner Skill<\/span>:\s*([^<]+)<\/h5>([\s\S]*?)<\/div>\s*<\/div>\s*(?:<table|<\/div>)/
  );
  if (psTitle && psTitle[1].trim()) {
    const body = psTitle[2].match(/<div class="flex-grow-1">([\s\S]*?)$/);
    // Nested <div>s hold extras (saddle tech-unlock badge) — cut them off.
    const text = body ? body[1].split(/<div[ >]/)[0] : "";
    aura = {
      name: decodeEntities(psTitle[1].trim()),
      description: stripTags(text),
    };
  } else {
    // Alternate layout used by some pals (e.g. Panthalus): a "Partner Skill"
    // section header followed by the skill name in a ms-2 span.
    const alt = html.match(
      /href="Partner_Skill"[\s\S]*?<span class="ms-2">([^<]+)<\/span>[\s\S]*?<div class="flex-grow-1 ms-2">([\s\S]*?)<\/div>/
    );
    if (alt) {
      aura = {
        name: decodeEntities(alt[1].trim()),
        description: stripTags(alt[2]),
      };
    }
  }

  const drops = [];
  const dropsSection = html.match(
    />Possible Drops<\/h5>([\s\S]*?)<\/table>/
  );
  if (dropsSection) {
    for (const row of dropsSection[1].split("<tr>").slice(1)) {
      // Rows whose probability cell reads "Lv.80 100%" are endgame
      // rampaging/World Tree drops (Radiant Gems, Ancient Relics) that
      // every pal shares — skip them to keep the drop filter meaningful.
      if (/<td>\s*Lv\./.test(row)) continue;
      const m = row.match(/<a class="itemname"[^>]*>(?:<img[^>]*>)?([^<]+)<\/a>/);
      if (!m) continue;
      const item = decodeEntities(m[1].trim());
      if (item && !drops.includes(item)) drops.push(item);
    }
  }

  // Nocturnal pals ("Sleepless" in-game) work through the night; the row is
  // only present on paldb when the flag is set.
  const nocturnal = /<div>Nocturnal<\/div>\s*<div>1<\/div>/.test(html);

  return { description, aura, drops, nocturnal };
}

// ---------- icon download ----------

async function downloadIcon(pal) {
  const dest = path.join(ICONS_DIR, `${pal.key}.png`);
  if (fs.existsSync(dest) || !pal.icon) return false;
  const sharp = (await import("sharp")).default;
  const res = await fetch(pal.icon);
  if (!res.ok) throw new Error(`icon ${res.status} for ${pal.name}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await sharp(buf).png().toFile(dest);
  return true;
}

// ---------- output generation ----------

const sortKey = (k) => {
  const m = k.match(/^(\d+)([A-Z]?)$/);
  return [Number(m[1]), m[2]];
};

function generatePalsTs(pals) {
  const lines = [
    'import { IPal, SuitabilitiesEnum, TypesEnum } from "./interfaces";',
    "",
    "export const pals: IPal[] = [",
  ];
  pals.forEach((p, i) => {
    lines.push("  {");
    lines.push(`    id: ${i + 1},`);
    lines.push(`    key: ${JSON.stringify(p.key)},`);
    lines.push(`    image: ${JSON.stringify(`/palfinder/images/pals/${p.key}.png`)},`);
    lines.push(`    name: ${JSON.stringify(p.name)},`);
    lines.push(
      `    wiki: ${JSON.stringify(
        `https://palworld.fandom.com/wiki/${p.name.replace(/ /g, "_")}`
      )},`
    );
    lines.push(
      `    types: [${p.types.map((t) => `TypesEnum.${TYPE_ENUM[t]}`).join(", ")}],`
    );
    lines.push("    suitability: [");
    for (const s of p.suitability) {
      lines.push("      {");
      lines.push(`        type: SuitabilitiesEnum.${SUIT_ENUM[s.type]},`);
      lines.push(`        level: ${s.level},`);
      lines.push("      },");
    }
    lines.push("    ],");
    lines.push(`    drops: [${p.drops.map((d) => JSON.stringify(d)).join(", ")}],`);
    lines.push("    aura: {");
    lines.push(`      name: ${JSON.stringify(p.aura.name)},`);
    lines.push(`      description: ${JSON.stringify(p.aura.description)},`);
    lines.push("    },");
    lines.push(`    nocturnal: ${p.nocturnal},`);
    lines.push(`    description: ${JSON.stringify(p.description)},`);
    lines.push("  },");
  });
  lines.push("];");
  lines.push("");
  return lines.join("\n");
}

function generateItemsTs(pals) {
  const items = [...new Set(pals.flatMap((p) => p.drops))].sort((a, b) =>
    a.localeCompare(b)
  );
  return (
    "export const items = [\n" +
    items.map((i) => `  ${JSON.stringify(i)},`).join("\n") +
    "\n];\n"
  );
}

// ---------- main ----------

async function main() {
  console.log("Fetching pal list from paldb.cc…");
  const listHtml = await fetchText(BASE + "Pals", "_list.html");
  const pals = parseListPage(listHtml);
  console.log(`Found ${pals.length} pals on paldb.cc`);
  if (pals.length < 250) {
    throw new Error("Suspiciously few pals parsed — paldb layout changed?");
  }

  const previous = fs.existsSync(path.join(ROOT, "src", "pals.ts"))
    ? new Set(
        [...fs
          .readFileSync(path.join(ROOT, "src", "pals.ts"), "utf8")
          .matchAll(/key: "([^"]+)"/g)].map((m) => m[1])
      )
    : new Set();

  // Fetch detail pages with limited concurrency
  let done = 0;
  const queue = [...pals];
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      let pal;
      while ((pal = queue.shift())) {
        const html = await fetchText(BASE + pal.slug, `${pal.key}.html`);
        Object.assign(pal, parseDetailPage(html));
        if (++done % 50 === 0) console.log(`  ${done}/${pals.length} detail pages`);
      }
    })
  );

  pals.sort((a, b) => {
    const [na, sa] = sortKey(a.key);
    const [nb, sb] = sortKey(b.key);
    return na - nb || sa.localeCompare(sb);
  });

  fs.writeFileSync(path.join(ROOT, "src", "pals.ts"), generatePalsTs(pals));
  fs.writeFileSync(path.join(ROOT, "src", "items.ts"), generateItemsTs(pals));

  let downloaded = 0;
  for (const pal of pals) {
    if (await downloadIcon(pal)) {
      downloaded++;
      console.log(`  icon downloaded: ${pal.key} ${pal.name}`);
    }
  }

  const added = pals.filter((p) => !previous.has(p.key));
  const removed = [...previous].filter((k) => !pals.some((p) => p.key === k));
  console.log(`\nDone. ${pals.length} pals written to src/pals.ts`);
  if (added.length)
    console.log(`Added: ${added.map((p) => `${p.key} ${p.name}`).join(", ")}`);
  if (removed.length) console.log(`Removed: ${removed.join(", ")}`);
  console.log(`Icons downloaded: ${downloaded}`);

  const noDesc = pals.filter((p) => !p.description).length;
  const noAura = pals.filter((p) => p.aura.name === "-").length;
  if (noDesc || noAura)
    console.log(`Warning: ${noDesc} pals without description, ${noAura} without partner skill`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
