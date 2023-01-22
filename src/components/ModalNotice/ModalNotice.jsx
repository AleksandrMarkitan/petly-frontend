import { useState } from "react";
import { ModalWindow } from "../CommonComponents/ModalWindow/ModalWindow";
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
  title,
  category,
  name,
  birthdate,
  breed,
  sex,
  location,
  comments,
  imgURL,
  owner,
  sell,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const hrefMail = `mailto:${owner}`;
  const hrefTel = `tel:/* +380991111111 */${owner}`;

  return (
    <>
      <button onClick={closeModal}>ВІДКРИТИ МОДАЛКУ</button>
      {isModalOpen && (
        <ModalWindow onClose={closeModal}>
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
                    <a href={hrefMail}>{}Email</a>
                  </Value>
                </BoxValue>
                <BoxValue>
                  <TitleValue>Phone:</TitleValue>
                  <Value>
                    <a href={hrefTel}>{}Phone</a>
                  </Value>
                </BoxValue>
                {sell && (
                  <BoxValue>
                    <TitleValue>Sell:</TitleValue>
                    <Value>{sell}</Value>
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
              <Heart />
            </Btn>
            <Btn type="button">Contact</Btn>
          </BoxBtns>
        </ModalWindow>
      )}
    </>
  );
};
