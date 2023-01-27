import { Label } from "../ModalAddNotice.styled"
import { ReactComponent as RemoveIcon } from "../../../icons/remove-search-query-icon.svg";
import { LocationWrap, InputField, ClearBtn, CitiesList, CitiesItem, NoCityAlert } from "./Location.styled"

export const Location = ({ location, clearField, cityQuery, onChange, filteredCities, onCityClick }) => {

	const clearBtnHandler = () => {
		clearField()
	}

	const changeHandler = e => {
		onChange(e)
	}

	const cityClickHandler = e => {
		if (e.target.nodeName === "LI") {
			onCityClick(e.target.textContent)
		}
	}


	return <LocationWrap>
		<Label>
			Location
			{location &&
				<>
					<InputField autoComplete="off" type="text" value={location} name="location" readOnly />
					<ClearBtn type="button" onClick={clearBtnHandler}><RemoveIcon /></ClearBtn>
				</>
			}
			{!location && <InputField name="city" islistopen={cityQuery}
				cities={filteredCities.length}
				autoComplete="off" type="text"
				onChange={changeHandler} placeholder="Start typing a city" />}
		</Label>
		{cityQuery && filteredCities.length > 0 &&
			<CitiesList onClick={cityClickHandler}>{filteredCities.map(({ _id, city, admin_name }) => {
				return <CitiesItem key={_id}>{city}, {admin_name}</CitiesItem>
			})}</CitiesList>}
		{filteredCities.length === 0 && <NoCityAlert>There isn't such a city. Choose another one.</NoCityAlert>}
	</LocationWrap>
}