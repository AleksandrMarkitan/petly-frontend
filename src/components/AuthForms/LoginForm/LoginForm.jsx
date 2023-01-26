import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../redux/auth/authOperations';

import {
  Input,
  TitleAuth,
  Wrapper,
  Paragraph,
  FormLink,
  FormCustom,
  ErrorText,
  Label,
} from '../../AuthForms/Forms.styled';
import { LoginBtn } from '../../CommonButtons/LoginBtn/LoginBtn';
import { Container } from '../../CommonComponents/Container/Container';
import { emailRegexp, passwordRegexp } from '../RegisterForm/RegisterForm';

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string()
      .max(63)
      .matches(emailRegexp, 'Please, enter a valid e-mail')
      .required('E-mail is required'),
    password: yup
      .string()
      .min(7, 'Password must consist of at least 7 symbols')
      .max(32, 'Password must contain no more than 32 symbols')
      .matches(passwordRegexp, 'Please, enter a valid password')
      .required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values)).then(resp => {
      // console.log(resp);
      if (resp.meta.requestStatus === 'fulfilled') {
        navigate('/user', { replace: true });
        // resetForm();
      }
      if (resp.meta.requestStatus === 'rejected') {
        // initialValues = values;
        console.log('values', values);
        // console.log('initial', initialValues);
      }
      return;
    });
    // .catch(err => {
    //   initialValues = values;
    // });
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
          {({ errors }) => (
            <FormCustom>
              <Label>
                <Input
                  test={errors.email}
                  name="email"
                  type="text"
                  placeholder="Email"
                />
                <FormError name="email" />
              </Label>
              <Label>
                <Input
                  test={errors.password}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <FormError name="password" />
              </Label>
              <LoginBtn text={'Login'} />
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
