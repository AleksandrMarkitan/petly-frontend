import { Button, BtnPlusLg } from './AddBtn.styled';
export const AddBtn = ({ closeModal }) => {
  return (
    <Button type="button" onClick={closeModal}>
      <span>
        <BtnPlusLg />
      </span>
    </Button>
  );
};
