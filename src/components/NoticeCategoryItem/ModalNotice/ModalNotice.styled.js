import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';

import { Button } from '../../CommonButtons/CategoryBtn/CategoryBtn.styled';

export const Box = styled.div`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const ThumbImg = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  margin-bottom: 16px;
  border-radius: 0px 0px 40px 40px;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 288px;
    height: 328px;
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Category = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: calc(16 / 12);
  letter-spacing: 0.04em;

  color: #111111;
  position: absolute;
  top: 20px;
  left: 0;
  width: 158px;
  padding: 6px 0px 6px 20px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px);
  border-radius: 0 14px 14px 0;
  overflow: hidden;
`;

export const BoxTitleList = styled.div``;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.37;
  letter-spacing: -0.01em;

  color: #000000;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 1.36;
    width: 300px;
  }
`;

export const ListOfValues = styled.dl``;

export const BoxValue = styled.div`
  display: flex;
  &:not(:last-child) {
    padding-bottom: 8px;
  }
`;

export const TitleValue = styled.dt`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.37;
  color: #000000;
  width: 118px;

  @media (min-width: 768px) {
    font-size: 16px;
    width: 121px;
  }
`;

export const Value = styled.dd`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(19 / 14);
  color: #000000;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: calc(22 / 16);
  }

  a {
    text-decoration: underline;
    :hover {
      color: #ff6101;
    }
  }
`;

export const Comments = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: calc(19 / 14);
  letter-spacing: 0.04em;
  margin-bottom: 40px;

  color: #000000;

  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 16px;
    line-height: calc(24 / 16);
    margin-bottom: 32px;
  }
`;

export const BoxBtns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: calc(19 / 14);
    color: #f59256;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: calc(22 / 16);
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: end;
    padding: 0 20px;
  }
`;

export const Btn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 7px;
  padding-bottom: 7px;
  font-size: 16px;
  line-height: calc(22 / 16);

  @media (min-width: 768px) {
    width: 160px;
  }
  span {
    display: flex;
    align-items: center;
    color: #f59256;
    transition: color 400ms linear;
  }
  :hover span {
    color: #fff;
  }
`;

export const BtnIsAdded = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 7px;
  padding-bottom: 7px;
  font-size: 16px;
  line-height: calc(22 / 16);
  background-color: #f59256;
  color: #fff;

  :hover {
    background-color: #fff;
    color: #111111;
  }
  @media (min-width: 768px) {
    width: auto;
  }
  span {
    display: flex;
    align-items: center;
    color: #fff;

    transition: color 400ms linear;
  }
  :hover span {
    color: #f59256;
  }
`;

export const Heart = styled(AiFillHeart)`
  width: 18px;
  height: 18px;
  margin-left: 8px;
`;
