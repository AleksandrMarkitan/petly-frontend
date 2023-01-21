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
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <button onClick={closeModal}>ВІДКРИТИ МОДАЛКУ</button>
      {isModalOpen && (
        <ModalWindow onClose={closeModal} modalType={"addPet"}>
          <Box>
            <ThumbImg>
              <Img src="" alt="" />
            </ThumbImg>

            <BoxTitleList>
              <Title>Сute dog looking for a home</Title>

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
                  <Value>{}</Value>
                </BoxValue>
                <BoxValue>
                  <TitleValue>Phone:</TitleValue>
                  <Value>{}</Value>
                </BoxValue>
                <BoxValue>
                  <TitleValue>Sell:</TitleValue>
                  <Value>{}</Value>
                </BoxValue>
              </ListOfValues>
            </BoxTitleList>
          </Box>

          <Category>In good hands</Category>

          <Comments>
            <b>Comments: </b>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur Lorem ipsum dolor sit amet, consectetur Lorem
          </Comments>

          <BoxBtns>
            <Btn type="button">Add to </Btn>
            <Btn type="button">Contact</Btn>
          </BoxBtns>
        </ModalWindow>
      )}
    </>
  );
};
