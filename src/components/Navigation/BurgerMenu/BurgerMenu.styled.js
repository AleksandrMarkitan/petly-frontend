import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';

export const NavStyled = styled.nav`
  position: fixed;
  background-color: rgba(253, 247, 242, 1);
  z-index: 50;
  padding: 16px 20px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);

  @media (min-width: 768px) {
    padding: 24px 32px;
  }
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 46px;
  button {
    padding: 0;
  }

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
