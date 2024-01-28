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
