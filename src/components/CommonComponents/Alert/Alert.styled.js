import styled from 'styled-components';
import { AuthBtn } from '../../CommonButtons/AuthBtn/AuthBtn.styled';
import { Button } from '../../CommonButtons/CategoryBtn/CategoryBtn.styled';
import { BackDrop } from '../../CommonComponents/ModalWindow/ModalWindow.styled';

export const BackDropAlert = styled(BackDrop)`
  z-index: 10;
  background-color: transparent;
  backdrop-filter: none;
`;

export const Box = styled.div`
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 640px;
  height: 300px;
  border: ${p => p.theme.border.main};
  border-radius: 20px;
  background-color: ${p => p.theme.colors.secondaryBackground};
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.5);
  text-align: center;
  overflow: hidden;

  h2 {
    background-color: ${p => p.theme.colors.accent};
    color: #fff;
    padding: 10px;
    width: 100%;
    font-weight: 500;
    font-size: 24px;
    line-height: calc(26 / 24);
  }

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: calc(24 / 20);
    letter-spacing: -0.01em;
  }

  b {
    font-size: 22px;
  }

  div {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`;

export const Btn = styled(Button)`
  width: 200px;
`;

export const BtnOK = styled(AuthBtn)`
  width: 200px;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 10px 28px;
    font-size: 20px;
  }
`;
