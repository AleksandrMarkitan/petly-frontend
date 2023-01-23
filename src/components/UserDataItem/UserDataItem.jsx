import { useState } from "react";
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
