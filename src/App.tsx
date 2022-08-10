import React from "react";
import { CountryList } from "./components/CountryList";
import countries from "./country-data.json";
import { transformCountries } from "./mappers";

export const App = () => {
  const tranformedCountries = transformCountries(countries);

  return (
    <div className="container">
      <h1 className="my-5">Country List</h1>
      <CountryList countries={tranformedCountries} />
    </div>
  );
};
