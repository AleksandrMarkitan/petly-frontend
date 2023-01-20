import { useEffect, useRef, useState } from "react";
import { InputHidden, WrapperDataUser } from "./UserData.styled";
// import { useDispatch, useSelector } from "react-redux";
// import { selectUser } from "../../redux/user/userSelectors";

import { UserDataItem } from "../UserDataItem/UserDataItem";

import axios from "axios";
import { fetchUserPets, updateUserData } from "../../redux/user/userOperations";
import { useDispatch } from "react-redux";
//import { fetchUserPets } from "../../redux/user/userOperations";
axios.defaults.baseURL = "http://localhost:5000/api/v1";
//const hostURL = "http://localhost:5000/api/v1/users/update";
const hostURL = "http://localhost:5000/api/v1";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzkzMDc0Nzc4MDA3ZDg1NmVlZDhiOCIsImlhdCI6MTY3NDE2NDQ3NSwiZXhwIjoxNjc0OTkyNDc1fQ.pGsU7-qWoeUAQS8l3qzUqVLV876F1d48tpeoC8vwAfQ";
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const UserData = ({ user }) => {
  // console.log(user.pets);
  const dispatch = useDispatch();
  //const [inputValue, setInputValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputName, setInputName] = useState("");
  // const user = useSelector(selectUser);
  // const { pets } = user;

  // useEffect(() => {
  //   dispatch(fetchUserPets());
  //   // dispatch(fetchCurrentUser());
  // }, [dispatch]);

  //  picture----------
  const filePicker = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState();

  const [city1, setCity1] = useState("");
  const [name1, setName1] = useState("");

  const handleChangePic = (evt) => {
    console.log(evt.target.files);
    console.log(evt.target.value); //путь к папке
    //console.log(evt.target.files);
    setSelectedFile(evt.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select");
      return;
    }

    const formData = new FormData();
    //formData.append("path", selectedFile);
    //  по Богдану
    //  formData.append("name", name.value);
    formData.append("file", selectedFile);

    console.log(selectedFile);
    console.log(formData);

    // dispatch(updateUserData({ user, name: "selectedFi" }));

    dispatch(updateUserData({ ...user, formData }));
    // const res = fetch(hostURL, {
    //   method: "POST",
    //   body: selectedFile,
    // });
    //const data = await res.json();
    //setUploaded(res);

    // const res = fetch(hostURL, {
    //   method: "PATCH",
    //   body: formData,
    // });
    // //.then((res) => console.log(res));
    // const data = await res;
    // setUploaded(data);
    // console.log(uploaded);
  };

  const handlePick = () => {
    filePicker.current.click();
  };
  //------------------------------------------
  // const handleChange = (evt) => {
  //   //for input file from me
  //   evt.preventDefault();
  //   setInputValue(evt.target.value);
  //   console.log(inputValue);
  //   console.log(88);
  //   console.log(evt.target.value);
  //   //updateUserData()
  // };

  const changeUserData = (e) => {
    const { name1, value } = e.target;
    switch (name1) {
      case "name1":
        setName1(value);
        break;
      //  case "number":
      //    setContactNumber(value);
      //    break;
      default:
        return;
    }
  };

  //from ITEM---------
  // const handleChange = (evt) => {
  //   setInputValue(evt.target.value);
  //   setInputName(evt.target.name);
  //   console.log(inputValue);
  //   console.log(inputName);
  // };
  //   const user = useSelector(selectUser);
  //console.log(user);

  // const handleButtonUpdateCity = (e) => {
  //   e.preventDefault();
  //   console.log(inputValue);
  //   console.log(user);
  //   dispatch(updateUserData({ city: inputValue }));
  // };
  //----------------
  const { name, email, birthday, phone, city, avatarURL } = user;
  return (
    <>
      {/* <WrapperDataUser> */}
      <button onClick={handlePick}>Pick file</button>
      <InputHidden>
        <input
          type="file"
          name="avatar"
          ref={filePicker}
          onChange={handleChangePic}
        />
      </InputHidden>
      <input
        type="image"
        // src={avatarURL}
        alt="avatar"

        // src="https://res.cloudinary.com/dgne23at6/image/upload/v1674052318/f64cacccea6511bba2ae40b5383e3e47_ajipj3.jpg"
      />

      <button onClick={handleUpload}>Upload now!</button>
      {selectedFile && (
        <ul>
          <li>Name: {selectedFile.name}</li>
        </ul>
      )}
      {name && (
        <UserDataItem
          valueLabel="Name:"
          nameInput="name"
          value={name}
          //changeUserData={changeUserData}
        />
      )}
      {email && (
        <UserDataItem valueLabel="Email:" nameInput="email" value={email} />
      )}
      {birthday && (
        <UserDataItem
          valueLabel="Birthday:"
          nameInput="birthday"
          value={birthday}
        />
      )}
      {phone && (
        <UserDataItem valueLabel="Phone:" nameInput="phone" value={phone} />
      )}
      {city && (
        <UserDataItem
          valueLabel="City:"
          nameInput="city"
          value={city}
          // user={user}
          // handleUpdate={handleChange}
          // handleButtonUpdate={handleButtonUpdateCity}
          //onChangeUser={changeUserData}
          // handleChange={handleChange}
        />
      )}
      {/* <LogOut /> */}
      {/* <form>
        <input />
      </form> */}
      {/* </WrapperDataUser> */}
    </>
  );
};
