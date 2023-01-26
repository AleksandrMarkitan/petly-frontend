import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

import { AuthBtn } from '../../CommonButtons/AuthBtn/AuthBtn.styled';
import { NavLink } from 'react-router-dom';

export const AccountBtn = styled(AuthBtn)`
  padding: 6px 37px;
  background-color: rgba(245, 146, 86, 1);
  color: rgba(255, 255, 255, 1);
  :hover {
    background-color: #ffffff;
    color: #111111;
  }
  :hover div {
    color: #f59256;
  }
  @media (min-width: 768px) {
    padding: 9px 28px;
    font-size: 16px;
  }

  div {
    position: relative;
    width: 17px;
    height: 17px;

    border-radius: 50%;
    overflow: hidden;

    @media (min-width: 768px) {
      width: 23px;
      height: 23px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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

export const BtnAvatar = styled(NavLink)`
  position: relative;
  margin-bottom: 10px;
  border-radius: 50%;
  @media (min-width: 768px) {
    margin-bottom: 0px;
    :hover span {
      display: block;
      visibility: visible;
      opacity: 1;
    }
  }

  span {
    display: block;
    position: absolute;
    top: 55px;
    left: -34px;
    transition: visibility 300ms cubic-bezier(0.42, 0, 1, 1),
      opacity 300ms cubic-bezier(0.42, 0, 1, 1);

    @media (min-width: 768px) {
      left: auto;
      right: 54px;
      top: 0px;
    }
    @media (min-width: 1280px) {
      pointer-events: none;
      visibility: hidden;
      opacity: 0;
      left: auto;
      right: 0px;
      top: 54px;
    }
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: rgba(83, 83, 83, 1);

  @media (min-width: 768px) {
    align-items: end;
    padding: 5px;
  }

  @media (min-width: 1280px) {
    background-color: rgba(245, 146, 86, 0.3);
    border-radius: 5px;
  }
`;

export const Email = styled.p`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;
