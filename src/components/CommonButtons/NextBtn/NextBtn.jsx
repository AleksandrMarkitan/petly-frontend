import { Button } from "./NextBtn.styled";

export const NextBtn = ({ onClick, type = "button", text = "Next" }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <Button type={type} onClick={clickHandler}>
      {text}
    </Button>
  );
};
