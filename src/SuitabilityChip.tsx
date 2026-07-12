import React from "react";

interface ISuitabilityChipProps {
  name: string;
  level: number;
}

const SuitabilityChip: React.FC<ISuitabilityChipProps> = ({ name, level }) => {
  return (
    <div className="suitability-chip" title={`${name} ${level}`}>
      <img
        src={`/palfinder/images/suitabilities/${name.replace(" ", "_")}.png`}
        width="22px"
        height="22px"
        alt={name}
      />
      <span className="suitability-level">{level}</span>
    </div>
  );
};

export default SuitabilityChip;
