import styled from 'styled-components';
import { HiTrash } from 'react-icons/hi2';

export const DeleteBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border: none;
  background-color: #fdf7f2;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
  :hover,
  :focus {
    transform: scale(1.1);
    transition: transform 250ms linear;
  }
`;

export const DelIcon = styled(HiTrash)`
  width: 22px;
  height: 22px;
  fill: rgba(17, 17, 17, 0.6);
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
  :hover,
  :focus {
    fill: #f59256;
  }
`;
