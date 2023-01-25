import styled from 'styled-components';

export const WrapperPicDiv = styled.img`
  margin-bottom: 20px;
  width: 240px;
  height: 240px;
  border-radius: ${p => p.theme.borderRadius.br20};
  background-color: ${p => p.theme.colors.background};
  @media (min-width: 768px) {
    margin-right: 32px;
    margin-bottom: 0;
    width: 161px;
    height: 161px;
  }
`;

export const Description = styled.div`
  position: relative;
  @media (min-width: 768px) {
    width: 471px;
  }
  @media (min-width: 1280px) {
    width: 580px;
  }
`;
export const Box = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  padding: 20px;
  border-radius: ${p => p.theme.borderRadius.br40};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  background-color: ${p => p.theme.colors.secondaryBackground};
  @media (min-width: 768px) {
    display: flex;
    width: 704px;
  }
  @media (min-width: 1280px) {
    width: 821px;
    margin-bottom: 22px;
  }
`;

export const InfoPet = styled.p`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: ${p => p.theme.fontSize.fs14};
  font-weight: ${p => p.theme.fontWeight.fw400};
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSize.fs16};
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
  font-weight: ${p => p.theme.fontWeight.fw400};
  font-size: ${p => p.theme.fontSize.fs16};
  line-height: calc(22 / 16);
  color: ${p => p.theme.colors.inputText};
`;

export const Link = styled.a`
  position: relative;
  font-size: 16px;
  line-height: calc(22 / 16);
  color: #f59256;

  ::after {
    content: '';
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
    transition: ${p => p.theme.transition.first};
  }
`;
