import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePet } from '../../redux/user/userOperations';
import { DeletePetBtn } from '../../../src/components/CommonButtons/DeletePetBtn/DeletePetBtn';
import { WrapperPicDiv, Box, Description, InfoPet } from './PetsList.styled';
import { WarningMessage } from '../../components/CommonComponents/WarningMessage/WarningMessage';
import { useState } from 'react';

export const PetsList = ({ pets }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

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
            <DeletePetBtn onDelete={() => deletePetItem(_id)}></DeletePetBtn>
            {/* <DeletePetBtn
              onDelete={closeModal}
              // onDelete={closeModal(_id)}
            ></DeletePetBtn> */}
            <InfoPet>Name: {name}</InfoPet>
            <InfoPet>Date of birth: {date}</InfoPet>
            <InfoPet>Breed: {breed}</InfoPet>
            <InfoPet>Comments: {comments}</InfoPet>
          </Description>
        </Box>
      ))}
      {isModalOpen && (
        <WarningMessage
          onClose={closeModal}
          type="approve"
          // id={id}
          text="Are you sure you want to delete your pet?"
          approveFunk={deletePetItem}
        />
      )}
    </>
  );
};

PetsList.propTypes = {
  pets: PropTypes.array.isRequired,
};
