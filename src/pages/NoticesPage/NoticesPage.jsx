import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
	selectToken,
} from '../../redux/auth/authSelectors';
import {
	selectNotices,
	selectNoticesIsLoading,
	// selectNoticesError,
	// selectNoticesNotify,
} from "../../redux/notices/noticesSelectors";
import { updateFavoriteNotice } from "../../redux/auth/authOperations";
import {
	fetchNotices,
	fetchFavorites,
	fetchOwnerNotices,
} from "../../redux/notices/noticesOperations";
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

const NoticesPage = () => {
	const { route } = useParams();

	const [isModalOpen, setIsModalOpen] = useState(false);

	const [searchTitleQwery, setSearchTitleQwery] = useState("");

	const token = useSelector(selectToken);

	const notices = useSelector(selectNotices);
	const isLoading = useSelector(selectNoticesIsLoading);

	const [isShownAlert, setIsShownAlert] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {

		if (route === "favorite") {
			if (searchTitleQwery !== "") {
				dispatch(fetchFavorites({ qwery: searchTitleQwery }));
			} else {
				dispatch(fetchFavorites({}));
			}
		}

		if (route === "owner") {
			if (searchTitleQwery !== "") {
				dispatch(fetchOwnerNotices({ qwery: searchTitleQwery }));
			} else {
				dispatch(fetchOwnerNotices({}));
			}
		}

		if (["sell", "lost-found", "in-good-hands"].includes(route)) {
			if (searchTitleQwery !== "") {
				dispatch(fetchNotices({ category: route, qwery: searchTitleQwery }));
			} else {
				dispatch(fetchNotices({ category: route }));
			}
		}
	}, [dispatch, route, searchTitleQwery]);

	const closeModal = () => {
		token ? setIsModalOpen(!isModalOpen) : setIsShownAlert(true);
	};

	const onSearch = (searchQuery) => {
		setSearchTitleQwery(searchQuery);
	};

	const closeAlert = () => {
		setIsShownAlert(!isShownAlert);
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
				{isModalOpen && <ModalAddNotice onClose={closeModal} />}
				{isShownAlert &&
					<Alert
						textInfo={MUST_AUTHORIZED}
						textQuestion={MUST_AUTHORIZED_QUESTION}
						onClose={closeAlert} />}
				{isLoading && <Loader />}
			</Container>
		</Section>
	);
};

export default NoticesPage;
