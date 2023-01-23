import { useRef } from "react";
import { InputHidden } from "./UserData.styled";
import { UserDataItem } from "../UserDataItem/UserDataItem";
//import axios from "axios";
import {
  updateUserAvatar,
  // updateUserData,
} from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2QwZDE4OWYyYzE5MjI4ZTU1M2Y0ZiIsImlhdCI6MTY3NDM4MjcxOSwiZXhwIjoxNjc1MjEwNzE5fQ.kONMeCBrIJcPokziKvTGWUsPwXewg04H1RTgG3H6CyE";
// axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const UserData = ({ user }) => {
  const dispatch = useDispatch();

  //  ------------Update Avatar----------
  const filePicker = useRef(null);
  //const [uploaded, setUploaded] = useState(null);
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
    //e.preventDefault();
    e.preventDefault();
    const data = new FormData();
    data.append(
      "avatarURL",
      e.target.files[0]
      //selectedFile
    );
    console.log(data);
    console.log(e.target.files[0]);
    //добавляет картинку на бек
    // const res = await fetch(
    //   "https://pets-support-backend.onrender.com/api/v1/users/update",
    //   {
    //     method: "PATCH",
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: data,
    //   }
    // );
    // console.log(data);
    //const res1 = dispatch(updateUserData(data));

    // const result = await res.json();

    // setUploaded(result.avatarURL);

    dispatch(updateUserAvatar({ avatarURL: data }));
  };

  const handlePick = (e) => {
    e.preventDefault();
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
          <img src={avatarURL} alt="avatar" />
          //  <img src={uploaded ? uploaded : avatarURL} alt="avatar" />
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
      {/* </WrapperDataUser> */}
    </>
  );
};
