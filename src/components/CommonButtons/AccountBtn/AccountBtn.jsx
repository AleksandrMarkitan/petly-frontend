import { Button, UserCircle } from "./AccountBtn.styled";

export const AccountBtn = ({ text }) => {
  return (
    <Button type="button">
      <UserCircle />
      <span>{text}</span>
    </Button>
  );
};
