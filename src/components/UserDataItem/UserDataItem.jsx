import { useState } from 'react';
import {
  Div,
  Title,
  Block,
  Input,
  Button,
  EditTextBtnIcon,
  IconCheck,
  ErrorText,
} from './UserDataItem.styled';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../redux/auth/authOperations';

export const UserDataItem = ({
  valueLabel,
  userDataValue,
  nameInput,
  setEditButtonActive,
  editButtonActive,
}) => {
  const dispatch = useDispatch();
  const prevValue = userDataValue;
  const [inputValue, setInputValue] = useState(userDataValue);
  const [inputName, setInputName] = useState(nameInput);
  const [inputActive, setInputActive] = useState(false);

  const [inputDirty, setInputDirty] = useState(false);
  const [inputError, setInputError] = useState('');

  //   const [inputEmpty, setInputEmpty] = useState('Имя не может быть пустым');
  //   const [emailError, setEmailError] = useState('Пароль не может быть пустым');
  const nameRegexp = /^[a-zA-Z]{2,20}$/;
  const cityRegexp = /^([^0-9][A-Za-z-\s]{2,})*,([^0-9][A-Za-z-\s]{2,})*/;
  const phoneRegexp = /^\+\d{12}$/;
  const emailRegexp =
    /^[^-]{1}[A-Za-z0-9._-]{2,}@[^-]{1}[A-Za-z0-9.-]{2,}\.[A-Za-z]{2,4}$/;

  const blurHandler = () => {
    setInputDirty(true);
  };

  const handleChange = evt => {
    evt.preventDefault();
    setInputValue(evt.target.value);
    setInputName(evt.target.name);

    switch (evt.target.name) {
      case 'name':
        if (!nameRegexp.test(String(evt.target.value).toLowerCase())) {
          setInputError('Please, enter a valid name');
        } else {
          setInputError('');
        }
        break;
      case 'email':
        if (!emailRegexp.test(String(evt.target.value).toLowerCase())) {
          setInputError('Please, enter a valid e-mail');
        } else {
          setInputError('');
        }
        break;
      case 'phone':
        if (!phoneRegexp.test(String(evt.target.value).toLowerCase())) {
          setInputError('Please, enter a valid phone');
        } else {
          setInputError('');
        }
        break;
      case 'city':
        if (!cityRegexp.test(String(evt.target.value).toLowerCase())) {
          setInputError('City must contain two words');
        } else {
          setInputError('');
        }
        break;
    }
  };
  //'Name must be between 2 and 20 letters'
  //'Phone number must be in the format +380xxxxxxxxxxx'

  const handleButtonUpdate = e => {
    e.preventDefault();

    if (inputValue === userDataValue) {
      setInputActive(true);
      setEditButtonActive(false);
      return;
    }
  };
  const handleButtonSubmit = e => {
    e.preventDefault();
    if (inputValue === prevValue) {
      setInputActive(false);
      setEditButtonActive(true);
      return;
    }
    if (inputError) {
      return;
    }
    switch (inputName) {
      case 'name':
        dispatch(updateUserData({ name: inputValue }));
        break;
      case 'email':
        dispatch(updateUserData({ email: inputValue }));
        break;
      case 'birthday':
        dispatch(updateUserData({ birthday: inputValue }));
        break;
      case 'phone':
        dispatch(updateUserData({ phone: inputValue }));
        break;
      case 'city':
        dispatch(updateUserData({ city: inputValue }));
        break;
      default:
        return;
    }
    setInputActive(false);
  };

  return (
    <Div>
      <Title>{valueLabel}</Title>
      <Block>
        <Input
          type="text"
          name={nameInput}
          value={inputValue}
          onChange={handleChange}
          readOnly={!inputActive ? true : false}
          disabled={!inputActive}
          onBlur={blurHandler}
        />
        {inputDirty && inputError && <ErrorText>{inputError}</ErrorText>}
        {!inputActive && (
          <Button
            type="button"
            disabled={!editButtonActive}
            onClick={handleButtonUpdate}
          >
            <EditTextBtnIcon changeColor={editButtonActive} />
          </Button>
        )}
        {inputActive && (
          <Button
            type="button"
            disabled={inputError}
            onClick={handleButtonSubmit}
          >
            <IconCheck />
          </Button>
        )}
      </Block>
    </Div>
  );
};
