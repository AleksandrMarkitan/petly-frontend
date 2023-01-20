// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { CategoryBtn } from '../CommonButtons/CategoryBtn/CategoryBtn';
import { NoticesCategoriesList } from '../NoticesCategoriesList/NoticesCategoriesList';
import { NoticeCategoryItem } from '../NoticeCategoryItem/NoticeCategoryItem';
import { Nav, List, Item, LinkNav } from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Nav>
        <List>
          <Item>
            <LinkNav to="/notices/sell">sell</LinkNav>
          </Item>
          <Item>
            <LinkNav to="/notices/lost-found">lost/found</LinkNav>
          </Item>
          <Item>
            <LinkNav to="/notices/for-free">in good hands</LinkNav>
          </Item>
          {/* {isLoggedIn && (
            <><Item>
              <LinkNav to="/notices/favorite"><CategoryBtn text="favorite ads/></LinkNav>
            </Item>
              <Item>
                <LinkNav to="/notices/own"><CategoryBtn text="my ads"/></LinkNav>
              </Item>
            </>)} */}
        </List>
      </Nav>
      <NoticesCategoriesList>
        <NoticeCategoryItem />
      </NoticesCategoriesList>
    </>
  );
};
