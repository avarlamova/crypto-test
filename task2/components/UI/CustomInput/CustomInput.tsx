import React, { FC } from "react";
import { InputWrapper, StyledInput } from "./styled";

type InputProps = {
  amount: number;
  handleAmountChange: any;
};

const CustomInput: FC<InputProps> = ({ amount, handleAmountChange }) => {
  return (
    <InputWrapper>
      Amount:
      <StyledInput
        placeholder="Enter amount"
        value={amount}
        type="number"
        onChange={handleAmountChange}
      />
    </InputWrapper>
  );
};

export default CustomInput;
