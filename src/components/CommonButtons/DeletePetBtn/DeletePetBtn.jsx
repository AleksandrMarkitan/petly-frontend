import { DeleteBtn, DelIcon } from "./DeletePetBtn.styled";

export const DeletePetBtn = ({ onDelete = () => {} }) => {
  return (
    <DeleteBtn type="button" onClick={onDelete}>
      <DelIcon />
    </DeleteBtn>
  );
};
