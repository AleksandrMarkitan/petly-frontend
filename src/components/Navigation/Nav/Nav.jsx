import { NavLinkStyled, Ul } from "./Nav.styled";

export const Nav = () => {
  return (
    <>
      <Ul>
        <li>
          <NavLinkStyled to="/news">News</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/notices/sell">Find pet</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/friends">Our friends</NavLinkStyled>
        </li>
      </Ul>
    </>
  );
};
