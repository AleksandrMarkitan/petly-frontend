import styled from 'styled-components';
import { BsPlusLg } from 'react-icons/bs';
export const BtnPlusLg = styled(BsPlusLg)`
  color: ${p => p.theme.colors.secondaryBackground};
  position: absolute;
  top: 12px;
  left: 12px;
`;
export const Button = styled.button`
  width: 40px;
  height: 40px;

  background-color: ${p => p.theme.colors.accent};
  position: relative;
  justify-content: center;
  border-radius: 50%;
  padding: 0;
  align-items: center;
  font-size: 16px;

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
    transition: ${p => p.theme.transition.first};
    transform: scale(1.1);
    transition: transform 250ms linear;
  }
`;
