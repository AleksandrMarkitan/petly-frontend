import { Logo } from "../../Logo/Logo";
import { AuthNav } from "../AuthNav/AuthNav";
import { Nav } from "../Nav/Nav";
import { UserNav } from "../UserNav/UserNav";

export const Menu = ({ token }) => {
  return (
    <div>
      <div>
        <Logo />
        <button>x</button>
      </div>
      <div>
        <Nav /> {/* !desctop */}
        <div>
          {token && <UserNav />} {/* mobile */}
          {!token && <AuthNav />} {/* mobile */}
        </div>
      </div>
    </div>
  );
};
