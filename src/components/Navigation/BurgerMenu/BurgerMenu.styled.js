import styled from "styled-components";
import { CgClose } from "react-icons/cg";

export const NavStyled = styled.nav`
  position: absolute;
  background-color: #fff;
  z-index: 50;
  padding: 16px 20px;
  width: 100%;
  top: 0;
  left: 0;

  @media (min-width: 768px) {
    padding: 24px 32px;
  }
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 46px;

  @media (min-width: 768px) {
    margin-bottom: 88px;
  }
`;

export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  margin-bottom: 46px;

  @media (min-width: 768px) {
    margin-bottom: 88px;
  }
`;

export const CloseIcon = styled(CgClose)`
  width: 32px;
  height: 32px;
`;
