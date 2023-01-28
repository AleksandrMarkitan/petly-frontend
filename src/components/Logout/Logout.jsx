import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';
import {
  LogOut,
  LogOutIcon,
  Button,
  BoxLogOut,
  PreTitle,
  BoxItem,
  BoxImage,
  Image,
  PetIcon,
  Title,
} from './Logout.styled';

import { useState } from 'react';
import { ModalWindow } from '../CommonComponents/ModalWindow/ModalWindow';
import modalLogoutImage from '../../img/pet.jpg';

export const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <LogOut onClick={closeModal}>
        <LogOutIcon />
        Log Out
      </LogOut>
      {isModalOpen && (
        <ModalWindow onClose={closeModal}>
          <BoxLogOut>
            <PreTitle>
              <Title>Are you sure you want to log out of your account?</Title>
              <BoxImage>
                <Image
                  src={modalLogoutImage}
                  alt="modalLogoutImage"
                  width={300}
                />
              </BoxImage>
              <BoxItem>
                <Button type="button" onClick={closeModal}>
                  Cancel
                  <PetIcon />
                </Button>
                <Button type="button" onClick={handleLogOut}>
                  LogOut <PetIcon />
                </Button>
              </BoxItem>
            </PreTitle>
          </BoxLogOut>
        </ModalWindow>
      )}
    </>
  );
};
