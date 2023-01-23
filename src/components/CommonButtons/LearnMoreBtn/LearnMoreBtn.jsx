import { Button } from "./LearnMoreBtn.styled"

export const LearnMoreBtn = ({ onClick }) => {

	const handleButtonClick = () => {
		onClick();
	}
	return(
	<>
		<Button type="button" onClick={handleButtonClick}>
			Learn more
		</Button>
	</>
)}