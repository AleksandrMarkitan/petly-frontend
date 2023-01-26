import { useState } from 'react';
import {
  Div,
  Title,
  Block,
  Input,
  Button,
  EditTextBtnIcon,
  IconCheck,
} from './UserDataItem.styled';

import { useDispatch } from 'react-redux';
import { updateUserData } from '../../redux/auth/authOperations';

export const UserDataItem = ({
  valueLabel,
  value,
  nameInput,
  setEditButtonActive,
  editButtonActive,
}) => {
  const dispatch = useDispatch();
  const prevValue = value;
  const [inputValue, setInputValue] = useState(value);
  const [inputName, setInputName] = useState(nameInput);
  const [inputActive, setInputActive] = useState(false);

  const handleChange = evt => {
    evt.preventDefault();
    setInputValue(evt.target.value);
    setInputName(evt.target.name);
  };

  const handleButtonUpdate = e => {
    e.preventDefault();

    if (inputValue === value) {
      setInputActive(true);
      setEditButtonActive('');
      return;
    }
  };

  const handleButtonSubmit = e => {
    if (inputValue === prevValue) {
      setInputActive(false);
      setEditButtonActive(true);
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
        />
        {!inputActive && (
          <Button disabled={!editButtonActive} onClick={handleButtonUpdate}>
            <EditTextBtnIcon iseditbuttonactive={editButtonActive} />
          </Button>
        )}
        {inputActive && (
          <Button onClick={handleButtonSubmit}>
            <IconCheck />
          </Button>
        )}
      </Block>
    </Div>
  );
};
