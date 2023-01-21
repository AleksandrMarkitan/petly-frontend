import { Container } from "../CommonComponents/Container/Container";
import { Logo } from "../Logo/Logo";
import { ModalNotice } from "../ModalNotice/ModalNotice";
import { Navigation } from "../Navigation/Navigation";

import { HeaderStyled, Div } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Div>
          <Logo />
          <Navigation />
        </Div>
        <ModalNotice />
      </Container>
    </HeaderStyled>
  );
};
