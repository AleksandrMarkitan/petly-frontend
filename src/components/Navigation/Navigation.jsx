import { useState } from "react";
import { useMedia } from "react-use";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/auth/authSelectors";
import { BtnMenu } from "./BtnBurgerMenu/BtnBurgerMenu";
import { AuthNav } from "./AuthNav/AuthNav";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { Nav } from "./Nav/Nav";
import { UserNav } from "./UserNav/UserNav";

import { DivNav, DivAuth, DivLogoNav, NavStyled } from "./Navigation.styled";
import { Logo } from "../Logo/Logo";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = useSelector(selectToken);
  const isDesctop = useMedia("(min-width: 1280px)");
  const isMobile = useMedia("(max-width: 767px)");

  const onOpen = () => {
    setIsMenuOpen(true);
  };

  const onClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <NavStyled>
        {!isMenuOpen && (
          <DivNav>
            <DivLogoNav>
              <Logo />
              {isDesctop && <Nav />}
            </DivLogoNav>

            <DivAuth>
              {!isMobile && token && <UserNav />}
              {!isMobile && !token && <AuthNav />}
              {!isDesctop && <BtnMenu onClick={onOpen} />}
            </DivAuth>
          </DivNav>
        )}

        {isMenuOpen && (
          <BurgerMenu
            token={token}
            onClose={onClose}
            isDesctop={isDesctop}
            isMobile={isMobile}
          />
        )}
      </NavStyled>
    </>
  );
};
