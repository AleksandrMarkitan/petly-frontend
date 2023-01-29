import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectNotices,
  selectNoticesIsLoading,
  // selectNoticesError,
  // selectNoticesNotify,
} from '../../redux/notices/noticesSelectors';
import {
  fetchNotices,
} from '../../redux/notices/noticesOperations';
import { clearNotices } from '../../redux/notices/noticesSlice';
import { SectionTitle } from '../../components/CommonComponents/SectionTitle/SectionTitle';
import { NoticesCategoriesNav } from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import { Section } from '../../components/CommonComponents/Section/Section';
import { Container } from '../../components/CommonComponents/Container/Container';
import { AddNoticeButton } from '../../components/CommonButtons/AddNoticeButton/AddNoticeButton';
import { NoticesCategoriesList } from '../../components/NoticesCategoriesList/NoticesCategoriesList';
import { ModalAddNotice } from '../../components/ModalAddNotice/ModalAddNotice';
import { MenuWrap } from './NoticesPage.styled';
import { NoticesSearch } from '../../components/NoticesSearch/NoticesSearch';
import { Notification } from '../../components/Notification/Notification';
import { Loader } from '../../components/Loader/Loader';
import { NOT_FOUND } from '../../helpers/constants';

const NoticesPage = () => {
  const { route } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchTitleQwery, setSearchTitleQwery] = useState('');

  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectNoticesIsLoading);

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
  };

  const onSearch = searchQuery => {
    setSearchTitleQwery(searchQuery);
  };

  return (
    <Section>
      <Container>
        <SectionTitle text={'Find your favorite pet'} />
        <NoticesSearch onSearch={onSearch} />
        <>
          <MenuWrap>
            <NoticesCategoriesNav />
            <AddNoticeButton onClick={closeModal} />
          </MenuWrap>
          {notices.length > 0 ? (
            <NoticesCategoriesList route={route} data={notices} />
          ) : (
            !isLoading && <Notification message={NOT_FOUND} />
          )}
        </>
        {isModalOpen && <ModalAddNotice onClose={closeModal} />}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default NoticesPage;
