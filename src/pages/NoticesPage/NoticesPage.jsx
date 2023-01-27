import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
	selectNotices,
	selectNoticesIsLoading,
	// selectNoticesError,
	// selectNoticesNotify,
} from "../../redux/notices/noticesSelectors";
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
import { NOT_FOUND } from "../../helpers/constants";
// import { help } from "../../helpers/dataFormat";

const NoticesPage = () => {
	const { route } = useParams();

	const [isModalOpen, setIsModalOpen] = useState(false);

	const [searchTitleQwery, setSearchTitleQwery] = useState("");

	const notices = useSelector(selectNotices);
	const isLoading = useSelector(selectNoticesIsLoading);

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
		setIsModalOpen(!isModalOpen);
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
						{/* <AddNoticeButton onClick={help} /> */}
						<NoticesCategoriesNav />
						<AddNoticeButton onClick={closeModal} />
					</MenuWrap>
					{notices.length > 0 ?
						<NoticesCategoriesList data={notices} /> :
						!isLoading && <Notification message={NOT_FOUND} />}
				</>
				{isModalOpen && <ModalAddNotice onClose={closeModal} />}
				{isLoading && <Loader />}
			</Container>
		</Section>
	);
};

export default NoticesPage;
