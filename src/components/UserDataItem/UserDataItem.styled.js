import styled from 'styled-components';
import { HiPencil } from 'react-icons/hi';
import { BsCheckLg } from 'react-icons/bs';

export const Div = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 12px;
    @media (min-width: 768px) {
      width: 379px;
      margin-bottom: 15px;
    }
  }
`;
export const Title = styled.label`
  width: 64px;
  font-size: ${p => p.theme.fontSize.fs12};
  font-weight: ${p => p.theme.fontWeight.fw500};

  @media (min-width: 768px) {
    width: 107px;
    font-size: ${p => p.theme.fontSize.fs18};
  }
`;
export const Block = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
export const Input = styled.input`
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
  background-color: ${p => p.theme.colors.mainBackground};
  margin-left: auto;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
  :hover,
  :focus {
    transform: scale(1.1);
    transition: transform 250ms linear;
  }
`;
export const EditTextBtnIcon = styled(HiPencil)`
  width: 13px;
  height: 13px;

  fill: ${p => {
    if (p.changecolor === 'true') {
      return p.theme.colors.accent;
    }
    return '#707070';
  }};

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const IconCheck = styled(BsCheckLg)`
  width: 10px;
  height: 8px;
  fill: ${p => p.theme.colors.accent};
  @media (min-width: 768px) {
    width: 17px;
    height: 13px;
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  bottom: -15px;
  left: 18px;
  margin: 0px;
  font-size: 10px;
  line-height: calc(1.5);
  color: red;

  @media (min-width: 768px) {
    bottom: -17px;
    left: 12px;
    font-size: ${p => p.theme.fontSize.fs12};
  }
`;
