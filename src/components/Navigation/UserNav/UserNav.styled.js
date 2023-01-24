import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

import { AuthBtn } from "../../CommonButtons/AuthBtn/AuthBtn.styled";
import { NavLink } from "react-router-dom";

export const AccountBtn = styled(AuthBtn)``;

export const UserCircle = styled(FaUserCircle)`
  width: 17px;
  height: 17px;

  @media (min-width: 768px) {
    width: 23px;
    height: 23px;
  }
`;

export const BtnAvatar = styled(NavLink)`
  position: relative;
  width: 44px;
  height: 44px;
  color: #f59256;
  border-radius: 50%;
  overflow: hidden;
  :hover,
  :focus {
    outline: 6px solid rgba(245, 146, 86, 0.3);
  }
`;

export const UserCircleAvatar = styled(FaUserCircle)`
  position: absolute;
  top: -1px;
  left: -1px;
  width: 46px;
  height: 46px;

  @media (min-width: 768px) {
  }
`;
