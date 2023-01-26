import styled from 'styled-components';

export const Item = styled.li`
  color: #111111;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 40px 40px;

  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ImgWrap = styled.div`
  position: relative;
  /* width: 100%; */
  height: 288px;
`;
export const CategoryLabel = styled.p`
  position: absolute;
	top: 20px;
	left: 0;
  z-index: 1;

  padding: 6px 0;
  width: 158px;
  font-size: 12px;
  line-height: calc(16 / 12);
  text-align: center;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 0px 40px 40px 0px;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const WrapInner = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: calc(38 / 28);
  /* letter-spacing: -0.01em; */
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding-top: 20px;

  font-size: 16px;
  line-height: calc(22 / 16);
`;
export const Li = styled.li`
  display: flex;
`;
export const Lable = styled.p`
  width: 90px;
`;
export const Text = styled.p`
`;
export const ThumbBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 12px;
  padding-bottom: 12px;
  /* flex-shrink: 0; */
  /* flex-grow: 1; */
  /* padding: 0 16px 12px; */
  /* height: 100%; */
`;
