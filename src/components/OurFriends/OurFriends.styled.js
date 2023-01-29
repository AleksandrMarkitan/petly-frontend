import styled from 'styled-components';
export const Box = styled.ul`
  display: flex;
  margin-top: 28px;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    margin: 40px 0 0;
  }
  @media (min-width: 1280px) {
    margin: 60px 0 0;
    justify-content: flex-start;
  }
`;
export const ListItem = styled.li`
  background-color: ${p => p.theme.colors.secondaryBackground};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: ${p => p.theme.borderRadius.br40};
  margin-bottom: 12px;
  width: 280px;
  padding: 12px 4px 14px;

  @media (min-width: 768px) and (max-width: 1279px) {
    width: calc((100% - 32px) / 2);
    margin-left: 32px;
    padding: 16px 4px 18px;
    &:nth-child(2n + 1) {
      margin-left: 0px;
    }
  }
  @media (min-width: 1279px) {
    width: calc((100% - 64px) / 3);
    padding: 16px 11px 18px;
    margin-bottom: 32px;
    margin-left: 32px;

    &:nth-child(3n + 1) {
      margin-left: 0px;
    }
  }
`;
export const Title = styled.h3`
  position: sticky;
  text-align: center;
  margin-bottom: 10px;
  font-weight: ${p => p.theme.fontWeight.fw700};
  font-size: ${p => p.theme.fontSize.fs12};
  line-height: calc(16 / 12);
  color:${p => p.theme.colors.accent};
  z-index: 2;
  cursor: pointer;
  @media (min-width: 768px) {
    margin-bottom: 16px;
    font-size: ${p => p.theme.fontSize.fs16};
    line-height: calc(22 / 16);
  :hover {
    cursor: pointer;
    transition:  ${p => p.theme.transition.first};
  }
  @media (min-width: 1280px) {
    font-size:  ${p => p.theme.fontSize.fs20};
    line-height: calc(27 / 20);
  }
   :hover,
  :focus {
    cursor: pointer;
    color: red;
    transition: ${p => p.theme.transition.first};
  }
`;
export const Wrapper = styled.div`
  display: flex;
`;
export const Picture = styled.div`
  margin: 0px;
  width: 110px;
  @media (min-width: 768px) {
    width: 120px;
  }
  @media (min-width: 1280px) {
    width: 158px;
  }
`;
export const Container = styled.ul`
  position: relative;
  margin: 0px 0px 0px 16px;
  width: 100%;
`;
export const Hr = styled.hr`
  margin: 10px 0;
  padding: 0;
  height: 0;
  border: none;
  border-top: 2px dashed #111111;
  width: 70%;
`;

export const Time = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  height: 32px;

  margin-top: 12px;
  font-size: ${p => p.theme.fontSize.fs12};
  line-height: calc(16 / 12);
  &:nth-child(1) {
    margin-top: 0px;
  }
  :hover,
  :focus {
    cursor: pointer;
    transition: ${p => p.theme.transition.first};
  }

  @media (min-width: 768px) {
    margin-top: 8px;
    font-size: ${p => p.theme.fontSize.fs14};
    line-height: calc(19 / 14);
    height: 38px;
  }
  @media (min-width: 1280px) {
    margin-top: 12px;
    font-size: ${p => p.theme.fontSize.fs16};
    line-height: calc(22 / 16);
    height: 44px;
  }
`;
export const Address = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  height: 32px;
  margin-top: 4px;
  font-size: ${p => p.theme.fontSize.fs12};
  line-height: calc(16 / 12);

  overflow: hidden;
  &:nth-child(1) {
    margin-top: 0px;
  }

  @media (min-width: 768px) {
    margin-top: 8px;
    font-size: ${p => p.theme.fontSize.fs14};
    line-height: calc(19 / 14);
    height: 38px;
  }
  @media (min-width: 1280px) {
    height: 44px;
    margin-top: 12px;
    font-size: ${p => p.theme.fontSize.fs16};
    line-height: calc(22 / 16);
  }
  :hover span {
    position: absolute;
    left: 0px;
    top: 25%;
    display: inline-block;
    padding: 2px 2px 2px 2px;
    border: 1px solid #f59256;
    cursor: pointer;
    background: #ffffff;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    transition: ${p => p.theme.transition.first};
    border-radius: 8px;
    overflow: visible;
  }
`;

export const Email = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  height: 32px;
  margin-top: 4px;
  font-size: ${p => p.theme.fontSize.fs12};
  line-height: calc(16 / 12);

  overflow: hidden;
  &:nth-child(1) {
    margin-top: 0px;
  }

  @media (min-width: 768px) {
    margin-top: 8px;
    font-size: ${p => p.theme.fontSize.fs14};
    line-height: calc(19 / 14);
    height: 38px;
  }
  @media (min-width: 1280px) {
    height: 44px;
    margin-top: 12px;
    font-size: ${p => p.theme.fontSize.fs16};
    line-height: calc(22 / 16);
  }
  :hover a {
    color: ${p => p.theme.colors.accent};
    cursor: pointer;
    transition: ${p => p.theme.transition.first};
  }
`;
export const Phone = styled(Email)``;
export const Img = styled.img`
  width: 100%;
`;
export const Button = styled.button`
  text-align: start;
  height: 32px;

  margin-bottom: 12px;
  font-size: ${p => p.theme.fontSize.fs12};
  line-height: calc(16 / 12);
  padding: 0px;
  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSize.fs14};
    line-height: calc(18 / 14);
    height: 38px;
  }
  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: calc(22 / 16);
    height: 44px;
  }
  :hover {
    color: ${p => p.theme.colors.accent};
    transition: ${p => p.theme.transition.first};
    cursor: pointer;
  }
`;
export const List = styled.ul`
  position: absolute;
  left: 0px;
  top: 25%;
  display: inline-block;
  padding: 12px 12px 12px 12px;
  border: 1px solid #f59256;
  min-width: 120px;
  cursor: pointer;
  font-size: ${p => p.theme.fontSize.fs12};
  color: ${p => p.theme.colors.mainText};
  line-height: calc(16 / 12);
  background: ${p => p.theme.colors.secondaryBackground};
  border: 1px solid ${p => p.theme.colors.accent};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  @media (min-width: 1280px) {
    top: 20%;
  }
  :hover {
    color: ${p => p.theme.colors.accent};
    transition: ${p => p.theme.transition.first};
    cursor: pointer;
  }
`;
export const Days = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Dr = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Hours = styled.p`
  display: block;
`;
export const Link = styled.a`
  position: relative;
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
  }
`;
