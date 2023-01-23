import { useState } from "react";
import {
  Div,
  Title,
  Block,
  Input,
  Button,
  EditTextBtnIcon,
  IconCheck,
} from "./UserDataItem.styled";

//import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUserData } from "../../redux/auth/authOperations";

export const UserDataItem = ({ valueLabel, value, nameInput }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(value);
  const [inputName, setInputName] = useState(nameInput);
  const [inputActive, setInputActive] = useState(false);
  //const [editButton, setEditButton] = useState(true);
  //console.log(user);
  //const { name, city } = inputName;

  const handleChange = (evt) => {
    evt.preventDefault();
    setInputValue(evt.target.value);
    setInputName(evt.target.name);
  };

  const handleButtonUpdate = (e) => {
    e.preventDefault();
    // if (inputValue === value) {
    //   setEditButton(true);
    //   return;

    if (inputValue === value) {
      setInputActive(true);
      return;
    }
    switch (inputName) {
      case "name":
        dispatch(updateUserData({ name: inputValue }));
        break;
      case "email":
        dispatch(updateUserData({ email: inputValue }));
        break;
      case "birthday":
        dispatch(updateUserData({ birthday: inputValue }));
        break;
      case "phone":
        dispatch(updateUserData({ phone: inputValue }));
        break;
      case "city":
        dispatch(updateUserData({ city: inputValue }));
        break;
      //   case "city":
      //     dispatch(updateUserAvatar({ avatarURL: data }));

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
          // onChange={changeUserData}
        />
        {!inputActive && (
          <Button onClick={handleButtonUpdate}>
            <EditTextBtnIcon />
          </Button>
        )}
        {inputActive && (
          <Button onClick={handleButtonUpdate}>
            <IconCheck />
          </Button>
        )}
      </Block>
    </Div>
  );
};
