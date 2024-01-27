import { ChangeEvent, useCallback, useState } from "react";
import { SuitabilitiesEnum } from "./interfaces";

export const useSuitabilityFilters: () => {
  handleSliderChange: (e: ChangeEvent) => void;
  suitabilityFilters: { [key in SuitabilitiesEnum]: number };
} = () => {
  const [kindling, setMinKindling] = useState<number>(0);
  const [watering, setMinWatering] = useState<number>(0);
  const [planting, setMinPlanting] = useState<number>(0);
  const [medicineProduction, setMinMedicineProduction] = useState<number>(0);
  const [generatingElectricity, setMinGeneratingElectricity] =
    useState<number>(0);
  const [handiwork, setMinHandiwork] = useState<number>(0);
  const [gathering, setMinGathering] = useState<number>(0);
  const [lumbering, setMinLumbering] = useState<number>(0);
  const [mining, setMinMining] = useState<number>(0);
  const [cooling, setMinCooling] = useState<number>(0);
  const [transporting, setMinTransporting] = useState<number>(0);
  const [farming, setMinFarming] = useState<number>(0);

  const handleSliderChange = useCallback((e: ChangeEvent) => {
    const value = Number((e.target as HTMLInputElement).value);
    switch (e.target.id) {
      case SuitabilitiesEnum.KINDLING:
        setMinKindling(value);
        break;
      case SuitabilitiesEnum.WATERING:
        setMinWatering(value);
        break;
      case SuitabilitiesEnum.PLANTING:
        setMinPlanting(value);
        break;
      case SuitabilitiesEnum.MEDICINE:
        setMinMedicineProduction(value);
        break;
      case SuitabilitiesEnum.ELECTRICITY:
        setMinGeneratingElectricity(value);
        break;
      case SuitabilitiesEnum.HANDIWORK:
        setMinHandiwork(value);
        break;
      case SuitabilitiesEnum.GATHERING:
        setMinGathering(value);
        break;
      case SuitabilitiesEnum.LUMBERING:
        setMinLumbering(value);
        break;
      case SuitabilitiesEnum.MINING:
        setMinMining(value);
        break;
      case SuitabilitiesEnum.COOLING:
        setMinCooling(value);
        break;
      case SuitabilitiesEnum.TRANSPORTING:
        setMinTransporting(value);
        break;
      case SuitabilitiesEnum.FARMING:
        setMinFarming(value);
        break;
    }
  }, []);

  return {
    handleSliderChange,
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
