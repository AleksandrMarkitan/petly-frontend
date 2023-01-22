import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/user/userSelectors";

import { Section } from "../../components/CommonComponents/Section/Section";
import { Container } from "../../components/CommonComponents/Container/Container";
import { SectionTitle } from "../../components/CommonComponents/SectionTitle/SectionTitle";
import { UserData } from "../../components/UserData/UserData";
import { fetchUserPets } from "../../redux/user/userOperations";

const UserPage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserPets());
  }, [dispatch]);

  return (
    <Section>
      <SectionTitle text="My information:" />
      <Container>
        <UserData user={user} />
      </Container>
      <SectionTitle text="My pets" />
      <Container></Container>
    </Section>
  );
};

export default UserPage;
