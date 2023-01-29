import {
  Box,
  ListItem,
  Title,
  Address,
  Hr,
  Email,
  Phone,
  Wrapper,
  Picture,
  Container,
  Img,
  Time,
  Link,
} from './OurFriends.styled';
import { WorkTime } from './WorkTime';
import image from '../../img/cat.png';
export const OurFriendsList = ({ friends }) => {
  return (
    <Box>
      {friends.map(
        ({
          _id,
          title,
          url,
          addressUrl,
          address,
          imageUrl,
          workDays,
          phone,
          email,
        }) => (
          <ListItem key={_id}>
            <Title>
              <span>
                <Link href={url} target="_blank" rel="noreferrer">
                  {title}
                </Link>
              </span>
            </Title>

            <Wrapper>
              <Picture>
                {imageUrl ? (
                  <Img src={imageUrl} alt={title} />
                ) : (
                  <Img src={image} alt={title} />
                )}
              </Picture>
              <Container>
                <Time>
                  Time:
                  {workDays ? <WorkTime workDays={workDays} /> : <Hr />}
                </Time>
                <Address>
                  Address:
                  <a href={addressUrl} target="_blank" rel="noreferrer">
                    {address ? <span>{address}</span> : <Hr />}
                  </a>
                </Address>
                <Email>
                  Email:
                  <a href="mailto:{address}"> {email ? email : <Hr />} </a>
                </Email>
                <Phone>
                  Phone:
                  <a href="tel:{phone}"> {phone ? phone : <Hr />} </a>
                </Phone>
              </Container>
            </Wrapper>
          </ListItem>
        )
      )}
    </Box>
  );
};
