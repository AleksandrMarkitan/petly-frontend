import { useState } from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../redux/user/userOperations";
import { selectUser } from "../../redux/user/userSelectors";
import { selectIsFetchingCurrentUser } from "../../redux/auth/authSelectors";
axios.defaults.baseURL = "http://localhost:5000/api/v1";
//---------------testApi---------------
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzkzMDc0Nzc4MDA3ZDg1NmVlZDhiOCIsImlhdCI6MTY3NDE2NDQ3NSwiZXhwIjoxNjc0OTkyNDc1fQ.pGsU7-qWoeUAQS8l3qzUqVLV876F1d48tpeoC8vwAfQ";
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

//--------------------------
export const UserDataItem = ({
  valueLabel,
  value,
  nameInput,
  handleUpdate,
  // handleButtonUpdate,
  //changeUserData,
  // handleChange,
  // user,
}) => {
  const user = useSelector(selectUser);
  //const user2 = useSelector(selectIsFetchingCurrentUser);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(value);
  const [inputName, setInputName] = useState(nameInput);
  const [editButton, setEditButton] = useState(true);

  console.log(user);
  //const { name, city } = inputName;

  const handleChange = (evt) => {
    evt.preventDefault();
    setEditButton(false);
    setInputValue(evt.target.value);
    setInputName(evt.target.name);

    console.log(inputValue);
    console.log(inputName);
  };

  //   //   const user = useSelector(selectUser);
  //   //console.log(user);
  const handleButtonUpdate = (e) => {
    e.preventDefault();
    if (inputValue === value) {
      setEditButton(true);
      return;
    }
    // const { name, value } = e.target;
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
      default:
        return;
    }
    setEditButton(true);
  };

  //   const handleButtonUpdate = (e) => {
  //     e.preventDefault();
  //     console.log(inputValue);
  //     console.log(user);
  //     dispatch(updateUserData({ ...user, inputValue }));
  //     // dispatch(updateUserData({ city: inputValue }));
  //   };
  return (
    <>
      <form>
        <label>
          {valueLabel}
          <input
            type="text"
            name={nameInput}
            value={inputValue}
            onChange={handleChange}
            // onChange={changeUserData}
          />
        </label>
        {editButton && <button onClick={handleButtonUpdate}>edit</button>}
        {!editButton && <button onClick={handleButtonUpdate}>update</button>}
      </form>
    </>
  );
};
