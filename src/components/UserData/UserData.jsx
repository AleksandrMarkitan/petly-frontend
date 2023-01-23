import { useRef } from "react";
import { InputHidden } from "./UserData.styled";
import { UserDataItem } from "../UserDataItem/UserDataItem";

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
          // <img src={uploaded ? uploaded : avatarURL} alt="avatar" />
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
      {/* <LogOut
        onClick={() => {
          dispatch(logout());
        }}
      /> */}
      {/* </WrapperDataUser> */}
    </>
  );
};
