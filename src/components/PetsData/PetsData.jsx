import PropTypes from 'prop-types';
import { AddBtn } from '../CommonButtons/AddBtn/AddBtn';
import { PetsList } from '../PetsList/PetsList';
import { ModalWindow } from '../CommonComponents/ModalWindow/ModalWindow';
import { useState } from 'react';
import { ModalAddPet } from '../ModalAddPet/ModalAddPet';

import {
  AddTitle,
  BtnBox,
  BoxTitlePet,
  BoxMessage,
  Message,
} from './PetsData.styled';
import { TitleUser } from '../UserData/UserData.styled';

export const PetsData = ({ pets }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  //console.log(pets.length);
  return (
    <>
      <BoxTitlePet>
        <TitleUser>My pets:</TitleUser>
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
      {pets.length === 0 ? (
        <BoxMessage>
          <Message>
            There is no pet here yet. Please, add your first pet
          </Message>
          {/* <BoxImage>
            <img src={modalLogoutImage} alt="modalLogoutImage" width={300} />
          </BoxImage> */}
        </BoxMessage>
      ) : (
        <PetsList pets={pets} />
      )}
    </>
  );
};

PetsList.propTypes = {
  pets: PropTypes.array.isRequired,
};
