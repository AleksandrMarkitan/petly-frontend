import { ReactComponent as DeleteBtn } from "../../../icons/trash_basket.svg"
import { Button } from "./DeletePetBtn.styled"

export const DeletePetBtn = () => {
	return <Button type="button"><DeleteBtn /></Button>
}