import { Button, DeleteIcon } from "./DeletePetNoticesBtn.styled";

export const DeletePetNoticesBtn = ({ onDelete = () => { } }) => {

  return (
    <Button type="button" onClick={onDelete}>
      Delete
      <DeleteIcon />
    </Button>
  );
};
