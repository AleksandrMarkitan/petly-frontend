import { ReactComponent as DeleteIcon } from "../../../icons/trash_basket.svg";
import { Button, Text } from "./DeletePetNoticesBtn.styled";

export const DeletePetNoticesBtn = ({ onDelete }) => {

  return (
    <Button type="button" onClick={onDelete}>
      <Text>Delete</Text>
      <span><DeleteIcon /></span>
    </Button>
  );
};
