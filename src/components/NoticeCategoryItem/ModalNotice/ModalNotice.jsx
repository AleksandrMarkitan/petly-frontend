import {
  Box,
  BoxBtns,
  BoxTitleList,
  BoxValue,
  Btn,
  BtnIsAdded,
  Category,
  Comments,
  Heart,
  Img,
  ListOfValues,
  ThumbImg,
  Title,
  TitleValue,
  Value,
} from './ModalNotice.styled';
import { dateInFormat } from '../../../helpers/dateFormat';
import { ModalWindow } from '../../CommonComponents/ModalWindow/ModalWindow';

export const ModalNotice = ({
  onClose,
  isFavorite,
  onClickFavorite,
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
  const hrefLocation = `https://www.google.com/maps?q=${location}`;

  const birthdateFormat = dateInFormat(birthdate, 'dd.MM.yyyy');

  return (
    <>
      <ModalWindow onClose={onClose}>
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
                <Value>{birthdateFormat}</Value>
              </BoxValue>
              <BoxValue>
                <TitleValue>Breed:</TitleValue>
                <Value>{breed}</Value>
              </BoxValue>
              <BoxValue>
                <TitleValue>Place:</TitleValue>
                <Value>
                  <a href={hrefLocation}
                    target="_blank"
                    rel="noopener nofollow noreferrer" >
                    {location}
                  </a>
                </Value>
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
                  <Value>{price}&#36;</Value>
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
          {!isFavorite ? (
            <Btn type="button" onClick={onClickFavorite}>
              Add to
              <span>
                <Heart />
              </span>
            </Btn>
          ) : (
            <div>
              <p>Added to "Favorite ads"</p>
              <BtnIsAdded type="button" onClick={onClickFavorite}>
                Remove from
                <span>
                  <Heart />
                </span>
              </BtnIsAdded>
            </div>
          )}

          <a href={hrefTel}>
            <Btn type="button">Contact</Btn>
          </a>
        </BoxBtns>
      </ModalWindow>
    </>
  );
};
