// import { useEffect } from "react";
import { useSelector } from 'react-redux';
//import { selectPets, selectUser } from "../../redux/user/userSelectors";
import {
  UserPageContainer,
  BoxUser,
  TitleUser,
  BoxTitleUser,
} from '../../components/UserData/UserData.styled';
import {
  BoxPet,
  // BoxTitlePet,
} from '../../components/PetsData/ModalAddPet.styled';
import { UserData } from '../../components/UserData/UserData';
//import { fetchUserPets } from "../../redux/user/userOperations";
// import { fetchCurrentUser } from "../../redux/auth/authOperations";
import { PetsData } from '../../components/PetsData/PetsData';
import { selectUser, selectUserPets } from '../../redux/auth/authSelectors';
import { ModalAddPet } from '../../components/ModalAddPet/ModalAddPet';
import { AddBtn } from '../../components/CommonButtons/AddBtn/AddBtn';
import { useState } from 'react';
import { AddTitle, BtnBox } from './UserPage.styled';
//import { selectPets } from "../../redux/user/userSelectors";
//import { selectUserPets } from "../../redux/auth/authSelectors";
export const UserPage = () => {
  const user = useSelector(selectUser);
  // console.log(user);
  // console.log(user.avatarURL);
  const pets = useSelector(selectUserPets);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <UserPageContainer>
      <BoxUser>
        <BoxTitleUser>
          <TitleUser>My information:</TitleUser>
        </BoxTitleUser>
        <BtnBox>
          <AddTitle>Add pet</AddTitle>
          <AddBtn closeModal={closeModal} />
        </BtnBox>
        {/* <AddBtn closeModal={closeModal} /> */}
        <UserData user={user} />
      </BoxUser>
      <BoxPet>{pets && <PetsData pets={pets} />}</BoxPet>
      {isModalOpen && <ModalAddPet onClose={closeModal} />}
    </UserPageContainer>
  );
};
