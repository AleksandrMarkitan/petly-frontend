import { useSelector } from 'react-redux';
import {
  BoxUser,
  TitleUser,
  BoxTitleUser,
} from '../../components/UserData/UserData.styled';
import { UserPageContainer } from '../../components/UserData/UserData.styled';
import { UserData } from '../../components/UserData/UserData';
import { PetsData } from '../../components/PetsData/PetsData';
import { selectUser, selectUserPets } from '../../redux/auth/authSelectors';
import { BoxPet } from './UserPage.styled';

const UserPage = () => {
  const user = useSelector(selectUser);
  const pets = useSelector(selectUserPets);

  return (
    <UserPageContainer>
      <BoxUser>
        <BoxTitleUser>
          <TitleUser>My information:</TitleUser>
        </BoxTitleUser>
        <UserData user={user} />
      </BoxUser>
      <BoxPet>{pets && <PetsData pets={pets} />}</BoxPet>
    </UserPageContainer>
  );
};

export default UserPage;
