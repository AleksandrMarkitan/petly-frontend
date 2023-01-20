import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0 12px;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding-bottom: 8px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;;
  }
`;

export const Item = styled.li`
  position: relative;
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
  
  // transition: color var(--animation);
  
  @media screen and (min-width: 768px) {
    padding: 10px 28px;
    font-size: 20px;
  }

  &.active,
  &:hover,
  &:focus  {
    background-color: #f59256;
    color: #fff;
  }
`;
