import { Button } from "./NextBtn.styled";

export const NextBtn = ({ handleBtn }) => {
  return (
    <Button type="button" onClick={handleBtn}>
      Next
    </Button>
  );
};
