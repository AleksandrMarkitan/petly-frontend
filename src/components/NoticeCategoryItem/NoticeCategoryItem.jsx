import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectFavoriteNotices } from '../../redux/auth/authSelectors';
import { deleteNotice } from "../../redux/notices/noticesOperations";
import { updateFavoriteNotice } from "../../redux/auth/authOperations";

import { FavoriteBtn } from '../CommonButtons/FavoriteBtn/FavoriteBtn';
import { LearnMoreBtn } from '../CommonButtons/LearnMoreBtn/LearnMoreBtn';
import { DeletePetNoticesBtn } from '../CommonButtons/DeletePetNoticesBtn/DeletePetNoticesBtn';
import { ModalWindow } from "../CommonComponents/ModalWindow/ModalWindow";
import { ModalNotice } from "../ModalNotice/ModalNotice";
import { Item, Wrap, ImgWrap, CategoryLabel, Img, Inner, Title, Ul, Li, Lable, Text } from "./NoticeCategoryItem.styled";

export const NoticeCategoryItem = ({ data }) => {
  const {
    _id,
    title,
    category,
    name,
    birthdate,
    breed,
    location,
    imgURL,
  } = data;

  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const favorites = useSelector(selectFavoriteNotices);

  const [isFavorite, setIsFavorite] = useState(false);

  const currentUser = useSelector(selectUser);

  // setIsFavorite(currentUser.favoriteNotices
  //   .includes(_id));

  // console.log(data);
  // console.log(currentUser);
  // console.log(favorites);


  const getAge = birthdate => {
    // const age = now Date() - birthdate;
  }

  const deletePet = (noticeId) => {
    dispatch(deleteNotice({ noticeId }));
  }

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const favoriteHandler = () => {
    setIsFavorite(!isFavorite);
    dispatch(updateFavoriteNotice);
  }

  // const getFavorite = NoticeId => favorites.includes(NoticeId);

  // const isOwner = NoticeId => currentUserId === NoticeId;

  return (
    <>
      <Item key={_id} >
        <Wrap>
          <ImgWrap>
            <CategoryLabel>{category}</CategoryLabel>
            <Img src={imgURL} alt={name} />
            <FavoriteBtn
              isFavorite={isFavorite}
              onClick={favoriteHandler} />
          </ImgWrap>
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
          <LearnMoreBtn onClick={closeModal} />
          {/* {&&
            <DeletePetNoticesBtn onClick={deletePet(_id)} />} */}
          {isModalOpen &&
            <ModalWindow onClose={closeModal}>
              <ModalNotice data={data} />
            </ModalWindow>}
        </Wrap>
      </Item>
    </>
  )
}