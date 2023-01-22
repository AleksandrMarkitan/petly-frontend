import { Input, Label } from "../../Forms.styled";
import { FormError } from "../../LoginForm/LoginForm";

export const StepTwo = () => {
  return (
    <>
      <Label>
        <Input name="name" placeholder="Name" required />
        <FormError name="name" />
      </Label>
      <Label>
        <Input name="city" type="text" placeholder="City, region" required />
        <FormError name="city" />
      </Label>
      <Label>
        <Input name="phone" placeholder="Mobile phone" required />
        <FormError name="phone" />
      </Label>
    </>
  );
};
