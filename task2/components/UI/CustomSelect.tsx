import React, { FC } from "react";
import { CryptoCurrencyOptions, CurrencyOptions } from "../../types/types";

// type Option = {
//   name: string;
//   id?: string;
// };

type Options = {
  options: CryptoCurrencyOptions | CurrencyOptions;
  handleChange: (ev: any) => void;
};

const CustomSelect: FC<Options> = ({ options, handleChange }) => {
  return (
    <select onChange={handleChange}>
      {options.map(({ name, id }) => (
        <option value={id} key={id}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
