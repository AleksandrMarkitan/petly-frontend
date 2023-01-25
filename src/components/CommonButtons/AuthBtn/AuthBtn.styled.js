import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 37px;
  background-color: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-size: 14px;
  line-height: calc(19 / 14);
  letter-spacing: 0.04em;
  color: #111111;
  transition: color 300ms linear, background-color 300ms linear,
    text-decoration 300ms linear;

  &:hover {
    background-color: #f59256;
    color: #fff;
  }
  &.active {
    background-color: #f59256;
    color: #fff;
  }

  @media (min-width: 768px) {
    padding: 11px 28px;
    font-size: 16px;
  }
`;
