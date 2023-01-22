import styled from "styled-components";
import { HiPencil } from "react-icons/hi";
import { BsCheckLg } from "react-icons/bs";
export const Div = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 8px;
    @media (min-width: 1280px) {
      margin-bottom: 15px;
    }
  }
  @media (min-width: 768px) {
    width: 379px;
  }
`;
export const Title = styled.label`
  width: 64px;
  font-size: 12px;
  font-weight: 500px;
  @media (min-width: 768px) {
    width: 107px;
    font-size: 18px;
  }
`;
export const Block = styled.div`
  display: flex;
  flex: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
export const Input = styled.input`
  padding: 4px 18px;
  width: 159px;
  height: 24px;
  background-color: #fff;
  border: 1px solid;
  border-color: rgba(245, 146, 86, 0.5);
  color: #111111;
  border-radius: 40px;
  font-size: 12px;
  font-weight: 400;
  :focus {
    outline-color: rgba(245, 146, 86, 0.5);
  }
  @media (min-width: 768px) {
    width: 216px;
    height: 32px;
    padding: 4px 12px;
    font-size: 18px;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  background-color: #fdf7f2;
  margin-left: auto;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
export const EditTextBtnIcon = styled(HiPencil)`
  width: 13px;
  height: 13px;
  color: #f59256;
  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const IconCheck = styled(BsCheckLg)`
  width: 10px;
  height: 8px;
  fill: #f59256;
  @media (min-width: 768px) {
    width: 17px;
    height: 13px;
  }
`;
