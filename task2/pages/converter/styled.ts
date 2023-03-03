import { FlexWrapper } from "@/styles/styled";
import styled from "styled-components";

export const ConverterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 4rem auto 0 auto;
  max-width: 50%;
  padding: 48px;
  background: #fbfcfe;
  border-radius: 16px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #0d0d2b;
`;

export const SwitchButton = styled.button`
  cursor: pointer;
  padding: 16px 32px;
  color: #ffffff;
  background: #3671e9;
  border-radius: 32px;
  border: none;
`;

export const CurrenciesWrapper = styled(FlexWrapper)`
  gap: 13px;
`;

export const OutputWrapper = styled(FlexWrapper)`
  gap: 5px;
`;
