import { Label } from "../ModalAddNotice.styled"
import { ReactComponent as RemoveIcon } from "../../../icons/remove-search-query-icon.svg";
import { LocationWrap, InputField, ClearBtn, CitiesList, CitiesItem, NoCityAlert } from "./Location.styled"

export const Location = ({ location, clearField, cityQuery, onChange, filteredCities, onCityClick, onInputClick, showCities }) => {

	const clearBtnHandler = () => {
		clearField()
	}

	const changeHandler = e => {
		onChange(e)
	}

	const cityClickHandler = e => {
		if (e.target.nodeName === "LI") {
			onCityClick(e.target.textContent)
			onInputClick(false)
		}
	}

	const inputClickHandler = () => {
		onInputClick(true)
	}

	const stateMachine = {
		showSearchCityInput: !location,
		showSelectedCity: location,
		showCitiesList: ((cityQuery && filteredCities.length > 0) || (showCities && !cityQuery)),
		showNoCityAlert: filteredCities.length === 0,
	}

	return <LocationWrap>
		<Label>
			Location
			{stateMachine.showSelectedCity &&
				<>
					<InputField autoComplete="off" type="text" value={location} name="location" readOnly />
					<ClearBtn type="button" onClick={clearBtnHandler}><RemoveIcon /></ClearBtn>
				</>
			}
			{stateMachine.showSearchCityInput && <InputField name="city" islistopen={cityQuery || showCities}
				cities={filteredCities.length}
				autoComplete="off" type="text"
				onChange={changeHandler} placeholder="Start typing a city"
				onClick={inputClickHandler}
			/>}
		</Label>
		{stateMachine.showCitiesList &&
			<CitiesList onClick={cityClickHandler}>{filteredCities.map(({ _id, city, admin_name }) => {
				return <CitiesItem key={_id}>{city}, {admin_name}</CitiesItem>
			})}</CitiesList>}
		{stateMachine.showNoCityAlert && <NoCityAlert>There isn't such a city. Choose another one.</NoCityAlert>}
	</LocationWrap>
}