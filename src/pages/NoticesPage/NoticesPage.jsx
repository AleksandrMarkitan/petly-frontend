import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
	selectNotices,
	selectNoticesIsLoading,
} from "../../redux/notices/noticesSelectors";
import {
	fetchNotices,
} from "../../redux/notices/noticesOperations";
import { clearNotices } from '../../redux/notices/noticesSlice';
import { SectionTitle } from "../../components/CommonComponents/SectionTitle/SectionTitle";
import { NoticesCategoriesNav } from "../../components/NoticesCategoriesNav/NoticesCategoriesNav";
import { Section } from "../../components/CommonComponents/Section/Section";
import { Container } from "../../components/CommonComponents/Container/Container";
import { AddNoticeButton } from "../../components/CommonButtons/AddNoticeButton/AddNoticeButton";
import { NoticesCategoriesList } from "../../components/NoticesCategoriesList/NoticesCategoriesList";
import { ModalAddNotice } from "../../components/ModalAddNotice/ModalAddNotice";
import { MenuWrap } from "./NoticesPage.styled";
import { NoticesSearch } from "../../components/NoticesSearch/NoticesSearch";
import { Notification } from "../../components/Notification/Notification";
import { Loader } from "../../components/Loader/Loader";
import {
	NOT_FOUND,
	MUST_AUTHORIZED,
	MUST_AUTHORIZED_QUESTION,
} from "../../helpers/constants";
import { Alert } from '../../components/CommonComponents/Alert/Alert';
import { selectIsAuth } from "../../redux/auth/authSelectors";
import { WarningMessage } from '../../components/CommonComponents/WarningMessage/WarningMessage';

const NoticesPage = () => {
	const { route } = useParams();

	const [isModalOpen, setIsModalOpen] = useState(false);

	const [searchTitleQwery, setSearchTitleQwery] = useState('');

	const notices = useSelector(selectNotices);
	const isLoading = useSelector(selectNoticesIsLoading);
	const isAuth = useSelector(selectIsAuth);

	const dispatch = useDispatch();

	useEffect(() => {
		if (searchTitleQwery !== '') {
			dispatch(fetchNotices({ category: route, qwery: searchTitleQwery }));
		} else {
			dispatch(fetchNotices({ category: route }));
		}
		return () => dispatch(clearNotices([]));
	}, [dispatch, route, searchTitleQwery]);

	const closeModal = () => {
		setIsModalOpen(!isModalOpen);
		// isAuth ? setIsModalOpen(!isModalOpen) : setIsShownAlert(true);
	};

	const onSearch = (searchQuery) => {
		setSearchTitleQwery(searchQuery);
	};

	return (
		<Section>
			<Container>
				<SectionTitle text={"Find your favorite pet"} />
				<NoticesSearch onSearch={onSearch} />
				<>
					<MenuWrap>
						<NoticesCategoriesNav />
						<AddNoticeButton onClick={closeModal} />
					</MenuWrap>
					{notices.length > 0 ?
						<NoticesCategoriesList
							route={route}
							data={notices} /> :
						!isLoading && <Notification message={NOT_FOUND} />}
				</>
				{isModalOpen && isAuth && <ModalAddNotice onClose={closeModal} />}
				{isModalOpen && !isAuth && <WarningMessage onClose={closeModal} type="auth" title="Unauthorized" text="Let`s login or registration to add notice." />}
				{isLoading && <Loader />}
			</Container>
		</Section>
	);
};

export default NoticesPage;
