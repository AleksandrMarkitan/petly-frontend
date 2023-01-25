import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, selectFavoriteNotices } from "../../redux/auth/authSelectors";
import { deleteNotice } from "../../redux/notices/noticesOperations";
import { updateFavoriteNotice } from "../../redux/auth/authOperations";
import { FavoriteBtn } from "../CommonButtons/FavoriteBtn/FavoriteBtn";
import { LearnMoreBtn } from "../CommonButtons/LearnMoreBtn/LearnMoreBtn";
import { DeletePetNoticesBtn } from '../CommonButtons/DeletePetNoticesBtn/DeletePetNoticesBtn';
import { ModalWindow } from "../CommonComponents/ModalWindow/ModalWindow";
import { ModalNotice } from "../ModalNotice/ModalNotice";
import {
  Item,
  Wrap,
  ImgWrap,
  CategoryLabel,
  Img,
  WrapInner,
  Title,
  Ul,
  Li,
  Lable,
  Text,
  ThumbBtn,
} from "./NoticeCategoryItem.styled";
import { ageInWords } from '../../helpers/dateFormat';

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
    owner,
  } = data;

  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentUser = useSelector(selectUser);

  const favorites = useSelector(selectFavoriteNotices);
  const isFavorite = favorites.includes(_id);
  const onChangeFavorite = () => {
    dispatch(updateFavoriteNotice({ noticeId: _id }));
  };

  const deletePet = () => {
    dispatch(deleteNotice({ noticeId: _id }));
  };

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Item >
        <ImgWrap>
          <CategoryLabel>{category}</CategoryLabel>
          <Img src={imgURL} alt={name} />
          <FavoriteBtn
            favorite={isFavorite}
            onClick={onChangeFavorite} />
        </ImgWrap>
        <Wrap>
          <WrapInner>
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
                <Text>{ageInWords(birthdate)}</Text>
              </Li>
            </Ul>
          </WrapInner>
          <ThumbBtn>
            <LearnMoreBtn onClick={closeModal} />
            {currentUser.email === owner.email &&
              <DeletePetNoticesBtn onDelete={deletePet} />}
            <p></p>
          </ThumbBtn>
        </Wrap>
      </Item>
      {isModalOpen &&
        <ModalWindow onClose={closeModal}>
          <ModalNotice data={data} />
        </ModalWindow>}
    </>
  );
};
