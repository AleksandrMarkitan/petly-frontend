import styled from 'styled-components';
import Datetime from 'react-datetime';
import { Form, Field } from 'formik';

export const Calendar = styled(Datetime)`
  position: relative;
  font-size: 16px;
  line-height: calc(22 / 16);
  max-width: 100%;

  input {
    width: 100%;
    padding: 12px 20px 12px 14px;
    font-weight: 400;
    font-size: 14px;
    line-height: calc(19 / 14);
    color: rgba(27, 27, 27, 0.6);
    background-color: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
    outline: none;
    transition: border-color 300ms linear;

    :focus {
      border-color: #f59256;
    }
  }
`;
//----------------------------------------------------------------
export const Title = styled.h3`
  font-size: 24px;
  line-height: calc(33 / 24);
  color: #111111;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: calc(49 / 36);
  }
`;

export const FormStyled = styled(Form)`
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 28px;
  }
`;
//----------------------------------------------------------------

export const InputFieldWrap = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    gap: 28px;
  }
`;

// img---------------------
export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  line-height: calc(26 / 18);
  color: #111111;

  span {
    color: #f59256;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: calc(26 / 24);
    gap: 12px;
  }
`;

export const InputField = styled(Field)`
  padding: 12px 20px 12px 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(19 / 14);
  color: rgba(27, 27, 27, 0.6);
  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  outline: none;
  transition: border-color 300ms linear;

  :focus {
    border-color: #f59256;
  }
`;

//----------------------------------------------------------------
export const BtnWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

//----------------------------------------------------------------

export const InputFileWrap = styled.div`
  position: relative;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  /* @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 140px;
    height: 140px;
  } */
  label {
    display: inline-block;
    font-size: 16px;
  }

  label span {
    content: '';
    margin-left: auto;
    margin-right: auto;
    width: 116px;
    height: 116px;
    background: #fdf7f2;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    @media (min-width: 768px) {
      width: 140px;
      height: 140px;
    }

    svg {
      width: 43px;
      height: 43px;
      fill: rgba(17, 17, 17, 0.6);
    }
  }

  /* @media (min-width: 768px) {
  } */

  label img {
    width: 116px;
    height: 116px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    margin-top: 20px;

    @media (min-width: 768px) {
      width: 140px;
      height: 140px;
    }
  }
`;

export const InputFile = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
`;

//----------------------------------------------------------------
export const CommentWrap = styled.div`
  margin-top: 20px;
`;

export const Textarea = styled.textarea`
  padding: 12px 20px 12px 14px;
  height: max-content;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(19 / 14);
  color: rgba(27, 27, 27, 0.6);
  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  outline: none;
  transition: border-color 300ms linear;
  resize: none;

  :focus {
    border-color: #f59256;
  }
`;

//----------------------------------------------------------------

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 16px;
`;
//----------------------------------------------------------------
export const Error = styled.div`
  position: absolute;
  left: 0;
  bottom: -20%;
  color: red;
  font-size: 12px;
`;
//-----------
export const SubmitBtn = styled.button`
  padding: 8px 0;
  width: 100%;
  font-size: 16px;
  line-height: calc(22 / 16);
  letter-spacing: 0.04em;
  color: #ffffff;
  background-color: #f59256;
  border: 2px solid #f59256;
  border-radius: 40px;
  transition: color 300ms linear, background-color 300ms linear;

  :hover,
  :focus {
    color: #f59256;
    background-color: #fff;
  }

  @media (min-width: 768px) {
    width: 180px;
  }
`;
