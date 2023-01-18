import { Logo } from "../../Logo/Logo";
import { AuthNav } from "../AuthNav/AuthNav";
import { Nav } from "../Nav/Nav";
import { UserNav } from "../UserNav/UserNav";
import { DivBox, Div1, DivAuth, CloseIcon } from "./BurgerMenu.styled";

export const Menu = ({ token, onClose, isDesctop, isMobile }) => {
  if (isDesctop) {
    onClose();
  }

  return (
    <DivBox>
      <Div1>
        <Logo />
        <button type="button" onClick={onClose}>
          <CloseIcon />
        </button>
      </Div1>
      <div>
        {isMobile && (
          <DivAuth>
            {token && <UserNav />}
            {!token && <AuthNav />}
          </DivAuth>
        )}
        {!isDesctop && <Nav />}
      </div>
    </DivBox>
  );
};
