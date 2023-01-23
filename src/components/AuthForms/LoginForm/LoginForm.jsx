import { useDispatch } from "react-redux";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { login } from "../../../redux/auth/authOperations";

import {
  Input,
  TitleAuth,
  Wrapper,
  Paragraph,
  FormLink,
  FormCustom,
  ErrorText,
  Label,
} from "../../AuthForms/Forms.styled";
import { LoginBtn } from "../../CommonButtons/LoginBtn/LoginBtn";
import { Container } from "../../CommonComponents/Container/Container";
import { emailRegexp, passwordRegexp } from "../RegisterForm/RegisterForm";

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    email: yup
      .string()
      .max(63)
      .matches(emailRegexp, "Please, enter a valid e-mail")
      .required("E-mail is required"),
    password: yup
      .string()
      .min(7, "Password must consist of at least 7 symbols")
      .max(32, "Password must contain no more than 32 symbols")
      .matches(passwordRegexp, "Please, enter a valid password")
      .required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Container>
      <Wrapper>
        <TitleAuth>Login</TitleAuth>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {() => (
            <FormCustom>
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
              <LoginBtn text={"Login"} />
            </FormCustom>
          )}
        </Formik>

        <Paragraph>
          <span>Don't have an account? </span>
          <FormLink to="/register">Register</FormLink>
        </Paragraph>
      </Wrapper>
    </Container>
  );
};
