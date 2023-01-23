import { useRef } from "react";
import { InputHidden } from "./UserData.styled";
import { UserDataItem } from "../UserDataItem/UserDataItem";
import {
  Form,
  UserBlock,
  ImageContainer,
  IconEditImgBtn,
  Img,
  ImageBox,
  EditButton,
} from "./UserData.styled";
import { Logout } from "../Logout/Logout";

//import axios from "axios";
// import { Wrapper } from "../AuthForms/Forms.styled";

import { logout, updateUserAvatar } from "../../redux/auth/authOperations";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";

export const UserData = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  //  ------------Update Avatar----------
  const filePicker = useRef(null);

  const handleAvatar = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("avatarURL", e.target.files[0]);
    dispatch(updateUserAvatar({ avatarURL: data }));
  };

  const handlePick = (e) => {
    e.preventDefault();
    filePicker.current.click();
  };

  const { name, email, birthday, phone, city, avatarURL } = user;
  return (
    <UserBlock>
      <ImageContainer>
        <form action="" id="avatar-add" encType="multipart/form-data">
          <InputHidden>
            <input
              type="file"
              name="avatarURL"
              onChange={handleAvatar}
              ref={filePicker}
            />
          </InputHidden>
          {avatarURL && (
            <ImageBox>
              <Img src={avatarURL} alt="avatar" />
            </ImageBox>
            //  <img src={uploaded ? uploaded : avatarURL} alt="avatar" />
          )}
          <EditButton type="button" onClick={handlePick}>
            <IconEditImgBtn /> Edit photo
          </EditButton>
        </form>
      </ImageContainer>
      <Form>
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
      </Form>
      <Logout />
    </UserBlock>
  );
};

// <>
// <WrapperDataUser>
// <form action="" id="avatar-add" encType="multipart/form-data">
//   <button type="button" onClick={handlePick}>
//     Edit photo
//   </button>
//   <InputHidden>
//     <input
//       type="file"
//       name="avatarURL"
//       onChange={handleAvatar}
//       ref={filePicker}
//     />
//   </InputHidden>
//   {avatarURL && (
//     <img src={avatarURL} alt="avatar" />
//     // <img src={uploaded ? uploaded : avatarURL} alt="avatar" />
//   )}
// </form>

// {name && (
//   <UserDataItem valueLabel="Name:" nameInput="name" value={name} />
// )}
// {email && (
//   <UserDataItem valueLabel="Email:" nameInput="email" value={email} />
// )}
// {birthday && (
//   <UserDataItem
//     valueLabel="Birthday:"
//     nameInput="birthday"
//     value={birthday}
//   />
// )}
// {phone && (
//   <UserDataItem valueLabel="Phone:" nameInput="phone" value={phone} />
// )}
// {city && (
//   <UserDataItem valueLabel="City:" nameInput="city" value={city} />
// )}
{
  /* <LogOut
        onClick={() => {
          dispatch(logout());
        }}
      /> */
}

// </>
