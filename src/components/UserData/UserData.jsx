//work v
import { useRef, useState } from 'react';
import { InputHidden } from './UserData.styled';
import { UserDataItem } from '../UserDataItem/UserDataItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  UserBlock,
  ImageContainer,
  IconEditImgBtn,
  Img,
  ImageBox,
  EditButton,
} from './UserData.styled';
import { Logout } from '../Logout/Logout';

import { updateUserAvatar } from '../../redux/auth/authOperations';
import { selectUser } from '../../redux/auth/authSelectors';

export const UserData = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [editButtonActive, setEditButtonActive] = useState(true);

  const filePicker = useRef(null);

  const handleAvatar = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append('avatarURL', e.target.files[0]);
    dispatch(updateUserAvatar({ avatarURL: data }));
  };

  const handlePick = e => {
    e.preventDefault();
    filePicker.current.click();
  };

  const { name, email, birthday, phone, city, avatarURL } = user;
  return (
    <UserBlock>
      <ImageContainer>
        <form
          action=""
          id="avatar-add"
          accept="image/jpeg, image/png"
          encType="multipart/form-data"
        >
          <InputHidden>
            <input
              type="file"
              name="avatarURL"
              accept="image/jpeg, image/png"
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
          <UserDataItem
            valueLabel="Name:"
            nameInput="name"
            value={name}
            setEditButtonActive={setEditButtonActive}
            editButtonActive={editButtonActive}
          />
        )}
        {email && (
          <UserDataItem
            valueLabel="Email:"
            nameInput="email"
            value={email}
            setEditButtonActive={setEditButtonActive}
            editButtonActive={editButtonActive}
          />
        )}
        {birthday && (
          <UserDataItem
            valueLabel="Birthday:"
            nameInput="birthday"
            value={birthday}
            setEditButtonActive={setEditButtonActive}
            editButtonActive={editButtonActive}
          />
        )}
        {phone && (
          <UserDataItem
            valueLabel="Phone:"
            nameInput="phone"
            value={phone}
            setEditButtonActive={setEditButtonActive}
            editButtonActive={editButtonActive}
          />
        )}
        {city && (
          <UserDataItem
            valueLabel="City:"
            nameInput="city"
            value={city}
            setEditButtonActive={setEditButtonActive}
            editButtonActive={editButtonActive}
          />
        )}
      </Form>
      <Logout />
    </UserBlock>
  );
};
