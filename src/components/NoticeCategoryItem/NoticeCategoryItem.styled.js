import styled from 'styled-components';

export const Item = styled.li`
border-radius: 2px;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
0px 1px 1px 0px rgba(0, 0, 0, 0.14),
0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;