import { Button } from "./NextBtn.styled";

export const NextBtn = ({ onClick, type = "button", text = "Next", disabled = false }) => {

	const clickHandler = e => {
		e.preventDefault();
		onClick();
	}

	return <Button type={type} onClick={clickHandler} disabled={disabled}>{text}</Button>
}
