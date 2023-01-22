import { useState } from "react";

//import axios from "axios";
import { useDispatch } from "react-redux";
import {
  //updateUserAvatar,
  updateUserData,
} from "../../redux/auth/authOperations";
//import { selectUser } from "../../redux/auth/authSelectors";
//import { selectUser } from "../../redux/user/userSelectors";
//import { selectIsFetchingCurrentUser } from "../../redux/auth/authSelectors";
// axios.defaults.baseURL = "http://localhost:4000/api/v1";
// //---------------testApi---------------
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzkzMDc0Nzc4MDA3ZDg1NmVlZDhiOCIsImlhdCI6MTY3NDE2NDQ3NSwiZXhwIjoxNjc0OTkyNDc1fQ.pGsU7-qWoeUAQS8l3qzUqVLV876F1d48tpeoC8vwAfQ";
// axios.defaults.headers.common.Authorization = `Bearer ${token}`;

//--------------------------
export const UserDataItem = ({
  valueLabel,
  value,
  nameInput,
  //handleUpdate,
  // handleButtonUpdate,
  //changeUserData,
  // handleChange,
  // user,
}) => {
  //const user = useSelector(selectUser);
  //const user2 = useSelector(selectIsFetchingCurrentUser);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(value);
  const [inputName, setInputName] = useState(nameInput);
  //const [editButton, setEditButton] = useState(true);
  const [inputActive, setInputActive] = useState(false);
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
      //setEditButton(true);
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
        //   case "city":
        //     dispatch(updateUserAvatar({ avatarURL: data }));
       
      default:
        return;
    }
    setInputActive(false);
  };

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
            readOnly={!inputActive ? true : false}
            // onChange={changeUserData}
          />
        </label>
        {!inputActive && <button onClick={handleButtonUpdate}>edit</button>}
        {inputActive && <button onClick={handleButtonUpdate}>update</button>}
      </form>
    </>
  );
};
