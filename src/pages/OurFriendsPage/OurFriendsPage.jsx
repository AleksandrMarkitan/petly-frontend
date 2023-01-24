import { useEffect, useState } from 'react';

import { Section } from '../../components/CommonComponents/Section/Section';
import { Container } from '../../components/CommonComponents/Container/Container';
import { SectionTitle } from '../../components/CommonComponents/SectionTitle/SectionTitle';
import { OurFriendsList } from '../../components/OurFriends/OurFriends';
import { getOurFriends } from '../../serveсes/getOurFriends';
import { Loader } from '../../components/Loader/Loader';

const OurFriendsPage = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await getOurFriends({});

        if (response.length === 0) {
          throw new Error();
        }

        setFriends(response);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetch();
  }, []);

  return (
    <Section>
      <Container>
        <SectionTitle text="Our friends" />
        {<Loader /> && <OurFriendsList friends={friends} />}
      </Container>
    </Section>
  );
};

export default OurFriendsPage;
