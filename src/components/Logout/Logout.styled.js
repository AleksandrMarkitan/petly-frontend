import styled from "styled-components";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

export const LogOut = styled.button`
  display: flex;
  line-height: 22px;
  align-items: center;
  letter-spacing: 0.04em;
  cursor: pointer;
  color: rgba(17, 17, 17, 0.6);
  font-weight: 500;
  @media (min-width: 768px) {
  }
  @media (min-width: 1279px) {
    font-size: 16px;
  }
`;
export const LogOutIcon = styled(HiArrowRightOnRectangle)`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  color: #f59256;
`;
