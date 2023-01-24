import styled from 'styled-components';
import { BsPlusLg } from 'react-icons/bs';
export const BtnPlusLg = styled(BsPlusLg)`
  color: ${p => p.theme.colors.secondaryBackground};
`;
export const Button = styled.button`
  width: 40px;
  height: 40px;

  background-color: ${p => p.theme.colors.accent};
  justify-content: center;
  border-radius: 50%;
  transition: color 300ms linear;

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
    transition: ${p => p.theme.transition.first};
  }
`;
//padding: 8px 0;
// font-size: 20px;
//   line-height: calc(27 / 20);
//   letter-spacing: 0.04em;
// border: 2px solid #f59256;
//#111111
