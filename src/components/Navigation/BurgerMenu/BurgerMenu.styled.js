import styled from "styled-components";
import { CgClose } from "react-icons/cg";

export const DivBox = styled.div`
  position: absolute;
  background-color: #fff;
  z-index: 5;
  width: 100%;
  top: 0;
  left: 0;
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 46px;

  @media (min-width: 768px) {
    margin-bottom: 88;
  }
`;

export const DivAuth = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

export const CloseIcon = styled(CgClose)`
  width: 32px;
  height: 32px;
`;
