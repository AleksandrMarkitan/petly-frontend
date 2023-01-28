import { NoticeCategoryItem } from '../../components/NoticeCategoryItem/NoticeCategoryItem';
import { List } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = ({ data, route }) => {
  return (
    <>
      <List>
        {data
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
    </>
    // <>
    //   <List>
    //     {data.map((item) =>
    //       <NoticeCategoryItem key={item._id} data={item} />)}
    //   </List>
    // </>
  );
};
