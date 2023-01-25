import { useDispatch } from 'react-redux';
import { deletePet } from '../../redux/user/userOperations';
import { DeletePetBtn } from '../../../src/components/CommonButtons/DeletePetBtn/DeletePetBtn';
import { WrapperPicDiv, Box, Description, InfoPet } from './PetsList.styled';
export const PetsList = ({ pets }) => {
  const dispatch = useDispatch();

  const deletePetItem = id => {
    dispatch(deletePet(id));
    // const onDelete = () => {
    //   dispatch(logout());
    // };
  };

  return (
    <>
      {pets.map(({ _id, avatarURL, name, date, breed, comments }) => (
        <Box key={_id}>
          <WrapperPicDiv src={avatarURL} alt="pic" />
          <Description>
            <DeletePetBtn onDelete={() => deletePetItem(_id)}></DeletePetBtn>
            <InfoPet>Name: {name}</InfoPet>
            <InfoPet>Date of birth: {date}</InfoPet>
            <InfoPet>Breed: {breed}</InfoPet>
            <InfoPet>Comments: {comments}</InfoPet>
          </Description>
        </Box>
      ))}
    </>
  );
};
