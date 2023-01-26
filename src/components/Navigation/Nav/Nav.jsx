import { NavLinkStyled, Ul } from './Nav.styled';

export const Nav = ({ onClose }) => {
  return (
    <>
      <Ul>
        <li>
          <NavLinkStyled to="/news" onClick={onClose}>
            News
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/notices/sell" onClick={onClose}>
            Find pet
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/friends" onClick={onClose}>
            Our friends
          </NavLinkStyled>
        </li>
      </Ul>
    </>
  );
};
