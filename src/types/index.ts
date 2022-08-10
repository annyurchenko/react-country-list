export interface ICountry {
  name: string;
  capital: string;
  population: number;
  flag: string;
  area: number;
  region: string;
}

export interface ICountryApi {
  flags: ICountryFlags;
  name: ICountryName;
  capital: string[];
  region: string;
  area: number;
  population: number;
}

interface ICountryFlags {
  png: string;
  svg: string;
}

interface ICountryName {
  common: string;
  official: string;
  nativeName: ICountryNativeName;
}

interface ICountryNativeName {
  [lang: string]: ICountryNativeNameLang | undefined;
}

interface ICountryNativeNameLang {
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
