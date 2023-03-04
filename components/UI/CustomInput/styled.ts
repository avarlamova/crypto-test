import { FlexWrapper } from "./../../../styles/styled";
import styled from "styled-components";

export const StyledInput = styled.input`
  border: 1px solid #e5e7eb;
  font-size: 14px;
  padding: 8px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  :focus {
    outline: none;
  }
`;

export const InputWrapper = styled(FlexWrapper)`
  gap: 10px;
  align-items: center;
`;
