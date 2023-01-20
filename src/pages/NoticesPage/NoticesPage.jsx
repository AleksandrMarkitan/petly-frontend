import { useEffect } from "react";
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
// -----------------------------------------------------------

export const NoticesPage = () => {
  const dispatch = useDispatch();

  const { route } = useParams();

  useEffect(() => {
    dispatch(fetchNotices({ category: route }));
  }, [dispatch, route]);

  return (
    <Section>
      <Container>
        <SectionTitle text={"Find your favorite pet"} />
        <SearchField />
        <NoticesCategoriesNav />
        <AddNoticeButton />

        <NoticesCategoriesList />
      </Container>
    </Section>
  );
};
