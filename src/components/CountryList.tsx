import React from "react";
import { ICountry } from "../types";
import { CountryItem } from "./CountryItem";

interface IProps {
  countries: ICountry[];
}

export const CountryList = ({ countries }: IProps) => {
  return (
    <ul className="container list-group">
      {countries.map((country) => {
        return <CountryItem country={country} />;
      })}
    </ul>
  );
};
