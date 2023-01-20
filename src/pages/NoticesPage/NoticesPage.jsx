import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useParams } from "react-router-dom";

import { fetchNotices } from "../../redux/notices/noticesOperations";

import { SectionTitle } from "../../components/CommonComponents/SectionTitle/SectionTitle";
import { SearchField } from "../../components/CommonComponents/SearchField/SearchField";
import { NoticesCategoriesNav } from "../../components/NoticesCategoriesNav/NoticesCategoriesNav";
import { Section } from "../../components/CommonComponents/Section/Section";
import { Container } from "../../components/CommonComponents/Container/Container";
// -----------------------------------------------------------

export const NoticesPage = () => {
  const dispatch = useDispatch();

  const { category } = useParams();

  useEffect(() => {
    dispatch(fetchNotices({ category }));
  }, [dispatch, category]);

  return (
    <Section>
      <Container>
        <SectionTitle text={"Find your favorite pet"} />
        <SearchField />
        <NoticesCategoriesNav />

        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </Section>
  );
};
