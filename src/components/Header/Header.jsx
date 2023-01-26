//recovery
import { Container } from '../CommonComponents/Container/Container';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';

import { HeaderStyled, Div } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Div>
          <Logo />
          <Navigation />
        </Div>
      </Container>
    </HeaderStyled>
  );
};
