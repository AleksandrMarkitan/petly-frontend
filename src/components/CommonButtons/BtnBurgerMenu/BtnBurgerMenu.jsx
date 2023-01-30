import { BtnMenuBox, BtnMenuLine } from "./BtnMenu.styled";

export const BtnMenu = ({ onClick }) => {
  return (
    <BtnMenuBox onClick={onClick}>
      <BtnMenuLine />
      <BtnMenuLine />
      <BtnMenuLine />
    </BtnMenuBox>
  );
};
