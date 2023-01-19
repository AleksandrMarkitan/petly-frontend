import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 37px;
  background-color: #f59256;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-size: 14px;
  line-height: calc(19 / 14);
  letter-spacing: 0.04em;
  color: #fff;
  transition: color 300ms linear, background-color 300ms linear;

  :hover,
  :focus {
    background-color: #fff;
    color: rgba(0, 0, 0, 1);
  }

  @media (min-width: 768px) {
    padding: 11px 28px;
    font-size: 16px;
  }
`;

export const UserCircle = styled(FaUserCircle)`
  width: 17px;
  height: 17px;

  @media (min-width: 768px) {
    width: 23px;
    height: 23px;
  }
`;
