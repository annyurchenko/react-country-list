import { ICountryApi, ICountry } from "../types";

export const transformCountries = (countries: ICountryApi[]): ICountry[] =>
  countries.map((country: ICountryApi) => {
    return {
      name: country.name.common,
      capital: country.capital[0],
      population: country.population,
      flag: country.flags.svg,
      area: country.area,
      region: country.region,
    };
  });
