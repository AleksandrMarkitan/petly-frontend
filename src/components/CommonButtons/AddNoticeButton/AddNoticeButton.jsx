import { AddBtnMobile, AddBtn } from "./AddNoticeButton.styled";
import { BsPlusLg } from "react-icons/bs";

import { useMedia } from "react-use";

export const AddNoticeButton = ({ onClick }) => {
	const isMobile = useMedia('(max-width: 767px)')

	const handleButtonClick = () => {
		onClick();
	}

	return <>
		{isMobile ?
			<AddBtnMobile type="button" onClick={handleButtonClick}><BsPlusLg />Add pet</AddBtnMobile>
			:
			<AddBtn type="button" onClick={handleButtonClick}>Add pet <span><BsPlusLg /></span></AddBtn>
		}
	</>
}