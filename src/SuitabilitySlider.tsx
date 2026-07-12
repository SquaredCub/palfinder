import React from "react";
import {
  MAX_WORK_LEVEL,
  MultiRangeChangeResult,
  SuitabilitiesEnum,
} from "./interfaces";

interface ISuitabilitySliderProps {
  minValue: number;
  maxValue: number;
  name: SuitabilitiesEnum;
  changeHandler: (e: MultiRangeChangeResult) => void;
}

const SuitabilitySlider: React.FC<ISuitabilitySliderProps> = ({
  minValue,
  maxValue,
  name,
  changeHandler,
}) => {
  const emit = (min: number, max: number) => {
    changeHandler({
      min: 0,
      max: MAX_WORK_LEVEL,
      minValue: min,
      maxValue: max,
      name,
    });
  };

  const isDefault = minValue === 0 && maxValue === MAX_WORK_LEVEL;
  // When both thumbs sit on the same value, the one that can still move
  // must be on top: at the high end only min can move, at the low end only max.
  const minOnTop =
    minValue === maxValue && minValue > MAX_WORK_LEVEL / 2 ? 4 : 2;

  return (
    <div className="range">
      <div className="range-track">
        <div
          className="range-fill"
          style={{
            left: `${(minValue / MAX_WORK_LEVEL) * 100}%`,
            width: `${((maxValue - minValue) / MAX_WORK_LEVEL) * 100}%`,
          }}
        />
        <input
          type="range"
          min={0}
          max={MAX_WORK_LEVEL}
          step={1}
          value={minValue}
          style={{ zIndex: minOnTop }}
          aria-label={`min ${name}`}
          onChange={(e) =>
            emit(Math.min(Number(e.target.value), maxValue), maxValue)
          }
        />
        <input
          type="range"
          min={0}
          max={MAX_WORK_LEVEL}
          step={1}
          value={maxValue}
          style={{ zIndex: 3 }}
          aria-label={`max ${name}`}
          onChange={(e) =>
            emit(minValue, Math.max(Number(e.target.value), minValue))
          }
        />
      </div>
      <span className={`range-value ${isDefault ? "" : "isSet"}`}>
        {minValue}–{maxValue}
      </span>
    </div>
  );
};

export default SuitabilitySlider;
