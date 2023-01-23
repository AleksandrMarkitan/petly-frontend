import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectNotices } from "../../redux/notices/noticesSelectors";
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
import { NoticeCategoryItem } from "../../components/NoticeCategoryItem/NoticeCategoryItem";
import { ModalAddNotice } from "../../components/ModalAddNotice/ModalAddNotice";
import { MenuWrap } from "./NoticesPage.styled";
import { NoticesSearch } from "../../components/NoticesSearch/NoticesSearch";

export const NoticesPage = () => {
  const { route } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTitleQwery, setSearchTitleQwery] = useState("");

  const notices = useSelector(selectNotices);

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
        dispatch(fetchOwnerNotices({qwery: searchTitleQwery}));
      }else{
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
