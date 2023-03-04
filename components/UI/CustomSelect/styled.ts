import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 120px;
  padding: 14px 16px;
  background: #ffffff;

  border: 1px solid #e5e7eb;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;

  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;

  ::-ms-expand {
    display: none;
  }

  :focus {
    outline: none;
  }
`;

export const SelectWrapper = styled.div`
  //   display: flex;
  position: relative;

  img {
    position: absolute;
    transform: rotate(180deg);
    right: 15px;
    top: 17px;
  }
`;
