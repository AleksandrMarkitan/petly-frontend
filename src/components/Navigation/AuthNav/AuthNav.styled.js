import styled from "styled-components";
import { CategoryBtn } from "../../CommonButtons/CategoryBtn/CategoryBtn";

export const UlStyled = styled.ul`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

export const BtnReg = styled(CategoryBtn)``;

export const BtnLog = styled(CategoryBtn)`
  background-color: #f59256;
  color: #fff;
  :hover,
  :focus {
    background-color: #fff;
    color: #f59256;
  }
`;
