import { IData, ICountry } from "../types";

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
