import styled from "styled-components";
import { AuthBtn } from "../../CommonButtons/AuthBtn/AuthBtn.styled";

export const UlStyled = styled.ul`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

export const BtnLog = styled(AuthBtn)`
  padding: 8px 28px;

  @media (min-width: 768px) {
    padding: 10px 28px;
    font-size: 20px;
  }
`;

export const BtnReg = styled(BtnLog)``;
