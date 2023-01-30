// Libraries
import { Formik } from 'formik';
import * as Yup from 'yup';
import 'react-datetime/css/react-datetime.css';
import debounce from 'lodash.debounce';
import { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';

// Common components
import { ModalWindow } from '../CommonComponents/ModalWindow/ModalWindow';
import { NextBtn } from '../CommonButtons/NextBtn/NextBtn';
import { CancelBtn } from '../CommonButtons/CancelBtn/CancelBtn';

// The modal`s components
import { CategoryRadioBtns } from './CategoryRadioBtns/CategoryRadioBtns';
import { Date } from './Date/Date';
import { SexRadioBtns } from './SexRadioBtns/SexRadioBtns';
import { Location } from './Location/Location';
import { CommentField } from './CommentField/CommentField';
import { FileInput } from './FileInput/FileInput';
import { TextInput } from './TextInput/TextInput';
import { PriceField } from './PriceField/PriceField';

// Functions
import { addNotice } from '../../redux/notices/noticesOperations';
import { getCities } from '../../serveсes/getCities';

// Styles
import {
	Label,
	Error,
	Title,
	Subtitle,
	FormStyled,
	InputFieldWrap,
	BtnWrapper,
} from './ModalAddNotice.styled';

export const ModalAddNotice = ({ onClose }) => {
	const dispatch = useDispatch();

	const [category, setCategory] = useState('sell');
	const [birthdate, setBirthdate] = useState('');
	const [sex, setSex] = useState('');
	const [location, setLocation] = useState('');
	const [imgURL, setImgURL] = useState('');
	const [comments, setComments] = useState('');

	const [page, setPage] = useState(1);
	const [title, setTitle] = useState('');
	const [name, setName] = useState('');
	const [breed, setBreed] = useState('');
	const [preview, setPreview] = useState('');

	const [cityQuery, setCityQuery] = useState('');
	const [cities, setCities] = useState([]);
	const [filteredCities, setFilteredCities] = useState([]);
	const [showCities, setShowCities] = useState(false);

	const showListHandler = value => {
		setShowCities(value);
	};

	const radioBtnHandlder = (value, type) => {
		switch (type) {
			case 'category':
				setCategory(value);
				break;
			case 'sex':
				setSex(value);
				break;
			default:
				return;
		}
	};

	const birthdateHandler = value => {
		setBirthdate(value);
	};

	useEffect(() => {
		async function fetch() {
			try {
				const response = await getCities();

				if (response.length === 0) {
					throw new Error();
				}

				setCities(response);
			} catch (error) {
				console.log(error);
			}
		}
		fetch();

		return () => {
			debouncedChangeHandler.cancel();
		};
	}, []);

	useEffect(() => {
		const result = cities.filter(city => {
			return city.city.toLowerCase().includes(cityQuery.toLowerCase());
		});
		setFilteredCities(result);
	}, [cityQuery, cities]);

	const cityHandler = e => {
		setCityQuery(e.target.value);
	};

	const debouncedChangeHandler = useMemo(() => debounce(cityHandler, 300), []);

	const locationHandler = value => {
		setLocation(value);
		setCityQuery('');
	};

	const clearLocation = () => {
		setLocation('');
	};

	const validateTitle = value => {
		setTitle(value);
	};

	const validateName = value => {
		setName(value);
	};

	const validateBreed = value => {
		setBreed(value);
	};

	const validateComents = value => {
		setComments(value);
	};
	const nextPage = () => {
		setPage(prevState => prevState + 1);
	};

	const prevPage = () => {
		setPage(prevState => prevState - 1);
	};

	const inputFileHandler = file => {
		setImgURL(file);
		const reader = new FileReader();

		reader.onload = function (e) {
			setPreview(e.target.result);
		};

		reader.readAsDataURL(file);
	};

	const submitForm = values => {
		const { title, name, breed, price, comments } = values;

		const data = new FormData();

		data.append('title', title);
		data.append('category', category);
		data.append('comments', comments);

		price && data.append('price', price);
		name && data.append('name', name);
		birthdate && data.append('birthdate', birthdate);
		breed && data.append('breed', breed);
		sex && data.append('sex', sex);
		location && data.append('location', location);
		imgURL && data.append('imgURL', imgURL);

		dispatch(addNotice(data));
		onClose();
	};

	const initialValues = {
		title: '',
		name: '',
		breed: '',
		comments: '',
		price: '',
	};

	const schema = Yup.object().shape({
		title: Yup.string()
			.min(2, 'Too Short!')
			.max(48, 'Too Long!')
			.required('Required'),
		name: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!'),
		breed: Yup.string().min(2, 'Too Short!').max(24, 'Too Long!'),
		comments: Yup.string()
			.min(8, 'Too Short!')
			.max(120, 'Too Long!')
			.required('Required'),
		price: Yup.number().min(1, 'Price has to be more than 0').max(1000000, 'Price has to be less than 1 000 000'),
	});

	const stateMachine = {
		page_1: page === 1,
		page_2: page === 2,
		priceIsTurnedOn: category === 'sell',
		nextButtonIsAbled:
			title.length >= 2 &&
			title.length <= 48 &&
			(name.length === 0 || (name.length >= 2 && name.length <= 24)) &&
			(breed.length === 0 || (breed.length >= 2 && breed.length <= 16)),
		submitButtonIsAbled:
			(!cityQuery && location && comments.length >= 8 &&
				comments.length <= 120) ||
			(!cityQuery &&
				!location &&
				comments.length >= 8 &&
				comments.length <= 120),
	};

	return (
		<ModalWindow
			onClose={onClose}
			modalType={'addPet'}
			closeInnerList={showListHandler}
		>
			<Title>Add pet</Title>
			<Subtitle>Fill the fields below, please.</Subtitle>
			<Formik
				initialValues={initialValues}
				validationSchema={schema}
				onSubmit={values => submitForm(values)}
				validateOnChange
			>
				{({ errors, touched }) => (
					<FormStyled encType="multipart/form-data">
						{stateMachine.page_1 && (
							<>
								<CategoryRadioBtns
									onChange={radioBtnHandlder}
									category={category}
								/>
								<InputFieldWrap>
									<Label>
										<div>
											Title of ad <span>*</span>
										</div>
										<TextInput
											name="title"
											validate={validateTitle}
											placeholder="Type title"
										/>
										{touched.title && errors.title && (
											<Error>{errors.title}</Error>
										)}
									</Label>
									<Label>
										Pet's name
										<TextInput
											name="name"
											validate={validateName}
											placeholder="Type name pet"
										/>
										{touched.name && errors.name && (
											<Error>{errors.name}</Error>
										)}
									</Label>
									<Date
										inputProps={{
											readOnly: true,
											id: 'birth',
											placeholder: 'Choose date',
										}}
										value={birthdate}
										onChange={birthdateHandler}
										timeFormat={false}
										closeOnSelect={true}
										dateFormat="DD.MM.YYYY"
									/>
									<Label>
										Breed
										<TextInput
											name="breed"
											validate={validateBreed}
											placeholder="Type breed"
										/>
										{touched.breed && errors.breed && (
											<Error>{errors.breed}</Error>
										)}
									</Label>
								</InputFieldWrap>{' '}
							</>
						)}
						{stateMachine.page_2 && (
							<>
								<SexRadioBtns sex={sex} onChange={radioBtnHandlder} />
								<Location
									location={location}
									clearField={clearLocation}
									cityQuery={cityQuery}
									onChange={debouncedChangeHandler}
									filteredCities={filteredCities}
									onCityClick={locationHandler}
									onInputClick={showListHandler}
									showCities={showCities}
								/>
								{stateMachine.priceIsTurnedOn && (
									<PriceField
										name="price"
										placeholder="Type the price"
										required={true}
										min="1"
										touched={touched}
										errors={errors}
									/>
								)}
								<FileInput preview={preview} onAddImg={inputFileHandler} />
								<CommentField
									touched={touched}
									errors={errors}
									name="comments"
									validate={validateComents}
								/>
							</>
						)}
						<BtnWrapper>
							{stateMachine.page_1 && stateMachine.nextButtonIsAbled && <NextBtn onClick={nextPage} />}
							{stateMachine.page_1 && !stateMachine.nextButtonIsAbled && <NextBtn onClick={nextPage} disabled={true} />}
							{stateMachine.page_2 && stateMachine.submitButtonIsAbled && <NextBtn type="submit" text="Done" />}
							{stateMachine.page_2 && !stateMachine.submitButtonIsAbled && <NextBtn type="submit" text="Done" disabled={true} />}

							{stateMachine.page_1 ? (
								<CancelBtn onClick={onClose} />
							) : (
								<CancelBtn onClick={prevPage} text="Back" />
							)}
						</BtnWrapper>
					</FormStyled>
				)}
			</Formik>
		</ModalWindow>
	);
};
