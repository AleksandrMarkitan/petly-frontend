import { ReactComponent as Favorite } from '../../../icons/favorite.svg';
import { Button } from './FavoriteBtn.styled';

export const FavoriteBtn = ({ favorite, onClick }) => {
  return (
    <Button type="button" isFavorite={favorite} onClick={onClick}>
      <span>
        <Favorite />
      </span>
    </Button>
  );
};
