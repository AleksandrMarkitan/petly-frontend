import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	selectUser,
	selectFavoriteNotices,
	selectToken,
} from '../../redux/auth/authSelectors';
import {
	selectOneNotice,
	selectNoticesIsLoading,
} from '../../redux/notices/noticesSelectors';
import {
	deleteNotice,
	fetchOneNotice,
} from '../../redux/notices/noticesOperations';
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
import { Alert } from '../../components/CommonComponents/Alert/Alert';
import {
	MUST_AUTHORIZED,
	MUST_AUTHORIZED_QUESTION,
} from '../../helpers/constants';

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
	const dataDetail = useSelector(selectOneNotice);
	const isLoading = useSelector(selectNoticesIsLoading);

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
	const openModal = () => {
		dispatch(fetchOneNotice({ noticeId: _id }));
		setIsModalOpen(true);
	};

	const closeAlert = () => {
		setIsShownAlert(!isShownAlert);
	};

	const age = getAge(birthdate);

	return (

		<>
			<Item>
				<ImgWrap>
					<CategoryLabel>{category}</CategoryLabel>
					<Img src={imgURL} alt={name} loading="lazy" />
					<FavoriteBtn
						favorite={isFavorite}
						allowedToChange={token ? true : false}
						onClick={onChangeFavorite} />
					{isShownAlert &&
						<Alert
							textInfo={MUST_AUTHORIZED}
							textQuestion={MUST_AUTHORIZED_QUESTION}
							onClose={closeAlert} />}
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
								<Text>{age}</Text>
							</Li>
						</Ul>
					</WrapInner>
					<ThumbBtn>
						<LearnMoreBtn onClick={openModal} />
						{currentUser.email === owner.email && (
							<DeletePetNoticesBtn onDelete={deletePet} />
						)}
					</ThumbBtn>
				</Wrap>
			</Item>
			{isModalOpen && !isLoading && (
				<ModalWindow onClose={closeModal}>
					<ModalNotice
						data={dataDetail}
						isFavorite={isFavorite}
						onClickFavorite={onChangeFavorite}
					// data={{ ...data, birthdate: age }}
					// onChangeFavorite={onChangeFavorite} />
					/>
				</ModalWindow>
			)}
		</>
	);
};
