import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/authSelectors';
import { Nav, List, Item, LinkNav } from "./NoticesCategoriesNav.styled";

export const NoticesCategoriesNav = () => {
  const token = useSelector(selectToken);

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
            <LinkNav to="/notices/in-good-hands">in good hands</LinkNav>
          </Item>

          {token &&
            <>
            <Item>
              <LinkNav to="/notices/favorite">favorite ads</LinkNav>
            </Item>
            <Item>
              <LinkNav to="/notices/owner">my ads</LinkNav>
            </Item>
            </>}
        </List>
      </Nav>
    </>
  );
};
