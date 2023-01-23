import { ReactComponent as DeleteBtn } from "../../../icons/trash_basket.svg";
import { Button } from "./DeletePetBtn.styled";

export const DeletePetBtn = ({ onDelete = () => { } }) => {
  return (
    <Button type="button" onClick={onDelete}>
      <DeleteBtn />
    </Button>
  );
};
