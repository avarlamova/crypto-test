import React, { FC } from "react";
import { CurrencyOption, CurrencyOptions } from "../../types/types";

// type Option = {
//   name: string;
//   id?: string;
// };

type Options = {
  options: CurrencyOptions;
  selectedOption: number;
  handleChange: (ev: any) => void;
};

const CustomSelect: FC<Options> = ({
  options,
  handleChange,
  selectedOption,
}) => {
  return (
    <select value={selectedOption} onChange={handleChange}>
      {options.map((option: CurrencyOption) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
