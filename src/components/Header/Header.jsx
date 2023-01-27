import { Container } from '../CommonComponents/Container/Container';
import { Navigation } from '../Navigation/Navigation';

import { HeaderStyled } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Navigation />
      </Container>
    </HeaderStyled>
  );
};
