import { Button } from "./AddBtn.styled";

export const AddBtn = ({ closeModal }) => {
  return (
    <Button type="button" onClick={closeModal}>
      +
    </Button>
  );
};
