import styled from 'styled-components';
import { HiCamera } from 'react-icons/hi2';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

export const InputHidden = styled.div`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;
export const Form = styled.form``;
export const UserBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  min-height: 537px;
  padding: 20px 12px 20px 16px;
  border-radius: 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  background-color: ${p => p.theme.colors.secondaryBackground};
  @media (min-width: 768px) {
    position: relative;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 736px;
    min-height: 311px;
    padding: 24px 40px 24px 32px;
    border-radius: ${p => p.theme.borderRadius.br40};
  }
  @media (min-width: 1280px) {
    flex-direction: column;
    justify-content: inherit;
    width: 411px;
    min-height: 580px;
    border-radius: 0px 40px 40px 0px;
    padding: 20px 16px 20px 16px;
  }
`;
export const EditButton = styled.button`
  display: flex;
  margin-left: auto;
  :hover,
  :focus {
    transform: scale(1.1);
    transition: transform 250ms linear;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
`;
export const IconEditImgBtn = styled(HiCamera)`
  width: 20px;
  height: 20px;
  margin-right: 4px;
  fill: ${p => p.theme.colors.accent};
`;
export const Img = styled.img`
  width: 233px;
  height: 233px;
  border-radius: 50%;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
  background-color: ${p => p.theme.colors.background};
`;
export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const UserPageContainer = styled.div`
  margin-right: auto; //add
  margin-left: auto; //add
  padding: 61px 20px 20px 20px;
  @media (min-width: 320px) {
    width: 320px;
  }
  @media (min-width: 768px) {
    width: 768px;
    padding: 88px 32px 30px 0px;
  }
  @media (min-width: 1280px) {
    display: flex;
    padding: 58px 32px 40px 0px; //fix
    width: 1280px;
  }
`;

export const BoxUser = styled.section`
  position: relative;
  height: fit-content;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    position: relative;
    margin-bottom: 20px;
  }
  @media (min-width: 1280px) {
    margin-right: 32px;
    margin-bottom: 0px;
  }
`;
export const BoxTitleUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
    margin-left: 32px;
  }
  @media (min-width: 1280px) {
    margin-left: 16px;
    margin-bottom: 24px;
  }
`;

export const TitleUser = styled.h2`
  color: ${p => p.theme.colors.mainText};
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.04em;
  @media (min-width: 768px) {
    font-size: 28px;
  }
  @media (min-width: 1280px) {
    font-size: 28px;
  }
`;

export const UserCalendar = styled(Datetime)`
  position: relative;
  font-size: 16px;
  line-height: calc(22 / 16);
  // max-width: 100%;

  input {
    padding: 4px 18px;
    width: 159px;
    height: 24px;
    margin-right: 9px;
    background-color: ${p =>
      p.disabled
        ? p.theme.colors.secondaryBackground
        : p.theme.colors.mainBackground};
    border: ${p => (p.disabled ? 'none' : p.theme.border.inputOutline)};
    border-color: ${p => p.theme.colors.inputOutline};
    color: ${p => p.theme.colors.mainText};
    border-radius: ${p => p.theme.borderRadius.br40};
    font-size: ${p => p.theme.fontSize.fs12};
    font-weight: ${p => p.theme.fontWeight.fw400};
    /* ::placeholder {
      color: black;
    } */
    :focus {
      outline-color: ${p => p.theme.colors.inputOutline};
    }
    @media (min-width: 768px) {
      width: 216px;
      height: 32px;
      padding: 4px 12px;
      margin-right: 24px;
      font-size: ${p => p.theme.fontSize.fs18};
    }
  }
`;
