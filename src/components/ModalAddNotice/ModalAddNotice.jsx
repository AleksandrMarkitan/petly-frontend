import { Formik } from "formik";
import * as Yup from 'yup';
import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import "react-datetime/css/react-datetime.css";
import { ModalWindow } from "../CommonComponents/ModalWindow/ModalWindow";
import { ReactComponent as MaleIcon } from "../../icons/add_pet_modal/male.svg";
import { ReactComponent as FemaleIcon } from "../../icons/add_pet_modal/female.svg";
import { NextBtn } from "../CommonButtons/NextBtn/NextBtn";
import { CancelBtn } from "../CommonButtons/CancelBtn/CancelBtn";
import { Error, SubmitBtn, Title, Subtitle, FormStyled, RadioBtnWrap, LabelRadioBtn, InputRadio, InputFieldWrap, Label, InputField, BtnWrapper, SexRadioWrap, RadioSexLabel, LocationWrap, CitiesList, CitiesItem, InputFileWrap, InputFile, CommentWrap, Textarea, DateInput, PriceWrap } from "./ModalAddNotice.styled";
import { getCities } from "../../serveсes/getCities";
import { useDispatch } from "react-redux";
import { addNotice } from "../../redux/notices/noticesOperations";

export const ModalAddNotice = ({ onClose }) => {
	const dispatch = useDispatch();

	const [category, setCategory] = useState("sell");
	const [birthdate, setBirthdate] = useState("");
	const [sex, setSex] = useState("");
	const [location, setLocation] = useState('');
	const [imgURL, setImgURL] = useState("");

	const [page, setPage] = useState(1);
	const [title, setTitle] = useState("");
	const [city, setCity] = useState('')
	const [cities, setCities] = useState([]);
	const [showCitiesList, setShowCitiesList] = useState(false);
	const [preview, setPreview] = useState("");

	const validateTitle = (value) => {
		setTitle(value)
	}

	useEffect(() => {
		const query = city.split(',')[0].toLowerCase();

		async function fetch() {
			try {
				const response = await getCities();

				if (response.length === 0) {
					throw new Error();
				}

				const foundCities = response.filter(city => city.city.toLowerCase().includes(query))

				setCities(foundCities)

			}
			catch (error) {
				console.log(error);
			}
		}
		fetch()
	}, [city])

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

	const textInputHandler = e => {
		switch (e.target.name) {
			case "city":
				setCity(e.target.value);
				break;
			default: return;
		}
	}

	const locationHandler = e => {
		if (e.target.nodeName === "LI") {
			setLocation(e.target.textContent);
			setCity(e.target.textContent);
			setShowCitiesList(!showCitiesList);
		}
	}

	const showListHandler = () => {
		setShowCitiesList(!showCitiesList)
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
		data.append("price", price)
		data.append("comments", comments)

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
								<InputField type="text" placeholder="Type name pet" name="name" />
								{touched.name && errors.name && <Error>{errors.name}</Error>}
							</Label>
							<Label htmlFor="birth">
								Date of birth
							</Label>
							<DateInput inputProps={{ readOnly: true, id: "birth", placeholder: "Choose date" }} value={birthdate} onChange={birthdateHandler} timeFormat={false} closeOnSelect={true} dateFormat="DD.MM.YYYY" />
							<Label>
								Breed
								<InputField type="text" placeholder="Type breed" name="breed" />
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
								<InputField onClick={showListHandler} type="text" value={city} onChange={textInputHandler} name="city" placeholder="Type city" />
							</Label>
							{showCitiesList && <CitiesList onClick={locationHandler}>{cities.map(({ _id, city, admin_name }) => {
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
								<InputFile type="file" onChange={inputFileHandler} multiple />
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
							(title.length >= 2 ? <NextBtn onClick={nextPage} /> : <NextBtn onClick={nextPage} disabled={true} />)
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