import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: rgba(0, 0, 0, 1);
  &.hover {
    text-decoration-line: underline;
  }

  &.active {
    color: rgba(245, 146, 86, 1);
    font-weight: 700;
    text-decoration-line: underline;
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 80px;
`;
