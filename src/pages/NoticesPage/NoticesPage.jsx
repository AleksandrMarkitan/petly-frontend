import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchNotices } from "../../redux/notices/noticesOperations";

import { SectionTitle } from "../../components/CommonComponents/SectionTitle/SectionTitle";
import { SearchField } from "../../components/CommonComponents/SearchField/SearchField";
import { NoticesCategoriesNav } from "../../components/NoticesCategoriesNav/NoticesCategoriesNav";
import { Section } from "../../components/CommonComponents/Section/Section";
import { Container } from "../../components/CommonComponents/Container/Container";
import { AddNoticeButton } from "../../components/CommonButtons/AddNoticeButton/AddNoticeButton";
import { NoticesCategoriesList } from "../../components/NoticesCategoriesList/NoticesCategoriesList";
import { MenuWrap } from "./NoticesPage.styled";
// -----------------------------------------------------------
import { ModalAddNotice } from "../../components/ModalAddNotice/ModalAddNotice";

export const NoticesPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const closeModal = () => {
		setIsModalOpen(!isModalOpen);
	}

	const dispatch = useDispatch();

	const { route } = useParams();

	useEffect(() => {
		dispatch(fetchNotices({ route }));
	}, [dispatch, route]);

	return (
		<Section>
			<Container>
				<SectionTitle text={"Find your favorite pet"} />
				<SearchField />
				<MenuWrap>
					<NoticesCategoriesNav />
					<AddNoticeButton onClick={closeModal} />
				</MenuWrap>
				<NoticesCategoriesList />
				{isModalOpen && <ModalAddNotice onClose={closeModal} />}
			</Container>
		</Section>
	);
};
