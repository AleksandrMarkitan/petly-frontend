import styled from "styled-components";
import { file } from "../../assets/icons/fluent_delete-16-filled.svg";

export const List = styled.ul`
  position: relative;
  margin: 40px 0 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const WrapperPicDiv = styled.img`
  margin: 16px auto 20px;
  border-radius: 20px;
`;

export const DescriptionUl = styled.ul`
  padding: 20px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`;
//   height: 100%;
//   width: 100%;

export const ListItem = styled.li`
  position: relative;

  background-color: green;
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 330px;
  }

  @media (min-width: 1280px) {
    width: 394px;
  }
`;

export const DeleteBtn = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 272px;
  right: 20px;

  :hover {
    background-color: red;
  }
`;

export const DeleteBtn2 = styled.button`
  padding: 0px;
  position: absolute;
  top: 0px;
  right: 0px;
  border: 1px dashed black;
  background-image: url("../../assets/icons/fluent_delete-16-filled.svg");
`;

//-------------

export const NewsTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: calc(33 / 24);
  letter-spacing: -0.01em;
  color: #111111;
`;

export const Description = styled.p`
  margin: 16px 0 0;
  font-weight: 400;
  font-size: 16px;
  line-height: calc(22 / 16);
  color: #111321;
  max-height: 154px;
  overflow: hidden;

  @media (min-width: 768px) {
    max-height: 132px;
  }
`;

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const Date = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: calc(22 / 16);
  color: rgba(17, 17, 17, 0.6);
`;

export const Link = styled.a`
  position: relative;
  font-size: 16px;
  line-height: calc(22 / 16);
  color: #f59256;

  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    background-color: #f59256;
    transition: width 300ms linear;
  }

  :hover::after {
    width: 100%;
  }
`;

//   ::before {
//     content: "";
//     position: absolute;
//     top: -4px;
//     left: 0;
//     width: 85%;
//     height: 4px;
//     background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
//     border-radius: 40px;
