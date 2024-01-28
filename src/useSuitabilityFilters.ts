/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useCallback, useState } from "react";
import { SUITABILITIES, SuitabilitiesEnum } from "./interfaces";

export type ISuitabilityFilter = {
  min: number;
  max: number;
};
const defaultFilter = {
  min: 0,
  max: 4,
};
export const isSuitabilityFilterDefault = (filter: ISuitabilityFilter) =>
  filter.max === defaultFilter.max && filter.min === defaultFilter.min;

export const useSuitabilityFilters: () => {
  handleMinSliderChange: (e: ChangeEvent) => void;
  handleMaxSliderChange: (e: ChangeEvent) => void;
  resetFilters: () => void;
  suitabilityFilters: { [key in SuitabilitiesEnum]: ISuitabilityFilter };
} = () => {
  const [kindling, setKindling] = useState<ISuitabilityFilter>(defaultFilter);
  const [watering, setWatering] = useState<ISuitabilityFilter>(defaultFilter);
  const [planting, setPlanting] = useState<ISuitabilityFilter>(defaultFilter);
  const [medicineProduction, setMedicineProduction] =
    useState<ISuitabilityFilter>(defaultFilter);
  const [generatingElectricity, setGeneratingElectricity] =
    useState<ISuitabilityFilter>(defaultFilter);
  const [handiwork, setHandiwork] = useState<ISuitabilityFilter>(defaultFilter);
  const [gathering, setGathering] = useState<ISuitabilityFilter>(defaultFilter);
  const [lumbering, setLumbering] = useState<ISuitabilityFilter>(defaultFilter);
  const [mining, setMining] = useState<ISuitabilityFilter>(defaultFilter);
  const [cooling, setCooling] = useState<ISuitabilityFilter>(defaultFilter);
  const [transporting, setTransporting] =
    useState<ISuitabilityFilter>(defaultFilter);
  const [farming, setFarming] = useState<ISuitabilityFilter>(defaultFilter);

  const settersMap = new Map([
    [SuitabilitiesEnum.KINDLING, { value: kindling, setter: setKindling }],
    [SuitabilitiesEnum.WATERING, { value: watering, setter: setWatering }],
    [SuitabilitiesEnum.PLANTING, { value: planting, setter: setPlanting }],
    [
      SuitabilitiesEnum.MEDICINE,
      { value: medicineProduction, setter: setMedicineProduction },
    ],
    [
      SuitabilitiesEnum.ELECTRICITY,
      { value: generatingElectricity, setter: setGeneratingElectricity },
    ],
    [SuitabilitiesEnum.HANDIWORK, { value: handiwork, setter: setHandiwork }],
    [SuitabilitiesEnum.GATHERING, { value: gathering, setter: setGathering }],
    [SuitabilitiesEnum.LUMBERING, { value: lumbering, setter: setLumbering }],
    [SuitabilitiesEnum.MINING, { value: mining, setter: setMining }],
    [SuitabilitiesEnum.COOLING, { value: cooling, setter: setCooling }],
    [
      SuitabilitiesEnum.TRANSPORTING,
      { value: transporting, setter: setTransporting },
    ],
    [SuitabilitiesEnum.FARMING, { value: farming, setter: setFarming }],
  ]);

  const handleMinSliderChange = useCallback(
    (e: ChangeEvent) => {
      const newValue = Number((e.target as HTMLInputElement).value);
      const {
        value: { max },
        setter,
      } = settersMap.get(e.target.id.split("|")[1] as SuitabilitiesEnum)!;
      if (newValue > max) return;
      setter &&
        setter((existingValue) => ({
          min: newValue,
          max: existingValue.max,
        }));
    },
    [
      kindling,
      watering,
      planting,
      generatingElectricity,
      medicineProduction,
      handiwork,
      gathering,
      lumbering,
      mining,
      cooling,
      transporting,
      farming,
    ]
  );

  const handleMaxSliderChange = useCallback(
    (e: ChangeEvent) => {
      const newValue = Number((e.target as HTMLInputElement).value);
      const {
        value: { min },
        setter,
      } = settersMap.get(e.target.id.split("|")[1] as SuitabilitiesEnum)!;
      if (newValue < min) return;
      setter &&
        setter((existingValue) => ({
          min: existingValue.min,
          max: newValue,
        }));
    },
    [
      kindling,
      watering,
      planting,
      generatingElectricity,
      medicineProduction,
      handiwork,
      gathering,
      lumbering,
      mining,
      cooling,
      transporting,
      farming,
    ]
  );

  const resetFilters = () => {
    SUITABILITIES.forEach((s) => {
      const { setter } = settersMap.get(s)!;
      setter(defaultFilter);
    });
  };

  return {
    handleMinSliderChange,
    handleMaxSliderChange,
    resetFilters,
    suitabilityFilters: {
      kindling,
      watering,
      planting,
      "medicine production": medicineProduction,
      "generating electricity": generatingElectricity,
      handiwork,
      gathering,
      lumbering,
      mining,
      cooling,
      transporting,
      farming,
    },
  };
};
