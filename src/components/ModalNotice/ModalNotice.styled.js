import styled from "styled-components";
import { Button } from "../CommonButtons/CategoryBtn/CategoryBtn.styled";

export const Box = styled.div``;

export const ThumbImg = styled.div`
  width: 240px;
  height: 240px;
  border: 1px solid black;
  border-radius: 0px 0px 40px 40px;
  @media (min-width: 768px) {
    width: 288px;
    height: 328px;
  }
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const BoxTitleList = styled.div``;

export const Title = styled.h2``;

export const ListOfValues = styled.dl``;

export const BoxValue = styled.div`
  display: flex;
`;
export const TitleValue = styled.dt`
  width: 100px;
`;
export const Value = styled.dd`
  width: 100px;
`;

export const Category = styled.p``;

export const Comments = styled.p``;

export const BoxBtns = styled.div``;

export const Btn = styled(Button)``;
