import React, { useState } from "react";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import { MultiRangeChangeResult, SuitabilitiesEnum } from "./interfaces";

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
  const [minCaptionValue, setMinCaptionValue] = useState<number>(minValue);
  const [maxCaptionValue, setMaxCaptionValue] = useState<number>(maxValue);
  return (
    <MultiRangeSlider
      min={0}
      max={4}
      step={1}
      minValue={minValue}
      maxValue={maxValue}
      className="slider"
      id={name}
      onChange={(e: ChangeResult) => {
        changeHandler({ ...e, name });
      }}
      onInput={(e) => {
        setMinCaptionValue(e.minValue);
        setMaxCaptionValue(e.maxValue);
      }}
      canMinMaxValueSame
      barInnerColor="#273034"
      minCaption={`min ${minCaptionValue}`}
      maxCaption={`max ${maxCaptionValue}`}
      ruler={false}
      label={false}
    />
  );
};

export default SuitabilitySlider;
