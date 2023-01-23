import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authOperations";
import { LogOut, LogOutIcon } from "./Logout.styled";

export const Logout = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <LogOut type="button" onClick={handleLogOut}>
      <LogOutIcon />
      Log Out
    </LogOut>
  );
};
