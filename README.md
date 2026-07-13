# Palfinder

A fast, filterable paldex for [Palworld](https://www.pocketpair.jp/palworld). Browse every pal and filter by work suitability levels, element, and item drops — handy for planning your base workforce.

**Live site:** https://squaredcub.github.io/palfinder/

## Features

- Full paldex including B-variants and raid pals
- Work suitability filters with min/max level ranges, plus one-click "solo" toggles to show pals that do one job exclusively
- Filter by element and by dropped item
- Free-text search across names, elements, and partner skills

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build
npm run deploy   # build and publish to GitHub Pages
```

## Updating game data

`src/pals.ts` and `src/items.ts` are generated — don't edit them by hand. After a Palworld update:

```sh
node scripts/update-pals.mjs --refresh
```

This scrapes the latest paldex from [paldb.cc](https://paldb.cc), regenerates the data files, and downloads icons for any new pals. Detail pages are cached in `scripts/.palcache/`; `--refresh` bypasses the cache.

## Credits

- Pal data and images sourced from [paldb.cc](https://paldb.cc)
- Palworld and all game assets are © [Pocketpair, Inc.](https://www.pocketpair.jp)

This is an unofficial fan project and is not affiliated with or endorsed by Pocketpair.
