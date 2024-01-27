import React from "react";

interface ISuitabilityChipProps {
  name: string;
  level: number;
}

const SuitabilityChip: React.FC<ISuitabilityChipProps> = ({ name, level }) => {
  return (
    <div>
      <img
        src={`/palfinder/images/suitabilities/${name.replace(" ", "_")}.png`}
        width="30px"
        height="30px"
        title={name}
      />
      <span className="suitability-level">{level}</span>
    </div>
  );
};

export default SuitabilityChip;
