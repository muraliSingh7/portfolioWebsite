import React from "react";
import style from "./style.module.css";
interface ChipProps {
  chipName: string;
}
const Chip: React.FC<ChipProps> = ({ chipName }) => {
  return <div className={style.chip}>{chipName}</div>;
};

export default Chip;
