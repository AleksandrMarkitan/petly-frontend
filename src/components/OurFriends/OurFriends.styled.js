import styled from "styled-components";
export const Title = styled.h3`
  position: sticky;
  text-align: center;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #f59256;
  z-index: 2;
  @media (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 22px;
  }
  :hover {
    cursor: pointer;
  }
`;

export const Box = styled.ul`
  margin: 60px 0 0;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    margin: 40px 0 0;
  }
`;

export const Hr = styled.hr`
  margin: 20px 0px 0px 0px;
  padding: 0;
  height: 0;
  border: none;
  border-top: 2px dashed #111111;
  width: 70%;
  :hover {
    color: #f59256;
  }
  @media (min-width: 768px) {
    margin: 18px 0;
  }
`;
export const Wrapper = styled.div`
  display: flex;
`;
export const ListItem = styled.li`
  background-color: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 40px;

  margin-bottom: 32px;
  margin-right: 0px;

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
    margin-left: 32px;
    &:nth-child(3n + 1) {
      margin-left: 0px;
    }
  }
`;
export const Container = styled.ul`
  position: relative;
  margin: 0px 0px 0px 16px;
  width: 100%;
`;
export const Time = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  height: 44px;
  overflow: hidden;
  margin-top: 12px;
  font-size: 16px;
  line-height: 22px;
  &:nth-child(1) {
    margin-top: 0px;
  }
  :hover {
    color: #f59256;
    cursor: pointer;
  }
  small {
    display: none;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
export const Address = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  height: 44px;
  margin-top: 12px;
  font-size: 16px;
  line-height: 22px;
  overflow: hidden;
  &:nth-child(1) {
    margin-top: 0px;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
  :hover {
    color: #f59256;
    cursor: pointer;
  }
`;

export const Email = styled(Address)``;
export const Phone = styled(Address)``;
export const Img = styled.img`
  width: 100%;
`;
export const Picture = styled.div`
  margin: 0px;
  width: 158px;
`;

export const Div = styled.div`
  :hover span {
    position: absolute;
    left: 0px;
    top: 25%;
    width: 120px;
    display: inline-block;
    padding: 12px 12px 12px 12px;
    border: 1px solid #f59256;
    cursor: pointer;
    font-size: 12px;
    color: black;
    line-height: 16px;
    background: #ffffff;
    border: 1px solid #f59256;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    small {
      display: inline-block;
    }
  }
`;