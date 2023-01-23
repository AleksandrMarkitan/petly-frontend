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
  padding: 0px;
  margin-top: 42px;
  @media (min-width: 320px) and (max-width: 767px) {
    margin-left: auto;
  }
  @media (min-width: 768px) {
    margin-top: 36px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    left: 32px;
    top: 240px;
  }
  @media (min-width: 1279px) {
    font-size: 16px;
    margin-top: 27px;
  }
`;
export const LogOutIcon = styled(HiArrowRightOnRectangle)`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  color: #f59256;
`;
