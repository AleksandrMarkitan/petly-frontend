import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { selectPets, selectUser } from "../../redux/user/userSelectors";

import { Section } from "../../components/CommonComponents/Section/Section";
import { Container } from "../../components/CommonComponents/Container/Container";
import { SectionTitle } from "../../components/CommonComponents/SectionTitle/SectionTitle";
import { UserData } from "../../components/UserData/UserData";
//import { fetchUserPets } from "../../redux/user/userOperations";
import { fetchCurrentUser } from "../../redux/auth/authOperations";
import { PetsData } from "../../components/PetsData/PetsData";
import { selectUser, selectUserPets } from "../../redux/auth/authSelectors";
//import { selectPets } from "../../redux/user/userSelectors";
//import { selectUserPets } from "../../redux/auth/authSelectors";

export const UserPage = () => {
  //const userName = useSelector(selectUserName);
  const user = useSelector(selectUser);
  // const pets = useSelector(selectPets);
  //const { pets } = user;
  const pets = useSelector(selectUserPets);
  //   console.log(user);
  //   console.log(pets);
  // const { pets } = user;
  //console.log(user);
  // console.log(pets2);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
    // dispatch(fetchCurrentUser());
  }, [dispatch]);
  //console.log(user);
  return (
    <Section>
      <Container>
        <SectionTitle text="My information:" />

        <UserData user={user} />
        {/* </Container> */}
        <SectionTitle text="My pets" />
        {/* <Container> */}
        {pets && <PetsData pets={pets} />}
      </Container>
    </Section>
  );
};
