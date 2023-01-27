import styled from 'styled-components';
import { Button } from '../../CommonButtons/CategoryBtn/CategoryBtn.styled';

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 600px;
  height: 300px;
  border: 4px solid #f59256;
  border-radius: 20px;
  background-color: #fff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  text-align: center;
  z-index: 10;

  h2 {
  }

  p {
  }

  div {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`;

export const Btn = styled(Button)`
  width: 100px;
`;
