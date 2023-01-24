import { AddBtn } from '../CommonButtons/AddBtn/AddBtn';
import { PetsList } from '../PetsList/PetsList';
import { ModalWindow } from '../CommonComponents/ModalWindow/ModalWindow';
import { useState } from 'react';
import { ModalAddPet } from '../ModalAddPet/ModalAddPet';
import { AddTitle, BtnBox, BoxTitlePet } from './PetsData.styled';
import { TitleUser } from '../UserData/UserData.styled';
import { Calendar } from '../ModalAddPet/ModalAddPet.styled';

export const PetsData = ({ pets }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <BoxTitlePet>
        <TitleUser>My pets:</TitleUser>{' '}
        <BtnBox>
          <AddTitle>Add pet</AddTitle>
          <AddBtn closeModal={closeModal} />
        </BtnBox>
      </BoxTitlePet>

      {isModalOpen && (
        <ModalWindow onClose={closeModal} modalType={'addPet'}>
          <ModalAddPet onClose={closeModal} />
        </ModalWindow>
      )}

      {pets && <PetsList pets={pets} />}

      {/* <Calendar /> */}
    </>
  );
};
