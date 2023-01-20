import { useEffect, useRef, useState } from "react";
import { InputHidden, WrapperDataUser } from "./UserData.styled";
// import { useDispatch, useSelector } from "react-redux";
// import { selectUser } from "../../redux/user/userSelectors";

import { UserDataItem } from "../UserDataItem/UserDataItem";

import axios from "axios";
import { fetchUserPets, updateUserData } from "../../redux/user/userOperations";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/user/userSelectors";
//import { fetchUserPets } from "../../redux/user/userOperations";
axios.defaults.baseURL = "http://localhost:5000/api/v1";
//const hostURL = "http://localhost:5000/api/v1/users/update";
const hostURL = "/temp";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzkzMDc0Nzc4MDA3ZDg1NmVlZDhiOCIsImlhdCI6MTY3NDE2NDQ3NSwiZXhwIjoxNjc0OTkyNDc1fQ.pGsU7-qWoeUAQS8l3qzUqVLV876F1d48tpeoC8vwAfQ";
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const UserData = ({ user }) => {
  // console.log(user.pets);
  // const user1 = useSelector(selectUser);
  // console.log(user1);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUserPets());
  //   // dispatch(fetchCurrentUser());
  // }, [dispatch]);
  // console.log(user.avatarURL);

  //const [inputValue, setInputValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputName, setInputName] = useState("");
  // const user = useSelector(selectUser);
  // const { pets } = user;

  //  picture----------
  const filePicker = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  //const [selectedFile1, setSelectedFile1] = useState(null);
  const [uploaded, setUploaded] = useState(null);

  const [city1, setCity1] = useState("");
  const [name1, setName1] = useState("");

  // при изменении инпута добавляем выбранную картинку в селектедфайл
  const handleAvatar = (e) => {
    e.preventDefault();
    const data = new FormData();
    // data.append("avatarURL", name.files);
    setSelectedFile(e.target.files[0]);
    // data.append("avatarURL", setSelectedFile1(e.target.files[0]));
    console.log(selectedFile);
  };
  // для отправки на бек
  const submitAvatar = async (e) => {
    e.preventDefault();
    //handlePick();
    //handleAvatar();
    // console.log(selectedFile); //єто файл!!!
    // // const { avatarURL } = e.elements;
    // // console.log(e.target);
    // // console.log(e.target.files[0]);
    // console.log(e.target.value);
    // console.log(avatarURL);
    //setSelectedFile(e.target.files[0]);
    const data = new FormData();
    data.append(
      "avatarURL",
      selectedFile
      // "Http://localhost:5000/api/v1/users/update",
      // avatarURL.setSelectedFile1
    );

    //добавляет картинку на бек
    const res = await fetch("Http://localhost:5000/api/v1/users/update", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });
    const data1 = await res.json();
    console.log(data1);
    setUploaded(data1.avatarURL);
    console.log(uploaded);
    dispatch(updateUserData(uploaded));
  };

  console.log(uploaded);

  const handlePick = () => {
    //для невид кнопки
    // handleAvatar();
    filePicker.current.click();
  };

  const { name, email, birthday, phone, city, avatarURL } = user;
  return (
    <>
      {/* <WrapperDataUser> */}
      {/* <button onClick={handlePick}>Pick file</button> */}
      <form action="" id="avatar-add" encType="multipart/form-data">
        <button type="submit" onClick={submitAvatar}>
          Add book
        </button>
        {/* <InputHidden> */}
        <input
          type="file"
          name="avatarURL"
          onChange={handleAvatar}
          ref={filePicker}
          //onChange={handlePick} //for invisible
        />
        {/* </InputHidden> */}
        {avatarURL && (
          <input
            type="image"
            //src={avatarURL}
            alt="avatar"
            src={uploaded ? uploaded : avatarURL}
            // src="https://res.cloudinary.com/dgne23at6/image/upload/v1674052318/f64cacccea6511bba2ae40b5383e3e47_ajipj3.jpg"
          />
        )}
      </form>
      {/* <button onClick={handleUpload}>Upload now!</button> */}
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

// const changeUserData = (e) => {
//   const { name1, value } = e.target;
//   switch (name1) {
//     case "name1":
//       setName1(value);
//       break;
//     //  case "number":
//     //    setContactNumber(value);
//     //    break;
//     default:
//       return;
//   }
// };

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

//dispatch(updateUserData({ ...user, formData }));
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

// єто обработка кнопки загрузки картинки на юек по примеру видео

// const handleChangePic = (evt) => {
//   console.log(evt.target.files);
//   console.log(evt.target.value); //путь к папке
//   //console.log(evt.target.files);
//   setSelectedFile(evt.target.files[0]);
// };

// const handleUpload = async () => {
//   if (!selectedFile) {
//     alert("Please select");
//     return;
//   }

//   const formData = new FormData();
//   //formData.append("path", selectedFile);
//   //  по Богдану
//   //  formData.append("name", name.value);
//   formData.append("avatarURL", selectedFile[0]);

//   console.log(selectedFile);
//   console.log(formData);

//   dispatch(updateUserData({ user, avatarURL: formData }));
// };
//---------------------------------------
