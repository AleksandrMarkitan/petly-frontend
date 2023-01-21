import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import "react-datetime/css/react-datetime.css";
import { ModalWindow } from "../CommonComponents/ModalWindow/ModalWindow";
import { ReactComponent as MaleIcon } from "../../icons/add_pet_modal/male.svg";
import { ReactComponent as FemaleIcon } from "../../icons/add_pet_modal/female.svg";
import { NextBtn } from "../CommonButtons/NextBtn/NextBtn";
import { CancelBtn } from "../CommonButtons/CancelBtn/CancelBtn";
import { Title, Subtitle, Form, RadioBtnWrap, LabelRadioBtn, InputRadio, InputFieldWrap, Label, InputField, BtnWrapper, SexRadioWrap, RadioSexLabel, LocationWrap, CitiesList, CitiesItem, InputFileWrap, InputFile, CommentWrap, Textarea, DateInput, PriceWrap } from "./ModalAddNotice.styled";

import { getCities } from "../../serveсes/getCities";

export const ModalAddNotice = ({ onClose }) => {
	const [category, setCategory] = useState("sell");
	const [title, setTitle] = useState("");
	const [name, setName] = useState('');
	const [birthdate, setBirthdate] = useState("");
	const [breed, setBreed] = useState('');
	const [sex, setSex] = useState("")
	const [location, setLocation] = useState('');
	const [city, setCity] = useState('')
	const [imgURL, setImgURL] = useState("");
	const [comments, setComment] = useState("");
	const [price, setPrice] = useState("");

	const [cities, setCities] = useState([]);
	const [page, setPage] = useState(1);
	const [showCitiesList, setShowCitiesList] = useState(false);

	const [preview, setPreview] = useState("");

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
			case "title":
				setTitle(e.target.value);
				break;
			case "name":
				setName(e.target.value);
				break;
			case "breed":
				setBreed(e.target.value);
				break;
			case "city":
				setCity(e.target.value);
				break;
			case "comment":
				setComment(e.target.value);
				break;
			case "price":
				setPrice(e.target.value);
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

		setImgURL(file)
		const reader = new FileReader();

		reader.onload = function (e) {
			setPreview(e.target.result)
		};

		reader.readAsDataURL(file);
	}

	const birthdateHandler = e => {
		setBirthdate(e.format("DD.MM.YYYY"))
	}

	const submitForm = () => {

	}

	return <ModalWindow onClose={onClose} modalType={'addPet'}>
		<Title>Add pet</Title>
		<Subtitle>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </Subtitle>
		<Form enctype="multipart/form-data">
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
						Title of ad*
						<InputField type="text" value={title} onChange={textInputHandler} placeholder="Type title" name="title" />
					</Label>
					<Label>
						Name pet
						<InputField type="text" value={name} onChange={textInputHandler} placeholder="Type name pet" name="name" />
					</Label>
					<Label htmlFor="birth">
						Date of birth
					</Label>
					<DateInput inputProps={{ readOnly: true, id: "birth", placeholder: "Choose date" }} value={birthdate} onChange={birthdateHandler} timeFormat={false} closeOnSelect={true} dateFormat="DD.MM.YYYY" />
					<Label>
						Breed
						<InputField type="text" value={breed} onChange={textInputHandler} placeholder="Type breed" name="breed" />
					</Label>
				</InputFieldWrap> </>}
			{page === 2 && <><Label>The sex*:</Label>
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
						Location*:
						<InputField onClick={showListHandler} type="text" value={city} onChange={textInputHandler} name="city" placeholder="Type city" />
					</Label>
					{showCitiesList && <CitiesList onClick={locationHandler}>{cities.map(({ _id, city, admin_name }) => {
						return <CitiesItem key={_id}>{city}, {admin_name}</CitiesItem>
					})}</CitiesList>}
				</LocationWrap>
				{category === "sell" && <PriceWrap>
					<Label>
						Price*
						<InputField name="price" type="text" value={price} onChange={textInputHandler} placeholder="Type the price" />
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
						Comments
						<Textarea name="comment" value={comments} onChange={textInputHandler} placeholder="Type a comment"></Textarea>
					</Label>
				</CommentWrap></>}
			<BtnWrapper>
				{page === 1 ?
					<NextBtn onClick={nextPage} />
					:
					<NextBtn onClick={submitForm} type="submit" text="Done" />
				}
				{page === 1 ?
					<CancelBtn onClick={onClose} />
					:
					<CancelBtn onClick={prevPage} text="Back" />
				}
			</BtnWrapper>
		</Form>
	</ModalWindow>
}