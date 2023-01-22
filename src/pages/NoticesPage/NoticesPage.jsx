import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectNotices } from '../../redux/notices/noticesSelectors';
import { fetchNotices, fetchFavorites, fetchOwnerNotices } from "../../redux/notices/noticesOperations";
import { SectionTitle } from "../../components/CommonComponents/SectionTitle/SectionTitle";
import { SearchField } from "../../components/CommonComponents/SearchField/SearchField";
import { NoticesCategoriesNav } from "../../components/NoticesCategoriesNav/NoticesCategoriesNav";
import { Section } from "../../components/CommonComponents/Section/Section";
import { Container } from "../../components/CommonComponents/Container/Container";
import { AddNoticeButton } from "../../components/CommonButtons/AddNoticeButton/AddNoticeButton";
import { NoticesCategoriesList } from "../../components/NoticesCategoriesList/NoticesCategoriesList";
import { NoticeCategoryItem } from "../../components/NoticeCategoryItem/NoticeCategoryItem";
import { ModalAddNotice } from "../../components/ModalAddNotice/ModalAddNotice";
import { MenuWrap } from "./NoticesPage.styled";

export const NoticesPage = () => {
  const { route } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const notices = useSelector(selectNotices);

  const dispatch = useDispatch();

  useEffect(() => {
    if (route === 'favorite') {
      dispatch(fetchFavorites({}));
    }
    if (route === 'owner') {
      dispatch(fetchOwnerNotices({}));
    }
    if (['sell', 'lost-found', 'in-good-hands'].includes(route)) {
      dispatch(fetchNotices({ category: route }));
    }
  }, [dispatch, route]);

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <Section>
      <Container>
        <SectionTitle text={"Find your favorite pet"} />
        <SearchField />
        <MenuWrap>
          <NoticesCategoriesNav />
          <AddNoticeButton onClick={closeModal} />
        </MenuWrap>
        <NoticesCategoriesList>
          <NoticeCategoryItem notices={notices} />
        </NoticesCategoriesList>
        {isModalOpen && <ModalAddNotice onClose={closeModal} />}
      </Container>
    </Section>
  );
};
