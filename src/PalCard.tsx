import React from "react";

import SuitabilityChip from "./SuitabilityChip";

import { enum2array, SuitabilitiesEnum, type IPal } from "./interfaces";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface IPalCardProps {
  pal: IPal;
}

const suitabilites: SuitabilitiesEnum[] = enum2array(SuitabilitiesEnum, true);

const PalCard: React.FC<IPalCardProps> = ({ pal }) => {
  const { key, name, types, suitability, drops, aura, description } = pal;
  return (
    <div className="palcard">
      <div className="name">{name}</div>
      <div className="key">{key}</div>
      <div className="description">{description}</div>
      <div className="types">
        {types.map((t) => {
          return (
            <LazyLoadImage
              src={`/palfinder/images/types/${t}.png`}
              width="20px"
              height="20px"
              key={t + key}
              title={t}
            />
          );
        })}
      </div>
      <div className="imageWiki">
        <LazyLoadImage
          src={`/palfinder/images/pals/${name.toLowerCase()}.png`}
          width="100px"
          height="100px"
        />
      </div>
      <div className="suitability">
        {suitabilites.map((sName) => (
          <SuitabilityChip
            name={sName}
            level={suitability.find((ps) => ps.type === sName)?.level || 0}
            key={sName + key}
          />
        ))}
      </div>
      <div className="drops">
        {drops.map((d) => (
          <div key={d + key}>
            <span>{d}</span>
            <LazyLoadImage
              src={`/palfinder/images/items/${
                d.includes("cloth")
                  ? "cloth"
                  : d.replaceAll(" ", "_").toLowerCase()
              }.png`}
              width="30px"
              height="30px"
              title={d}
            />
          </div>
        ))}
      </div>
      <div className="aura">
        <div className="aura-name">{aura.name}</div>
        <div className="aura-description">{aura.description}</div>
      </div>
    </div>
  );
};

export default PalCard;
