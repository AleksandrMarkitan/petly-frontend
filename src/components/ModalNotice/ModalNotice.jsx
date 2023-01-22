import {
  Box,
  BoxBtns,
  BoxTitleList,
  BoxValue,
  Btn,
  Category,
  Comments,
  Heart,
  Img,
  ListOfValues,
  ThumbImg,
  Title,
  TitleValue,
  Value,
} from "./ModalNotice.styled";

export const ModalNotice = ({
  data: {
    title,
    category,
    name,
    birthdate,
    breed,
    sex,
    location,
    comments,
    imgURL,
    price,
    owner: { phone, email },
  },
}) => {
  const hrefMail = `mailto:${email}`;
  const hrefTel = `tel:${phone}`; /*Format: +380991111111 */

  return (
    <>
      <Box>
        <ThumbImg>
          <Img src={imgURL} alt={name} />
          <Category>{category}</Category>
        </ThumbImg>

        <BoxTitleList>
          <Title>{title}</Title>

          <ListOfValues>
            <BoxValue>
              <TitleValue>Name:</TitleValue>
              <Value>{name}</Value>
            </BoxValue>
            <BoxValue>
              <TitleValue>Birthday:</TitleValue>
              <Value>{birthdate}</Value>
            </BoxValue>
            <BoxValue>
              <TitleValue>Breed:</TitleValue>
              <Value>{breed}</Value>
            </BoxValue>
            <BoxValue>
              <TitleValue>Place:</TitleValue>
              <Value>{location}</Value>
            </BoxValue>
            <BoxValue>
              <TitleValue>The sex:</TitleValue>
              <Value>{sex}</Value>
            </BoxValue>
            <BoxValue>
              <TitleValue>Email:</TitleValue>
              <Value>
                <a href={hrefMail}>{email}</a>
              </Value>
            </BoxValue>
            <BoxValue>
              <TitleValue>Phone:</TitleValue>
              <Value>
                <a href={hrefTel}>{phone}</a>
              </Value>
            </BoxValue>
            {price && (
              <BoxValue>
                <TitleValue>Sell:</TitleValue>
                <Value>{price}</Value>
              </BoxValue>
            )}
          </ListOfValues>
        </BoxTitleList>
      </Box>

      <Comments>
        <b>Comments: </b>
        {comments}
      </Comments>

      <BoxBtns>
        <Btn type="button">
          Add to
          <span>
            <Heart />
          </span>
        </Btn>
        <Btn type="button">Contact</Btn>
      </BoxBtns>
    </>
  );
};
