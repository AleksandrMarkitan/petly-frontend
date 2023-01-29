import { NoticeCategoryItem } from '../../components/NoticeCategoryItem/NoticeCategoryItem';
import { ScrollUpBtn } from '../CommonButtons/ScrollUpBtn/ScrollUpBtn';
import { List } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({ data, route }) => {

  return (
    <>
      <List>
        {[...data].reverse()
          .filter(
            item =>
              item.category === route ||
              route === 'owner' ||
              route === 'favorite'
          )
          .map(item => (
            <NoticeCategoryItem key={item._id} data={item} />
          ))}
      </List>
      <ScrollUpBtn />
    </>
  );
};
