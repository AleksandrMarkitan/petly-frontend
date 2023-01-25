import { Formik } from "formik";
import * as Yup from 'yup';
import moment from 'moment';
import debounce from 'lodash.debounce';
import "react-datetime/css/react-datetime.css";
import { useEffect, useState, useMemo } from "react";
import { BsPlusLg } from "react-icons/bs";
import { ModalWindow } from "../CommonComponents/ModalWindow/ModalWindow";
import { ReactComponent as MaleIcon } from "../../icons/add_pet_modal/male.svg";
import { ReactComponent as FemaleIcon } from "../../icons/add_pet_modal/female.svg";
import { ReactComponent as RemoveIcon } from "../../icons/remove-search-query-icon.svg";
import { NextBtn } from "../CommonButtons/NextBtn/NextBtn";
import { getCities } from "../../serveсes/getCities";
import { useDispatch } from "react-redux";
import { addNotice } from "../../redux/notices/noticesOperations";
import { CancelBtn } from "../CommonButtons/CancelBtn/CancelBtn";
import { ClearBtn, Error, SubmitBtn, Title, Subtitle, FormStyled, RadioBtnWrap, LabelRadioBtn, InputRadio, InputFieldWrap, Label, InputField, BtnWrapper, SexRadioWrap, RadioSexLabel, LocationWrap, CitiesList, CitiesItem, InputFileWrap, InputFile, CommentWrap, Textarea, DateInput, PriceWrap } from "./ModalAddNotice.styled";

export const ModalAddNotice = ({ onClose }) => {
	const dispatch = useDispatch();

	const [category, setCategory] = useState("sell");
	const [birthdate, setBirthdate] = useState("");
	const [sex, setSex] = useState("");
	const [location, setLocation] = useState('');
	const [imgURL, setImgURL] = useState("");

	const [page, setPage] = useState(1);
	const [title, setTitle] = useState("");
	const [name, setName] = useState('');
	const [breed, setBreed] = useState('');
	const [preview, setPreview] = useState("");

	const [cityQuery, setCityQuery] = useState("");
	const [cities, setCities] = useState([]);
	const [filteredCities, setFilteredCities] = useState([]);

	const validDate = current => {
		return current.isBefore(moment()) && current.isAfter('1999-12-31', 'day');
	};

	useEffect(() => {
		async function fetch() {
			try {
				const response = await getCities();

				if (response.length === 0) {
					throw new Error();
				}

				setCities(response)

			}
			catch (error) {
				console.log(error);
			}
		}
		fetch();

		return () => {
			debouncedChangeHandler.cancel();
		}
	}, [])

	useEffect(() => {
		const result = cities.filter((city) => {
			return city.city.toLowerCase().includes(cityQuery.toLowerCase());
		});
		setFilteredCities(result)
	}, [cityQuery, cities])

	const cityHandler = (e) => {
		setCityQuery(e.target.value);
	}

	const debouncedChangeHandler = useMemo(
		() => debounce(cityHandler, 300)
		, []);

	const validateTitle = (value) => {
		setTitle(value)
	}

	const validateName = (value) => {
		setName(value)
	}

	const validateBreed = (value) => {
		setBreed(value)
	}

	const radioBtnHandlder = e => {
		switch (e.target.name) {
			case "category":
				setCategory(e.target.value);
				break;
			case "sex":
				setSex(e.target.value);
				break;
			default: return;
		}
	}

	const locationHandler = e => {
		if (e.target.nodeName === "LI") {
			setLocation(e.target.textContent);
			setCityQuery("");
		}
	}

	const nextPage = () => {
		setPage(prevState => prevState + 1)
	}

	const prevPage = () => {
		setPage(prevState => prevState - 1)
	}

	const inputFileHandler = e => {
		const file = e.target.files[0];

		setImgURL(file);
		const reader = new FileReader();

		reader.onload = function (e) {
			setPreview(e.target.result)
		};

		reader.readAsDataURL(file);
	}

	const birthdateHandler = e => {
		setBirthdate(e.format("DD.MM.YYYY"))
	}

	const submitForm = values => {
		const { title, name, breed, price, comments } = values;

		const data = new FormData();

		data.append("title", title)
		data.append("category", category)
		data.append("comments", comments)

		price && data.append("price", price)
		name && data.append("name", name)
		birthdate && data.append("birthdate", birthdate)
		breed && data.append("breed", breed)
		sex && data.append("sex", sex)
		location && data.append("location", location)
		imgURL && data.append("imgURL", imgURL)

		dispatch(addNotice(data))
		onClose();
	}

	const initialValues = {
		title: "",
		name: "",
		breed: "",
		comments: "",
		price: "",
		location: ""
	}

	const schema = Yup.object().shape({
		title: Yup.string()
			.min(2, 'Too Short!')
			.max(48, 'Too Long!')
			.required('Required'),
		name: Yup.string()
			.min(2, 'Too Short!')
			.max(16, 'Too Long!'),
		breed: Yup.string()
			.min(2, 'Too Short!')
			.max(24, 'Too Long!'),
		comments: Yup.string()
			.min(8, 'Too Short!')
			.max(120, 'Too Long!')
			.required('Required'),
		price: Yup.number()
			.min(1, "Price has to be more than 0")
	})

	const clearLocation = () => {
		setLocation("")
	}

	return <ModalWindow onClose={onClose} modalType={'addPet'}>
		<Title>Add pet</Title>
		<Subtitle>Fill the fields below, please.</Subtitle>
		<Formik initialValues={initialValues} validationSchema={schema} onSubmit={values => submitForm(values)} validateOnChange>
			{({ errors, touched }) => (
				<FormStyled encType="multipart/form-data">
					{page === 1 && <>
						<RadioBtnWrap>
							<LabelRadioBtn category={category} value={"lost-found"}>
								<InputRadio type="radio" name="category" value="lost-found" onChange={radioBtnHandlder} />
								lost-found
							</LabelRadioBtn>
							<LabelRadioBtn category={category} value={"in-good-hands"}>
								<InputRadio type="radio" name="category" value="in-good-hands" onChange={radioBtnHandlder} />
								in good hands
							</LabelRadioBtn>
							<LabelRadioBtn category={category} value={"sell"}>
								<InputRadio type="radio" name="category" value="sell" onChange={radioBtnHandlder} />
								sell
							</LabelRadioBtn>
						</RadioBtnWrap>
						<InputFieldWrap>
							<Label>
								<div>Title of ad <span>*</span></div>
								<InputField type="text" placeholder="Type title" name="title" validate={validateTitle} />
								{touched.title && errors.title && <Error>{errors.title}</Error>}
							</Label>
							<Label>
								Pet's name
								<InputField type="text" placeholder="Type name pet" name="name" validate={validateName} />
								{touched.name && errors.name && <Error>{errors.name}</Error>}
							</Label>
							<Label htmlFor="birth">
								Date of birth
							</Label>
							<DateInput isValidDate={validDate} inputProps={{ readOnly: true, id: "birth", placeholder: "Choose date" }} value={birthdate} onChange={birthdateHandler} timeFormat={false} closeOnSelect={true} dateFormat="DD.MM.YYYY" />
							<Label>
								Breed
								<InputField type="text" placeholder="Type breed" name="breed" validate={validateBreed} />
								{touched.breed && errors.breed && <Error>{errors.breed}</Error>}
							</Label>
						</InputFieldWrap> </>}
					{page === 2 && <>
						<Label>The sex</Label>
						<SexRadioWrap>
							<RadioSexLabel sex={sex} value={"male"}>
								<InputRadio type="radio" name="sex" value="male" onChange={radioBtnHandlder} />
								<MaleIcon />
								Male
							</RadioSexLabel>
							<RadioSexLabel sex={sex} value={"female"}>
								<InputRadio type="radio" name="sex" value="female" onChange={radioBtnHandlder} />
								<FemaleIcon />
								Female
							</RadioSexLabel>
						</SexRadioWrap>
						<LocationWrap>
							<Label>
								Location
								{location &&
									<>
										<InputField autoComplete="off" type="text" value={location} name="location" placeholder="Type city" />
										<ClearBtn type="button" onClick={clearLocation}><RemoveIcon /></ClearBtn>
									</>
								}
								{!location && <InputField islistopen={cityQuery} autoComplete="off" type="text" onChange={debouncedChangeHandler} name="city" placeholder="Type city" />}
							</Label>
							{cityQuery && filteredCities.length > 0 && <CitiesList onClick={locationHandler}>{filteredCities.map(({ _id, city, admin_name }) => {
								return <CitiesItem key={_id}>{city}, {admin_name}</CitiesItem>
							})}</CitiesList>}
						</LocationWrap>
						{category === "sell" && <PriceWrap>
							<Label>
								<div>Price <span>*</span></div>
								<InputField name="price" type="text" placeholder="Type the price" required />
								{touched.price && errors.price && <Error>{errors.price}</Error>}
							</Label>
						</PriceWrap>}
						<InputFileWrap>
							<Label>
								Load the pet’s image
								{!preview && <span><BsPlusLg /></span>}
								{preview && <img src={preview} alt="Previev" />}
								<InputFile type="file" accept="image/jpeg, image/png" onChange={inputFileHandler} multiple />
							</Label>
						</InputFileWrap>
						<CommentWrap>
							<Label>
								<div>Comments <span>*</span></div>
								<InputField placeholder="Type comment" name="comments" />
								{touched.comments && errors.comments && <Error>{errors.comments}</Error>}
							</Label>
						</CommentWrap>
					</>}
					<BtnWrapper>
						{page === 1 ?
							((title.length >= 2 && title.length <= 48) && (name.length === 0 || (name.length >= 2 && name.length <= 24)) && (breed.length === 0 || (breed.length >= 2 && breed.length <= 16)) ? <NextBtn onClick={nextPage} /> : <NextBtn onClick={nextPage} disabled={true} />)
							:
							<SubmitBtn type="submit">Done</SubmitBtn>
						}
						{page === 1 ?
							<CancelBtn onClick={onClose} />
							:
							<CancelBtn onClick={prevPage} text="Back" />
						}
					</BtnWrapper>
				</FormStyled>
			)}
		</Formik>
	</ModalWindow>
}