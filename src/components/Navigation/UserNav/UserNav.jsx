import { AccountBtn, UserCircle } from "./UserNav.styled";

export const UserNav = ({ onClose }) => {
  return (
    <>
      <AccountBtn to="/user" onClick={onClose}>
        <UserCircle />
        Account
      </AccountBtn>
    </>
  );
};
