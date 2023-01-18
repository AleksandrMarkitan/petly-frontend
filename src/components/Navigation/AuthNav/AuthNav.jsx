import { Link } from "react-router-dom";
import { UlStyled, BtnReg, BtnLog } from "./AuthNav.styled";



export const AuthNav = () => {
  return (
    <>
      <UlStyled>
        <li>
          <Link to="/login">
            <BtnLog text="Login" />
          </Link>
        </li>
        <li>
          <Link to="/register">
            <BtnReg text="Registration" />
          </Link>
        </li>
      </UlStyled>
    </>
  );
};
