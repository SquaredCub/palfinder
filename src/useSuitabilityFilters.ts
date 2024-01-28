/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useCallback, useState } from "react";
import { SuitabilitiesEnum } from "./interfaces";

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
    ["kindling", setKindling],
    ["watering", setWatering],
    ["planting", setPlanting],
    ["medicineProduction", setMedicineProduction],
    ["generatingElectricity", setGeneratingElectricity],
    ["handiwork", setHandiwork],
    ["gathering", setGathering],
    ["lumbering", setLumbering],
    ["mining", setMining],
    ["cooling", setCooling],
    ["transporting", setTransporting],
    ["farming", setFarming],
  ]);

  const handleMinSliderChange = useCallback((e: ChangeEvent) => {
    const newValue = Number((e.target as HTMLInputElement).value);
    const setter = settersMap.get(e.target.id.split("|")[1]);
    setter &&
      setter((existingValue) => ({
        min: newValue,
        max: existingValue.max,
      }));
  }, []);
  const handleMaxSliderChange = useCallback((e: ChangeEvent) => {
    const newValue = Number((e.target as HTMLInputElement).value);
    const setter = settersMap.get(e.target.id.split("|")[1]);
    setter &&
      setter((existingValue) => ({
        min: existingValue.min,
        max: newValue,
      }));
  }, []);

  return {
    handleMinSliderChange,
    handleMaxSliderChange,
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
