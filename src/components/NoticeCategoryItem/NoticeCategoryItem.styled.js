import styled from 'styled-components';

export const Item = styled.li`
border-radius: 2px;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
0px 1px 1px 0px rgba(0, 0, 0, 0.14),
0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Wrap = styled.div`
`;
export const ImgWrap = styled.div`
  position: relative;
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
  letter-spacing: 0.04em;
  text-align: center;
  color: #111111;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 0px 40px 40px 0px;

  @media screen and (min-width: 768px) {
    padding: 6px 0;
    font-size: 12px;
    line-height: calc(16 / 12);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const Inner = styled.div`
`;
export const Title = styled.p`
`;
export const Ul = styled.ul`
`;
export const Li = styled.li`
`;
export const Lable = styled.p`
`;
export const Text = styled.p`
`;
