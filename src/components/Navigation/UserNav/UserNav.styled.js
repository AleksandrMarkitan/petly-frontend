import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

import { AuthBtn } from "../../CommonButtons/AuthBtn/AuthBtn.styled";

export const AccountBtn = styled(AuthBtn)``;

export const UserCircle = styled(FaUserCircle)`
  width: 17px;
  height: 17px;

  @media (min-width: 768px) {
    width: 23px;
    height: 23px;
  }
`;
