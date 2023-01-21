import { Link } from "react-router-dom";
import styled from "styled-components";
import { Form, Field } from "formik";
import { MainContainer } from "../CommonComponents/Container/Container.styled";

export const AuthContainer = styled(MainContainer)`
  padding-top: 80px;
`;

export const ErrorText = styled.p`
  position: absolute;
  bottom: -15px;
  left: 32px;
  margin: 0px;
  font-size: 10px;
  line-height: calc(1.5);
  color: red;
`;

export const Label = styled.label`
  position: relative;
`;

export const Wrapper = styled.div`
  width: 618px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;

  margin-left: auto;
  margin-right: auto;
  padding: 60px 80px;

  /* @media screen and (min-width: 768px) {
    width: 533px;
    margin-left: auto;
    margin-right: auto;
    padding: 40px 58.5px 62px 65px;
  } */

  /* @media screen and (min-width: 1280px) {
    margin-right: 91px;
  } */
`;

export const TitleLogin = styled.h2`
  text-align: center;
  font-family: "Manrope";
  font-weight: 500;
  font-size: 36px;
  line-height: 49px;
  letter-spacing: 0.04em;

  color: #111111;
  margin-bottom: 40px;
`;

export const FormCustom = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled(Field)`
  width: 100%;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  outline: none;

  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 0.6);

  padding: 14px 10px 13px 32px;

  ::placeholder {
    font-family: "Manrope";
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.04em;

    color: rgba(17, 17, 17, 0.6);
  }

  &:hover,
  &:focus {
    border-color: #f59256;
  }
`;

export const Paragraph = styled.p`
  margin-top: 40px;
  text-align: center;

  & span {
    font-family: "Manrope";
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);
  }
`;

export const FormLink = styled(Link)`
  font-family: "Manrope";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-decoration-line: underline;
  color: #3091eb;

  &:visited {
    color: rgba(85, 26, 139);
  }
`;

export const toastStyled = {
  position: "top-right",
  autoClose: 5000,
  pauseOnHover: true,
};
