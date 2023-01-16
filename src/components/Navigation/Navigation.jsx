import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/auth/authSelectors";
import { BtnMenu } from "./BtnBurgerMenu/BtnBurgerMenu";
import { AuthNav } from "./AuthNav/AuthNav";
import { Menu } from "./BurgerMenu/BurgerMenu";
import { Nav } from "./Nav/Nav";
import { UserNav } from "./UserNav/UserNav";

import { NavStyled, Div, DivAuth } from "./Navigation.styled";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = useSelector(selectToken);

  return (
    <>
      {/* desctop */}
      <NavStyled>
        <Div>
          <Nav /> {/* desctop */}
          <DivAuth>
            {token && <UserNav />} {/* !mobile */}
            {!token && <AuthNav />} {/* !mobile */}
            {<BtnMenu />} {/* !desctop */}
          </DivAuth>
        </Div>

        {isMenuOpen && <Menu token={token} />}
      </NavStyled>
    </>
  );
};
