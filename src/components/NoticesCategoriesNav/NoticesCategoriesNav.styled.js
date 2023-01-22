import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  /* display: flex;
  flex-direction: column; */
  
  @media screen and (min-width: 768px) {
    /* flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 12px; */
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  @media screen and (min-width: 768px) {
    justify-content: space-between;

  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;

  }
`;

export const Item = styled.li`
  list-style: none;
`;

export const LinkNav = styled(NavLink)`
  padding: 8px 28px;
  background-color: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-size: 14px;
  line-height: calc(19 / 14);
  letter-spacing: 0.04em;
  color: #111111;
  transition: color 300ms linear, background-color 300ms linear;  
  
  
  @media screen and (min-width: 768px) {
    padding: 10px 28px;
    font-size: 20px;
    line-height: calc(27 / 20);
  }

  &.active,
  &:hover,
  &:focus  {
    background-color: #f59256;
    color: #fff;
  }
`;

