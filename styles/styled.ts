import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 4em;
  min-height: 100vh;
  color: #ffffff;
  background: #0d0d2b;
`;

export const FlexWrapper = styled.div`
  display: flex;
`;

export const StyledNavigation = styled.nav`
  display: flex;
  gap: 23px;
  justify-content: flex-end;
  a {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.01em;
    color: #ffffff;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const MainNavigation = styled(StyledNavigation)`
  display: flex;
  justify-content: center;
  a {
    font-size: 32px;
    :hover {
        font-weight: 700;
      }
  }
  }
`;
