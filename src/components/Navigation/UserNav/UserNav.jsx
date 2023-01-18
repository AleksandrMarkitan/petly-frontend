import { Link } from "react-router-dom";
import { AccountBtn } from "../../CommonButtons/AccountBtn/AccountBtn";
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
      <Link to="/user">
        <AccountBtn text="Account" />
      </Link>
    </>
  );
};
