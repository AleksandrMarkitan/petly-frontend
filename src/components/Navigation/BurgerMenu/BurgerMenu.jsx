import { Logo } from "../../Logo/Logo";
import { AuthNav } from "../AuthNav/AuthNav";
import { Nav } from "../Nav/Nav";
import { UserNav } from "../UserNav/UserNav";
import { NavStyled, Div1, Div2, CloseIcon } from "./BurgerMenu.styled";

export const BurgerMenu = ({ token, onClose, isDesctop, isMobile }) => {
  if (isDesctop) {
    onClose();
  }

  return (
    <NavStyled>
      <Div1>
        <Logo />
        <button type="button" onClick={onClose}>
          <CloseIcon />
        </button>
      </Div1>
      <Div2>
        {isMobile && token && <UserNav />}
        {isMobile && !token && <AuthNav />}

        {!isDesctop && <Nav onClose={onClose} />}
      </Div2>
    </NavStyled>
  );
};
