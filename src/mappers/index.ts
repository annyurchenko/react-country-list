import { ICountry } from "../types";

interface IData {
  flags: { png: string; svg: string };
  name: {
    common: string;
    official: string;
    nativeName: { [language: string]: INativeNameLanguage }; // Нужна помощь здесь
  };
  capital: string[];
  region: string;
  area: number;
  population: number;
}

export interface INativeNameLanguage {
  official: string;
  common: string;
}

export const transformCountries = (countries: IData[]): ICountry[] =>
  countries.map((country: IData) => {
    return {
      name: country.name.common,
      capital: country.capital[0],
      population: country.population,
      flag: country.flags.svg,
      area: country.area,
      region: country.region,
    };
  });
