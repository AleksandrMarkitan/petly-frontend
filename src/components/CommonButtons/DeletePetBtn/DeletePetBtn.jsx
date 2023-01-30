import { DeleteBtn, DelIcon } from "./DeletePetBtn.styled";

export const DeletePetBtn = ({ onClick }) => {
	const clickHandler = () => {
		onClick()
	}
	return (
		<DeleteBtn type="button" onClick={clickHandler}>
			<DelIcon />
		</DeleteBtn>
	);
};
