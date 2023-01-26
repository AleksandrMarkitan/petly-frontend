import { ReactComponent as MaleIcon } from "../../../icons/add_pet_modal/male.svg";
import { ReactComponent as FemaleIcon } from "../../../icons/add_pet_modal/female.svg";
import { Label } from "../ModalAddNotice.styled"
import { SexRadioWrap, RadioSexLabel, InputRadio } from "./SexRadioBtns.styled";

export const SexRadioBtns = ({ sex, onChange }) => {

	const onChangeHandler = e => {
		onChange(e.target.value, "sex")
	}

	return <>
		<Label>The sex</Label>
		<SexRadioWrap>
			<RadioSexLabel sex={sex} value={"male"}>
				<InputRadio type="radio" name="sex" value="male" onChange={onChangeHandler} />
				<MaleIcon />
				Male
			</RadioSexLabel>
			<RadioSexLabel sex={sex} value={"female"}>
				<InputRadio type="radio" name="sex" value="female" onChange={onChangeHandler} />
				<FemaleIcon />
				Female
			</RadioSexLabel>
		</SexRadioWrap>
	</>
}
