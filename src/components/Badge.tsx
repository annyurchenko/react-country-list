import React from "react";
import { BadgeLabel, Color } from "../types";

interface IProps {
  value: number;
  type: BadgeLabel;
  color: Color;
}

export const Badge = ({ value, type, color }: IProps) => {
  return (
    <span className={`badge bg-${color} col-2`}>
      {type} : {value}
    </span>
  );
};
