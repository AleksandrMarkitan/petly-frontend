import styled from 'styled-components';

export const List = styled.ul`
  /* display: grid;
  justify-items: center;
  grid-template-columns: repeat(1fr);
  gap: 32px; */
  /* max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-flow: 260px; */

  @media screen and (min-width: 768px){
    display: grid;
    justify-items: center;
    gap: 32px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }

  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;