import { Label } from "../ModalAddNotice.styled"
import { DateInput } from "./Date.styled"
import moment from 'moment';
import "react-datetime/css/react-datetime.css";

export const Date = ({ inputProps, value, onChange, timeFormat, closeOnSelect, dateFormat }) => {

	const onChangeHandler = e => {
		onChange(e.format("DD.MM.YYYY"))
	}
	const validDate = current => {
		return current.isBefore(moment()) && current.isAfter('1999-12-31', 'day');
	};

	return <>
		<Label htmlFor="birth">
			Date of birth
		</Label>
		<DateInput isValidDate={validDate} inputProps={inputProps} value={value}
			onChange={onChangeHandler} timeFormat={timeFormat}
			closeOnSelect={closeOnSelect} dateFormat={dateFormat} />
	</>
} 