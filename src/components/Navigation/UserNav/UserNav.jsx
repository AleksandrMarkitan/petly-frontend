import { AccountBtn } from "../../CommonButtons/AccountBtn/AccountBtn";
import { Link } from "react-router-dom";

export const UserNav = () => {
  return (
    <>
      <Link to="/user">
        <AccountBtn text="Account" />
      </Link>
    </>
  );
};
