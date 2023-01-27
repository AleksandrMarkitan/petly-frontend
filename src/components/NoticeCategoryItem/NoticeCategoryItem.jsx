import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectUser,
  selectFavoriteNotices,
  selectToken,
} from '../../redux/auth/authSelectors';
import { deleteNotice } from '../../redux/notices/noticesOperations';
import { updateFavoriteNotice } from '../../redux/auth/authOperations';
import { FavoriteBtn } from '../CommonButtons/FavoriteBtn/FavoriteBtn';
import { LearnMoreBtn } from '../CommonButtons/LearnMoreBtn/LearnMoreBtn';
import { DeletePetNoticesBtn } from '../CommonButtons/DeletePetNoticesBtn/DeletePetNoticesBtn';
import { ModalWindow } from '../CommonComponents/ModalWindow/ModalWindow';
import { ModalNotice } from './ModalNotice/ModalNotice';
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
} from './NoticeCategoryItem.styled';
import { getAge } from '../../helpers/dateFormat';
import { Alert } from './Alert/Alert';

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
  const [isShownAlert, setIsShownAlert] = useState(false);

  const currentUser = useSelector(selectUser);
  const token = useSelector(selectToken);
  const favorites = useSelector(selectFavoriteNotices);

  const isFavorite = favorites.includes(_id);

  const onChangeFavorite = () => {
    token
      ? dispatch(updateFavoriteNotice({ noticeId: _id }))
      : setIsShownAlert(true);
  };

  const deletePet = () => {
    dispatch(deleteNotice({ noticeId: _id }));
  };

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeAlert = () => {
    setIsShownAlert(!isShownAlert);
  };

  return (
    <>
      <Item>
        <ImgWrap>
          <CategoryLabel>{category}</CategoryLabel>
          <Img src={imgURL} alt={name} />
          <FavoriteBtn favorite={isFavorite} onClick={onChangeFavorite} />
          {isShownAlert && <Alert onClose={closeAlert} />}
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
                <Text>{getAge(birthdate)}</Text>
              </Li>
            </Ul>
          </WrapInner>
          <ThumbBtn>
            <LearnMoreBtn onClick={closeModal} />
            {currentUser.email === owner.email && (
              <DeletePetNoticesBtn onDelete={deletePet} />
            )}
          </ThumbBtn>
        </Wrap>
      </Item>
      {isModalOpen && (
        <ModalWindow onClose={closeModal}>
          <ModalNotice
            data={data}
            isFavorite={isFavorite}
            onClickFavorite={onChangeFavorite}
          />
        </ModalWindow>
      )}
    </>
  );
};
