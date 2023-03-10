import React, { FC } from "react";
import { InputWrapper, StyledInput } from "./styled";

type InputProps = {
  amount: number;
  handleAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput: FC<InputProps> = ({ amount, handleAmountChange }) => {
  return (
    <InputWrapper>
      Amount:
      <StyledInput
        placeholder="Enter amount"
        value={amount}
        type="text"
        onChange={handleAmountChange}
      />
    </InputWrapper>
  );
};

export default CustomInput;
