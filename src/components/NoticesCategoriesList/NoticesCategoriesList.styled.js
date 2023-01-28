import styled from 'styled-components';

export const List = styled.ul`

  /* @media screen and (min-width: 768px){ */
    display: grid;
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
    /* justify-items: center; */
    gap: 32px;
  /* } */

  @media screen and (min-width: 1280px) {
    /* grid-template-columns: repeat(4, 1fr); */
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  }

`;