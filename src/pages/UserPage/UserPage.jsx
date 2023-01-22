import { useEffect } from "react";
import { useSelector } from "react-redux";
//import { selectPets, selectUser } from "../../redux/user/userSelectors";
import {
  UserPageContainer,
  BoxUser,
  TitleUser,
  BoxTitleUser,
} from "../../components/UserData/UserData.styled";
import {
  BoxPet,
  BoxTitlePet,
} from "../../components/PetsData/ModalAddPet.styled";
import { UserData } from "../../components/UserData/UserData";
//import { fetchUserPets } from "../../redux/user/userOperations";
import { fetchCurrentUser } from "../../redux/auth/authOperations";
import { PetsData } from "../../components/PetsData/PetsData";
import { selectUser, selectUserPets } from "../../redux/auth/authSelectors";
//import { selectPets } from "../../redux/user/userSelectors";
//import { selectUserPets } from "../../redux/auth/authSelectors";
// import { Logout } from "../../components/Logout/Logout";
export const UserPage = () => {
  const user = useSelector(selectUser);
  console.log(user);
  const pets = useSelector(selectUserPets);

  return (
    <UserPageContainer>
      <BoxUser>
        <BoxTitleUser>
          <TitleUser>My information:</TitleUser>
        </BoxTitleUser>
        <UserData user={user} />
        {/* <Logout /> */}
      </BoxUser>
      <BoxPet>
        <BoxTitlePet>
          <TitleUser>My pets:</TitleUser>
        </BoxTitlePet>
        {pets && <PetsData pets={pets} />}
      </BoxPet>
    </UserPageContainer>
  );
};
