import {
  AccountBtn,
  BtnAvatar,
  UserCircle,
  UserCircleAvatar,
} from "./UserNav.styled";

export const UserNav = ({ onClose }) => {
  return (
    <>
      <AccountBtn to="/user" onClick={onClose}>
        <UserCircle />
        Account
      </AccountBtn>
      <BtnAvatar>
        <UserCircleAvatar />
        <img src="" alt="Account" />
      </BtnAvatar>
    </>
  );
};
