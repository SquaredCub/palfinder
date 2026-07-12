import { ISuitabilityFilter } from "./useSuitabilityFilters";

export interface IPal {
  id: number;
  key: string;
  name: string;
  description: string;
  types: TypesEnum[];
  suitability: ISuitability[];
  drops: string[];
  image: string;
  aura: IAura;
  wiki: string;
}

interface ISuitability {
  type: SuitabilitiesEnum;
  level: number;
}

export interface ISuitabilityJSON {
  id: number;
  name: SuitabilitiesEnum;
  imageWiki: string;
}
export interface ITypesJSON {
  id: number;
  name: TypesEnum;
  imageWiki: string;
}

interface IAura {
  name: string;
  description: string;
}

export enum TypesEnum {
  NEUTRAL = "neutral",
  GRASS = "grass",
  FIRE = "fire",
  WATER = "water",
  ELECTRIC = "electric",
  ICE = "ice",
  GROUND = "ground",
  DARK = "dark",
  DRAGON = "dragon",
}

// Highest work suitability level in the game (alpha/subspecies pals reach 8)
export const MAX_WORK_LEVEL = 8;

export const TYPE_COLORS: Record<TypesEnum, string> = {
  [TypesEnum.NEUTRAL]: "#a8b0b8",
  [TypesEnum.GRASS]: "#7bc74d",
  [TypesEnum.FIRE]: "#f2704e",
  [TypesEnum.WATER]: "#4fa9ec",
  [TypesEnum.ELECTRIC]: "#f5cd4b",
  [TypesEnum.ICE]: "#7fd8e8",
  [TypesEnum.GROUND]: "#c9954f",
  [TypesEnum.DARK]: "#c25577",
  [TypesEnum.DRAGON]: "#9d71e8",
};

export enum SuitabilitiesEnum {
  KINDLING = "kindling",
  WATERING = "watering",
  PLANTING = "planting",
  ELECTRICITY = "generating electricity",
  MEDICINE = "medicine production",
  HANDIWORK = "handiwork",
  GATHERING = "gathering",
  LUMBERING = "lumbering",
  MINING = "mining",
  COOLING = "cooling",
  TRANSPORTING = "transporting",
  FARMING = "farming",
}

const enum2array = (e: object, valuesOnly = false) =>
  Object.entries(e).map(([key, value]) =>
    valuesOnly ? value : { key, value }
  );

export const SUITABILITIES: SuitabilitiesEnum[] = enum2array(
  SuitabilitiesEnum,
  true
);

export const TYPES: TypesEnum[] = enum2array(TypesEnum, true);

export type MultiRangeChangeResult = {
  min: number;
  max: number;
  minValue: number;
  maxValue: number;
  name: SuitabilitiesEnum;
};

export type ISuitabilityFilters = {
  [key in SuitabilitiesEnum]: ISuitabilityFilter;
};
