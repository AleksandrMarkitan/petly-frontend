import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateUserData } from '../../redux/auth/authOperations';
import {
  emailRegexp,
  nameRegexp,
  phoneRegexp,
} from '../AuthForms/RegisterForm/RegisterForm';

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

  const cityRegexp =
    /^(([a-zA-Zа-яА-Я`'іІїЇ]([-]?)){1,})([^-,?,\s,.,0-9,!])+(,)+((\s?[a-zA-Zа-яА-Я`'іІїЇ](([-]?){0,1})){1,})([^-,?,.,\s,0-9,!])$/;

  const birthdayRegexp =
    /^(?:0[1-9]|[12][0-9]|3[01])[.](?:0[1-9]|1[012])[.](?:19\d{2}|30[01][0-9]|2007)\b$/;

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
      case 'birthday':
        if (!birthdayRegexp.test(String(evt.target.value).toLowerCase())) {
          setInputError('Date must be between 1930-2007');
        } else {
          setInputError('');
        }
        break;
      default:
        return;
    }
  };

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
    setEditButtonActive(true);
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
            <EditTextBtnIcon changecolor={editButtonActive.toString()} />
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

UserDataItem.propTypes = {
  valueLabel: PropTypes.string.isRequired,
  userDataValue: PropTypes.string.isRequired,
  nameInput: PropTypes.string.isRequired,
  setEditButtonActive: PropTypes.func.isRequired,
  editButtonActive: PropTypes.bool.isRequired,
};
