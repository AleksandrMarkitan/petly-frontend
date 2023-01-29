import styled from 'styled-components';
import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { MdPets } from 'react-icons/md';
export const LogOut = styled.button`
  display: flex;
  line-height: 22px;
  align-items: center;
  letter-spacing: 0.04em;
  cursor: pointer;

  color: ${p => p.theme.colors.inputText};
  font-weight: ${p => p.theme.fontWeight.fw600};
  padding: 0px;
  margin-top: 42px;
  width: max-content;
  :hover,
  :focus {
    transform: scale(1.1);
    transition: transform 250ms linear;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    margin-left: auto;
  }
  @media (min-width: 768px) {
    margin-top: 36px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    left: 32px;
    top: 240px;
  }
  @media (min-width: 1279px) {
    font-size: ${p => p.theme.fontSize.fs16};
    margin-top: 27px;
  }
`;
export const LogOutIcon = styled(HiArrowRightOnRectangle)`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  color: ${p => p.theme.colors.accent};
  z-index: 2;
  margin-bottom: -5px;
`;
export const PetIcon = styled(MdPets)`
  width: 18px;
  height: 18px;
  margin-left: 5px;
  margin-bottom: -3px;
  fill: ${p => p.theme.colors.accent};
  transition: fill 250ms cubic-bezier(0.57, 0.21, 0.69, 1.25);

  :hover,
  :focus {
    fill: ${p => p.theme.colors.secondaryBackground};
  }
`;

export const Button = styled.button`
  padding: 8px 0;
  width: 100%;
  font-size: ${p => p.theme.fontSize.fs16};
  line-height: calc(22 / 16);
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.mainText};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.borderRadius.br40};
  transition: color 300ms linear;

  :hover,
  :focus {
    color: ${p => p.theme.colors.secondaryBackground};
    background-color: ${p => p.theme.colors.accent};
  }
  &:hover svg {
    fill: ${p => p.theme.colors.secondaryBackground};
    transition: color 300ms linear;
  }

  @media (min-width: 768px) {
    width: 180px;
  }
`;
export const BoxLogOut = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
export const PreTitle = styled.div`
  line-height: 140.5%;
  font-size: ${p => p.theme.fontSize.fs18};
  margin-bottom: 10px;
  text-align: center;
  margin-right: 0;
  @media (min-width: 768px) {
    margin: 0px;
    font-size: ${p => p.theme.fontSize.fs32};
    width: 500px;
  }
`;
export const Image = styled.img``;
export const BoxItem = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;
export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title = styled.p`
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    margin-top: 15px;
  }
`;
