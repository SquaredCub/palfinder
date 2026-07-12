import React from "react";

import SuitabilityChip from "./SuitabilityChip";

import { type IPal, SUITABILITIES, TYPE_COLORS } from "./interfaces";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface IPalCardProps {
  pal: IPal;
}

const itemImage = (drop: string) =>
  `/palfinder/images/items/${drop
    .replaceAll(" ", "_")
    .replaceAll("'", "")
    .toLowerCase()}.png`;

const PalCard: React.FC<IPalCardProps> = ({ pal }) => {
  const { key, name, types, suitability, drops, aura, description, image } =
    pal;
  const orderedSuitability = [...suitability].sort(
    (a, b) => SUITABILITIES.indexOf(a.type) - SUITABILITIES.indexOf(b.type)
  );
  return (
    <article
      className="palcard"
      style={
        {
          "--element": TYPE_COLORS[types[0]],
          "--element2": TYPE_COLORS[types[1] ?? types[0]],
        } as React.CSSProperties
      }
    >
      <header className="palcard-head">
        <span className="key">No.{key}</span>
        <h3 className="name">{name}</h3>
        <div className="types">
          {types.map((t) => (
            <img
              src={`/palfinder/images/types/${t}.png`}
              width={22}
              height={22}
              key={t + key}
              title={t}
              alt={t}
            />
          ))}
        </div>
      </header>
      <div className="palcard-main">
        <div className="portrait">
          <LazyLoadImage src={image} width="90px" height="90px" alt={name} />
        </div>
        <div className="aura">
          <span className="aura-label">Partner skill</span>
          <span className="aura-name">{aura.name}</span>
          <p className="aura-description">{aura.description}</p>
        </div>
      </div>
      {description && <p className="description">{description}</p>}
      <div className="suitability">
        {orderedSuitability.map((s) => (
          <SuitabilityChip name={s.type} level={s.level} key={s.type + key} />
        ))}
      </div>
      <div className="drops">
        {drops.map((d) => (
          <div className="drop" key={d + key}>
            <LazyLoadImage
              src={itemImage(d)}
              width="20px"
              height="20px"
              title={d}
              alt=""
            />
            <span>{d}</span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default PalCard;
