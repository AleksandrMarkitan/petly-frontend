import { useState } from "react"
import { ReactComponent as Favorite } from "../../../icons/favorite.svg"
import { Button } from "./FavoriteBtn.styled"

export const FavoriteBtn = ({ favorite, allowedToChange, onClick = () => { } }) => {

	const [isFavorite, setIsFavorite] = useState(favorite);

	const favoriteHandler = () => {
		if (allowedToChange) {
			setIsFavorite(!isFavorite);
		}
		onClick();
	}
	return (
		<Button
			type="button"
			isFavorite={isFavorite}
			onClick={favoriteHandler}>
			<span> <Favorite /></span>
		</Button>
	)
}