import React, { FC } from "react";
import { CurrencyOption, CurrencyOptions } from "../../../types/types";
import { StyledSelect, SelectWrapper } from "./styled";
import Image from "next/image";

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
    <SelectWrapper>
      <StyledSelect value={selectedOption} onChange={handleChange}>
        {options &&
          options.map((option: CurrencyOption) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
      </StyledSelect>
      <Image
        alt="select-arrow"
        width={14}
        height={14}
        src="/images/arrow.svg"
      />
    </SelectWrapper>
  );
};

export default CustomSelect;
