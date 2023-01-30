import { Button, DeleteIcon } from "./DeletePetNoticesBtn.styled";

export const DeletePetNoticesBtn = ({ onClick = () => { } }) => {

  return (
    <Button type="button" onClick={onClick}>
      Delete
      <DeleteIcon />
    </Button>
  );
};
