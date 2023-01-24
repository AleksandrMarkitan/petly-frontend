import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

import { AuthBtn } from '../../CommonButtons/AuthBtn/AuthBtn.styled';
import { NavLink } from 'react-router-dom';

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
    top: 50px;
    left: -34px;
    transition: visibility 300ms cubic-bezier(0.42, 0, 1, 1),
      opacity 300ms cubic-bezier(0.42, 0, 1, 1);
    pointer-events: none;

    @media (min-width: 768px) {
      visibility: hidden;
      opacity: 0;
      left: auto;
      right: 0px;
      top: 54px;
    }
  }
`;

export const DivAvatar = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  color: #f59256;
  border-radius: 50%;
  overflow: hidden;
  outline: 5px solid rgba(245, 146, 86, 0.2);
  :hover {
    outline: 6px solid rgba(245, 146, 86, 0.3);
  }

  @media (min-width: 768px) {
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UserCircleAvatar = styled(FaUserCircle)`
  position: absolute;
  top: -1px;
  left: -1px;
  width: 46px;
  height: 46px;
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  @media (min-width: 768px) {
    align-items: end;
    background-color: rgba(245, 146, 86, 0.3);

    padding: 5px;
    border-radius: 5px;
    color: rgba(83, 83, 83, 1);
  }
`;

export const Email = styled.p`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;
