/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useRef, useState } from "react";
import {
  ISuitabilityFilters,
  MAX_WORK_LEVEL,
  MultiRangeChangeResult,
  SUITABILITIES,
  SuitabilitiesEnum,
} from "./interfaces";

export type ISuitabilityFilter = {
  min: number;
  max: number;
};
const defaultFilter = {
  min: 0,
  max: MAX_WORK_LEVEL,
};

export const suitabilityFiltersAreDefaults = (filters: ISuitabilityFilters) =>
  SUITABILITIES.every((s) => isSuitabilityFilterDefault(filters[s]));
export const isSuitabilityFilterDefault = (filter: ISuitabilityFilter) =>
  filter.max === defaultFilter.max && filter.min === defaultFilter.min;

// Solo = the clicked work requires at least level 1 while every other range
// is pinned to 0-0. This is the state the icon toggle creates, and the only
// state in which the icon lights up.
export const isSuitabilitySoloed = (
  filters: ISuitabilityFilters,
  name: SuitabilitiesEnum
) =>
  filters[name].min >= 1 &&
  SUITABILITIES.every(
    (s) => s === name || (filters[s].min === 0 && filters[s].max === 0)
  );

export const useSuitabilityFilters: () => {
  handleSliderChange: (e: MultiRangeChangeResult) => void;
  resetFilters: () => void;
  toggleSoloFilter: (name: SuitabilitiesEnum) => void;
  suitabilityFilters: ISuitabilityFilters;
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

  const handleSliderChange = useCallback(
    (e: MultiRangeChangeResult) => {
      const { setter } = settersMap.get(e.name)!;
      setter &&
        setter({
          min: e.minValue,
          max: e.maxValue,
        });
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

  // Filters as they were right before the last solo toggle-on, so toggling
  // off can restore them.
  const preSoloFiltersRef = useRef<ISuitabilityFilters | null>(null);

  const currentFilters = (): ISuitabilityFilters => {
    const out = {} as ISuitabilityFilters;
    SUITABILITIES.forEach((s) => {
      out[s] = settersMap.get(s)!.value;
    });
    return out;
  };

  const toggleSoloFilter = (name: SuitabilitiesEnum) => {
    const current = currentFilters();
    if (isSuitabilitySoloed(current, name)) {
      // Toggle off. Only restore the snapshot if the filters are still
      // exactly as the toggle-on left them; if the user tweaked them since,
      // just release the clicked work's minimum.
      const untouched =
        current[name].min === 1 && current[name].max === MAX_WORK_LEVEL;
      if (untouched) {
        // No snapshot means the toggle-on happened from another work's solo
        // state — nothing sensible to go back to, so reset everything.
        const snapshot = preSoloFiltersRef.current;
        SUITABILITIES.forEach((s) =>
          settersMap.get(s)!.setter(snapshot ? snapshot[s] : defaultFilter)
        );
      } else {
        settersMap.get(name)!.setter({ min: 0, max: current[name].max });
      }
      preSoloFiltersRef.current = null;
    } else {
      // Don't snapshot another work's solo state; toggling off should reset
      // instead of hopping back to the previous solo.
      const cameFromAnotherSolo = SUITABILITIES.some((s) =>
        isSuitabilitySoloed(current, s)
      );
      preSoloFiltersRef.current = cameFromAnotherSolo ? null : current;
      SUITABILITIES.forEach((s) => {
        const { setter } = settersMap.get(s)!;
        setter(
          s === name ? { min: 1, max: MAX_WORK_LEVEL } : { min: 0, max: 0 }
        );
      });
    }
  };

  const resetFilters = () => {
    preSoloFiltersRef.current = null;
    SUITABILITIES.forEach((s) => {
      const { setter } = settersMap.get(s)!;
      setter(defaultFilter);
    });
  };

  return {
    handleSliderChange,
    resetFilters,
    toggleSoloFilter,
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
