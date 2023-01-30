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
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const { name, email, birthday, phone, city, avatarURL } = user;
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

  return (
    <UserBlock>
      <ImageContainer>
        <form action="" id="avatar-add" encType="multipart/form-data">
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
            userDataValue={name}
            setEditButtonActive={setEditButtonActive}
            editButtonActive={editButtonActive}
          />
        )}
        {email && (
          <UserDataItem
            valueLabel="Email:"
            nameInput="email"
            userDataValue={email}
            setEditButtonActive={setEditButtonActive}
            editButtonActive={editButtonActive}
          />
        )}
        {birthday && (
          <UserDataItem
            valueLabel="Birthday:"
            nameInput="birthday"
            userDataValue={birthday}
            setEditButtonActive={setEditButtonActive}
            editButtonActive={editButtonActive}
          />
        )}
        {phone && (
          <UserDataItem
            valueLabel="Phone:"
            nameInput="phone"
            userDataValue={phone}
            setEditButtonActive={setEditButtonActive}
            editButtonActive={editButtonActive}
          />
        )}
        {city && (
          <UserDataItem
            valueLabel="City:"
            nameInput="city"
            userDataValue={city}
            setEditButtonActive={setEditButtonActive}
            editButtonActive={editButtonActive}
          />
        )}
      </Form>
      <Logout />
    </UserBlock>
  );
};
