import { Button } from "./CancelBtn.styled";

export const CancelBtn = ({ handleBtn }) => {
  return (
    <Button type="button" onClick={handleBtn}>
      Cancel
    </Button>
  );
};
