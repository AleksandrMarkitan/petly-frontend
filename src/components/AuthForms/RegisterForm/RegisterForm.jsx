import React from 'react';
import { FormikWizard } from 'formik-wizard-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
// import Select from 'react-select';
// import AsyncSelect from 'react-select/async';

import { login, register } from '../../../redux/auth/authOperations';
import { BackBtn, Button } from '../../CommonButtons/LoginBtn/LoginBtn.styled';
import { Container } from '../../CommonComponents/Container/Container';
import {
  FormCustom,
  FormLink,
  Paragraph,
  TitleAuth,
  Wrapper,
} from '../Forms.styled';
import { StepOne } from './StepOne/StepOne';
import { StepTwo } from './StepTwo/StepTwo';
import { useState } from 'react';
// import cities from '../../../data/cities.json';

// const testCity = cities.map((item, idx) => ({
//   value: idx,
//   label: `${item.city}, ${item.admin_name}`,
// }));
// import { getCities } from '../../../serveсes/getCities';

export const passwordRegexp = /^[A-Za-z0-9!?#$%^&_\-*]{7,32}$/;
const nameRegexp = /^[a-zA-Z]{2,20}$/;
const cityRegexp = /^([^0-9][A-Za-z-\s]{2,})*,([^0-9][A-Za-z-\s]{2,})*/;
const phoneRegexp = /^\+380\d{9}$/;
export const emailRegexp =
  /^[^-._]{1}[A-Za-z0-9._-]{1,}@[^-._]{1}[A-Za-z0-9.-]{0,}\.[A-Za-z]{2,4}$/;

const reg = /^([A-Za-z-\s]{2,}),\s([A-Za-z-\s]{2,})$/;

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [citiesTest, setCities] = useState('');

  const loginUser = values => {
    dispatch(login(values))
      .then(resp => {
        if (resp.meta.requestStatus === 'fulfilled') {
          navigate('/user', { replace: true });
        }
        return;
      })
      .catch(err => {
        console.log('err', err.message);
      });
  };

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    city: '',
    phone: '',
  };

  const schemaStepOne = yup.object({
    email: yup
      .string()
      .min(10, 'Password must consist of at least 10 symbols')
      .max(63)
      .matches(emailRegexp, 'Please, enter a valid e-mail'),
    // .required('E-mail is required'),
    password: yup
      .string()
      .min(7, 'Password must consist of at least 7 symbols')
      .max(32, 'Password must contain no more than 32 symbols')
      .matches(passwordRegexp, 'Please, enter a valid password'),
    // .required('Password is required'),
    confirmPassword: yup
      .string('Please, confirm your password')
      .oneOf(
        [yup.ref('password')],
        'This password doesn`t match the previous one'
      ),
    // .required('Password is required'),
  });

  const schemaStepTwo = yup.object({
    name: yup
      .string()
      .min(2, 'Name must contain at least 2 symbol')
      .max(20, 'Name must contain no more than 20 symbols')
      .matches(nameRegexp, 'Please, enter a valid name')
      .required('Name is required'),
    city: yup
      .string()
      // .max(50, 'Too long')
      // .matches(
      //   reg,
      //   'Please, enter a valid city. For example, Ivano-Frankivsk, Ivano-Frankivsk Oblast'
      // )
      .required('City is required'),
    phone: yup
      .string()
      .matches(
        phoneRegexp,
        'Please, enter the phone number in the format +380xxxxxxxxxxx'
      )
      .required('Phone is required'),
  });

  const handleSubmit = (
    { name, email, password, city, phone },
    { resetForm }
  ) => {
    console.log('finished', name, city);
    const values = { email, password };
    dispatch(register({ name, email, password, city, phone })).then(resp => {
      if (resp.meta.requestStatus === 'fulfilled') {
        loginUser(values);
      }
    });

    resetForm();
  };

  // const filterCities = inputValue => {
  //   return testCity
  //     .filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
  //     .slice(0, 30);
  // };

  // const loadOptions = (inputValue, callback) => {
  //   setTimeout(() => {
  //     callback(filterCities(inputValue));
  //   }, 500);
  // };

  return (
    <>
      <FormikWizard
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnNext
        activeStepIndex={0}
        steps={[
          {
            component: StepOne,
            validationSchema: schemaStepOne,
          },
          {
            component: StepTwo,
            validationSchema: schemaStepTwo,
          },
        ]}
      >
        {({ renderComponent, handlePrev, handleNext, isLastStep }) => (
          <Container>
            <Wrapper>
              <TitleAuth>Registration</TitleAuth>
              <FormCustom>
                {renderComponent()}

                <Button onClick={handleNext}>
                  {isLastStep ? 'Register' : 'Next'}
                </Button>
                {isLastStep && (
                  <BackBtn type="button" onClick={handlePrev}>
                    Back
                  </BackBtn>
                )}
              </FormCustom>
              <Paragraph>
                <span>Already have an account? </span>
                <FormLink to="/login">Login</FormLink>
              </Paragraph>
            </Wrapper>
          </Container>
        )}
      </FormikWizard>
    </>
  );
};
