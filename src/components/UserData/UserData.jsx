import { useRef, useState } from "react";
import { InputHidden } from "./UserData.styled";
import { UserDataItem } from "../UserDataItem/UserDataItem";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { selectUser } from "../../redux/user/userSelectors";
// import { fetchUserPets, updateUserData } from "../../redux/user/userOperations";
// import { useDispatch, useSelector } from "react-redux";
// import { selectUser } from "../../redux/user/userSelectors";
//import { fetchUserPets } from "../../redux/user/userOperations";
axios.defaults.baseURL = "http://localhost:5000/api/v1";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzkzMDc0Nzc4MDA3ZDg1NmVlZDhiOCIsImlhdCI6MTY3NDE2NDQ3NSwiZXhwIjoxNjc0OTkyNDc1fQ.pGsU7-qWoeUAQS8l3qzUqVLV876F1d48tpeoC8vwAfQ";
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const UserData = ({ user }) => {
  // const dispatch = useDispatch();

  //  ------------Update Avatar----------
  const filePicker = useRef(null);
  const [uploaded, setUploaded] = useState(null);
  // const [selectedFile, setSelectedFile] = useState(null);
  //const [selectedFile1, setSelectedFile1] = useState(null);

  // при изменении инпута добавляем выбранную картинку в селектедфайл
  // const selectAvatar = (e) => {
  //   e.preventDefault();
  //   const data = new FormData();
  //   setSelectedFile(e.target.files[0]); // я это засунула в функцию handleAvatar
  // };

  // для отправки на бек
  const handleAvatar = async (e) => {
    const data = new FormData();
    data.append(
      "avatarURL",
      e.target.files[0]
      //selectedFile
    );

    //добавляет картинку на бек
    const res = await fetch("Http://localhost:5000/api/v1/users/update", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });
    const result = await res.json();
    setUploaded(result.avatarURL);
    // dispatch(updateUserData(data));
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  const { name, email, birthday, phone, city, avatarURL } = user;
  return (
    <>
      {/* <WrapperDataUser> */}
      <form action="" id="avatar-add" encType="multipart/form-data">
        <button type="button" onClick={handlePick}>
          Edit photo
        </button>
        <InputHidden>
          <input
            type="file"
            name="avatarURL"
            onChange={handleAvatar}
            ref={filePicker}
          />
        </InputHidden>
        {avatarURL && (
          <img src={uploaded ? uploaded : avatarURL} alt="avatar" />
        )}
      </form>

      {name && (
        <UserDataItem valueLabel="Name:" nameInput="name" value={name} />
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
        <UserDataItem valueLabel="City:" nameInput="city" value={city} />
      )}
      {/* <LogOut /> */}
      {/* <form>
        <input />
      </form> */}
      {/* </WrapperDataUser> */}
    </>
  );
};
