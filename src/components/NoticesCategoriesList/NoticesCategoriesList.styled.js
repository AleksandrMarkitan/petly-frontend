import styled from 'styled-components';

export const List = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  gap: 32px;
`;