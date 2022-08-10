export interface ICountry {
  name: string;
  capital: string;
  population: number;
  flag: string;
  area: number;
  region: string;
}

export interface IData {
  flags: { png: string; svg: string };
  name: {
    common: string;
    official: string;
    nativeName: INativeName;
  };
  capital: string[];
  region: string;
  area: number;
  population: number;
}

interface INativeName {
  [language: string]: INativeNameLanguage;
}

interface INativeNameLanguage {
  official: string;
  common: string;
}

export type BadgeLabel = "area" | "population";

export enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
  Light = "light",
  Dark = "dark",
}
