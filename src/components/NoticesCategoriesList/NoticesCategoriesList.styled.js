import styled from 'styled-components';

export const List = styled.ul`

  @media screen and (min-width: 768px){
    display: grid;
    gap: 32px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }

`;