import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteNotice } from "../../redux/notices/noticesOperations";

import { FavoriteBtn } from '../CommonButtons/FavoriteBtn/FavoriteBtn';
import { LearnMoreBtn } from '../CommonButtons/LearnMoreBtn/LearnMoreBtn';
import { DeletePetBtn } from '../CommonButtons/DeletePetBtn/DeletePetBtn';
import { ModalWindow } from "../CommonComponents/ModalWindow/ModalWindow";
import { Item, Wrap, CategoryLabel, Img, Inner, Title, Ul, Li, Lable, Text } from "./NoticeCategoryItem.styled";

export const NoticeCategoryItem = ({ notices }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const getAge = birthdate => {
    // const age = now Date() - birthdate;
  }

  const deletePet = (noticeId) => {
    dispatch(deleteNotice({ noticeId }));
  }

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      {notices.map(({
        _id,
        title,
        category,
        name,
        birthdate,
        breed,
        location,
        imgURL,
        owner,
      }) => (
        <Item key={_id} >
          <Wrap>
            <CategoryLabel>{category}</CategoryLabel>
            <Img src={imgURL} alt={name} />
            <FavoriteBtn />
            <Inner>
              <Title>{title}</Title>
              <Ul>
                <Li key={`${_id}+breed`}>
                  <Lable>Breed:</Lable>
                  <Text>{breed}</Text>
                </Li>
                <Li key={`${_id}+place`}>
                  <Lable>Place:</Lable>
                  <Text>{location}</Text>
                </Li>
                <Li key={`${_id}+age`}>
                  <Lable>Age:</Lable>
                  <Text>{getAge(birthdate)}</Text>
                </Li>
              </Ul>
            </Inner>
            <LearnMoreBtn onClick={closeModal}>
            </LearnMoreBtn>
            <DeletePetBtn onClick={() => deletePet(_id)} />
            {isModalOpen &&
              <ModalWindow
                onClose={closeModal}>
                {/* <{NoticeModal data={data}/> */}
              </ModalWindow>}
          </Wrap>
        </Item>))}
    </>
  )
}