import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: rgba(24, 28, 39, 1);
  &:hover {
    text-decoration-line: underline;
  }

  &.active {
    color: rgba(245, 146, 86, 1);
    font-weight: 700;
    text-decoration-line: underline;
  }

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.35;
    color: rgba(0, 0, 0, 1);
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 46px;

  @media (min-width: 768px) {
    gap: 60px;
    margin-bottom: 88;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 80px;
    margin-bottom: 0;
  }
`;
