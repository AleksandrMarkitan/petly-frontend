import { AccountBtn } from "../../CommonButtons/AccountBtn/AccountBtn";
import { LinkStyled } from "./UserNav.styled";
// import { UserCircleStyled } from "./UserNav.styled";

// const Content = () => {
//   return (
//     <>
//       <UserCircleStyled />
//       <span>Account</span>
//     </>
//   );
// };

export const UserNav = () => {
  return (
    <>
      <LinkStyled to="/user">
        <AccountBtn text="Account" />
      </LinkStyled>
    </>
  );
};
