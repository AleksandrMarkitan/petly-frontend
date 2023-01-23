import { Input, Label } from "../../Forms.styled";
import { FormError } from "../../LoginForm/LoginForm";

export const StepOne = () => {
  return (
    <>
      <Label>
        <Input name="email" type="text" placeholder="Email" required />
        <FormError name="email" />
      </Label>
      <Label>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <FormError name="password" />
      </Label>
      <Label>
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          required
        />
        <FormError name="confirmPassword" />
      </Label>
    </>
  );
};
