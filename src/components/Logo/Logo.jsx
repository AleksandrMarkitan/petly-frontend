import { NavLink } from 'react-router-dom';
import { LogoText, Span } from './Logo.styled';

export const Logo = () => {
  return (
    <NavLink to="/">
      <LogoText>
        pe<Span>t</Span>ly
      </LogoText>
    </NavLink>
  );
};
