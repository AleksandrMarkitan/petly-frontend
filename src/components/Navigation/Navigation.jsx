import { useState } from "react";
import { useMedia } from "react-use";
import { RxHamburgerMenu } from "react-icons/rx";
// import { CgClose } from "react-icons/cg";
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

  return (
    <nav>
      <DivNav>
        {isDesctop && <Nav />}

        <DivAuth>
          {!isMobile && token && <UserNav />}
          {!isMobile && !token && <AuthNav />}
          {!isDesctop && <BtnMenu />}
        </DivAuth>
      </DivNav>

      {isMenuOpen && <Menu token={token} />}
    </nav>
  );
};
