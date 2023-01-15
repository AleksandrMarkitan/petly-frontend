import { useState } from "react"
import { ReactComponent as Favorite } from "../../../icons/favorite.svg"
import { Button } from "./FavoriteBtn.styled"

export const FavoriteBtn = () => {
	const [isFavorite, setIsFavorite] = useState(false);

	const favoriteHandler = () => {
		setIsFavorite(!isFavorite)
	}

	return <Button isFavorite={isFavorite} onClick={favoriteHandler} type="button"><Favorite /></Button>
}