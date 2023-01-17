import { Link } from "react-router-dom";
import { UlStyled } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <>
      <UlStyled>
        <li>
          <Link to="/register">
            <button>Registration</button>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </li>
      </UlStyled>
    </>
  );
};
