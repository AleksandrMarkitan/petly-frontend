import { UlStyled, BtnReg, BtnLog } from "./AuthNav.styled";

export const AuthNav = ({ onClose }) => {
  return (
    <>
      <UlStyled>
        <li>
          <BtnLog to="/login" onClick={onClose}>
            Login
          </BtnLog>
        </li>
        <li>
          <BtnReg to="/register" onClick={onClose}>
            Registration
          </BtnReg>
        </li>
      </UlStyled>
    </>
  );
};
