import { ReactComponent as DeleteIcon } from "../../../icons/trash_basket.svg";
import { Button, Text, Icon } from "./DeletePetNoticesBtn.styled";

export const DeletePetNoticesBtn = ({ onDelete }) => {
  return (
    <Button type="button" onClick={onDelete}>
      <p>Delete</p>
      <Icon><DeleteIcon /></Icon>
    </Button>
  );
};
