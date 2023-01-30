import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePet } from '../../redux/user/userOperations';
import { DeletePetBtn } from '../../../src/components/CommonButtons/DeletePetBtn/DeletePetBtn';
import { WrapperPicDiv, Box, Description, InfoPet } from './PetsList.styled';
import { WarningMessage } from '../CommonComponents/WarningMessage/WarningMessage';

export const PetsList = ({ pets }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const deletePetItem = id => {
    dispatch(deletePet(id));
  };

  return (
    <>
      {pets.map(({ _id, avatarURL, name, date, breed, comments }) => (
        <Box key={_id}>
          <WrapperPicDiv src={avatarURL} alt="pic" />
          <Description>
            <DeletePetBtn onClick={closeModal} />
            <InfoPet>Name: {name}</InfoPet>
            <InfoPet>Date of birth: {date}</InfoPet>
            <InfoPet>Breed: {breed}</InfoPet>
            <InfoPet>Comments: {comments}</InfoPet>
          </Description>
          {isModalOpen && (
            <WarningMessage
              type="approve"
              id={_id}
              approveFunk={deletePetItem}
              onClose={closeModal}
              text="Are you sure than you want to delete the pet?"
            />
          )}
        </Box>
      ))}
    </>
  );
};

PetsList.propTypes = {
  pets: PropTypes.array.isRequired,
};
