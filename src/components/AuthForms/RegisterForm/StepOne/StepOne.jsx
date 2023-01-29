import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Icon, Input, Label } from '../../Forms.styled';
import { FormError } from '../../LoginForm/LoginForm';

export const StepOne = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };
  return (
    <>
      <Label>
        <Input name="email" type="text" placeholder="Email" />
        <FormError name="email" />
      </Label>
      <Label>
        <Input
          name="password"
          type={passwordShown ? 'text' : 'password'}
          placeholder="Password"
        />
        <Icon onClick={togglePassword}>
          {passwordShown ? <FaEye /> : <FaEyeSlash />}
        </Icon>
        <FormError name="password" />
      </Label>
      <Label>
        <Input
          name="confirmPassword"
          type={confirmPasswordShown ? 'text' : 'password'}
          placeholder="Confirm password"
        />
        <Icon onClick={toggleConfirmPassword}>
          {confirmPasswordShown ? <FaEye /> : <FaEyeSlash />}
        </Icon>
        <FormError name="confirmPassword" />
      </Label>
    </>
  );
};
