import { useState } from "react";
import { useMedia } from "react-use";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/auth/authSelectors";
import { BtnMenu } from "./BtnBurgerMenu/BtnBurgerMenu";
import { AuthNav } from "./AuthNav/AuthNav";
import { Menu } from "./BurgerMenu/BurgerMenu";
import { Nav } from "./Nav/Nav";
import { UserNav } from "./UserNav/UserNav";

import { DivNav, DivAuth } from "./Navigation.styled";

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
    <nav>
      {!isMenuOpen && (
        <DivNav>
          {isDesctop && <Nav />}

          <DivAuth>
            {!isMobile && token && <UserNav />}
            {!isMobile && !token && <AuthNav />}
            {!isDesctop && <BtnMenu onClick={onOpen} />}
          </DivAuth>
        </DivNav>
      )}

      {isMenuOpen && (
        <Menu
          token={token}
          onClose={onClose}
          isDesctop={isDesctop}
          isMobile={isMobile}
        />
      )}
    </nav>
  );
};
