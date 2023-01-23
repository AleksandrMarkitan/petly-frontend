import { useState } from "react"
import { ReactComponent as Favorite } from "../../../icons/favorite.svg"
import { Button } from "./FavoriteBtn.styled"

export const FavoriteBtn = ({ isFavorite, onClick }) => {

	// const [isFavorite, setIsFavorite] = useState(false);



	return <Button
		isFavorite={isFavorite}
		type="button">
		<Favorite />
	</Button>
	// return <Button isFavorite={isFavorite} onClick={favoriteHandler} type="button"><Favorite /></Button>
}