import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { addPet } from '../../redux/user/userOperations';
import { CancelBtn } from '../CommonButtons/CancelBtn/CancelBtn';
import { NextBtn } from '../CommonButtons/NextBtn/NextBtn';
import { CommentField } from '../ModalAddPet/CommentField/CommentField';

import {
	InputFileWrap,
	InputFile,
	Label,
	BtnWrapper,
	FormStyled,
	Error,
	InputField,
	Title,
	InputFieldWrap,
	Calendar,
	ErrorDate,
	ErrorAvatar,
} from './ModalAddPet.styled';

export const ModalAddPet = ({ onClose }) => {
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [birthdate, setBirthdate] = useState('');
	const [breed, setBreed] = useState('');
	const [preview, setPreview] = useState('');
	const [comments, setComments] = useState('');

	const [selectedFile, setSelectedFile] = useState(null);
	const [page, setPage] = useState(1);
	const [inputDirty, setInputDirty] = useState(false);
	const [inputDirtyFile, setInputDirtyFile] = useState(false);
	const [inputDateError, setInputDateError] = useState(
		'Date of birth is required'
	);

	const inputAvatarError = 'Photo is required';
	const nameBreedRegexp = /^[A-zА-я-іІїЇєЄ\s]+$/;

	const validDate = current => {
		return current.isBefore(new Date()) && current.isAfter('1969-12-31', 'day');
	};

	const validateName = value => {
		setName(value);
	};
	const validateBreed = value => {
		setBreed(value);
	};
	const validateComments = value => {
		setComments(value);
	};

	const nextPage = () => {
		setPage(prevState => prevState + 1);
	};

	const prevPage = () => {
		setPage(prevState => prevState - 1);
	};

	const inputFileHandler = e => {
		const file = e.target.files[0];

		setSelectedFile(file);
		const reader = new FileReader();

		reader.onload = function (e) {
			setPreview(e.target.result);
		};

		reader.readAsDataURL(file);
	};

	const birthdateHandler = e => {
		setBirthdate(e.format('DD.MM.YYYY'));
		setInputDateError('');
	};

	const blurHandler = () => {
		setInputDirty(true);
	};

	const blurHandlerFile = () => {
		setInputDirtyFile(true);
	};

	const initialValues = {
		name: '',
		breed: '',
		avatarURL: {},
		comments: '',
	};

	const schema = Yup.object().shape({
		name: Yup.string()
			.min(2, 'Name must contain at least 2 symbol')
			.max(16, 'Name must contain no more than 16 symbols')
			.matches(nameBreedRegexp, 'Please, enter only letters')
			.required('Name is required'),
		breed: Yup.string()
			.min(2, 'Breed must contain at least 2 symbol')
			.max(16, 'Breed must contain no more than 16 symbols')
			.matches(nameBreedRegexp, 'Please, enter only letters')
			.required('Breed is required'),
		comments: Yup.string()
			.min(8, 'Comment must contain at least 8 symbol')
			.max(120, 'Comment must contain no more than 120 symbols')
			.required('Comment is required'),
	});

	const onAddPet = value => {
		const { name, breed, comments } = value;

		const formData = new FormData();

		formData.append('avatarURL', selectedFile);
		formData.append('name', name);
		formData.append('date', birthdate);
		formData.append('breed', breed);
		formData.append('comments', comments);

		dispatch(addPet(formData));
		onClose();
	};

	const stateMachine = {
		page_1: page === 1,
		page_2: page === 2,
		nextButtonIsAbled:
			name.length >= 2 &&
			name.length <= 16 &&
			breed.length >= 2 &&
			breed.length <= 16 &&
			birthdate,
		submitButtonIsAbled:
			preview && comments.length >= 8 && comments.length <= 120,
		avatarErrorIsShown: !preview && inputDirtyFile,
	};

	return (
		<>
			<Title>Add pet</Title>
			<Formik
				initialValues={initialValues}
				validationSchema={schema}
				onSubmit={values => onAddPet(values)}
				validateOnChange
			>
				{({ errors, touched }) => (
					<FormStyled encType="multipart/form-data">
						{page === 1 && (
							<>
								<InputFieldWrap>
									<Label>
										Pet's name
										<InputField
											type="text"
											placeholder="Type name pet"
											name="name"
											validate={validateName}
										/>
										{touched.name && errors.name && (
											<Error>{errors.name}</Error>
										)}
									</Label>
									<Label htmlFor="birth">Date of birth</Label>
									<Calendar
										inputProps={{
											readOnly: true,
											id: 'birth',
											placeholder: 'Type date of birth',
											required: true,
											onBlur: blurHandler,
										}}
										value={birthdate}
										onChange={birthdateHandler}
										timeFormat={false}
										closeOnSelect={true}
										dateFormat="DD.MM.YYYY"
										isValidDate={validDate}
									/>
									{inputDirty && <ErrorDate>{inputDateError}</ErrorDate>}

									<Label>
										Breed
										<InputField
											type="text"
											placeholder="Type breed"
											name="breed"
											validate={validateBreed}
										/>
										{touched.breed && errors.breed && (
											<Error>{errors.breed}</Error>
										)}
									</Label>
								</InputFieldWrap>
							</>
						)}

						{page === 2 && (
							<>
								<InputFileWrap>
									<Label>
										Add photo and some comments
										{!preview && (
											<span>
												<BsPlusLg />
											</span>
										)}
										{preview && <img src={preview} alt="Previev" />}
										<InputFile
											type="file"
											accept="image/jpeg, image/png"
											onChange={inputFileHandler}
											onClick={blurHandlerFile}
										/>
										{stateMachine.avatarErrorIsShown && <ErrorAvatar>{inputAvatarError}</ErrorAvatar>}
									</Label>
								</InputFileWrap>
								<CommentField
									touched={touched}
									errors={errors}
									name="comments"
									validate={validateComments}
								/>
							</>
						)}
						<BtnWrapper>
							{stateMachine.page_1 && stateMachine.nextButtonIsAbled && (
								<NextBtn onClick={nextPage} />
							)}
							{stateMachine.page_1 && !stateMachine.nextButtonIsAbled && (
								<NextBtn onClick={nextPage} disabled={true} />
							)}
							{stateMachine.page_2 && stateMachine.submitButtonIsAbled && (
								<NextBtn type="submit" text="Done" />
							)}
							{stateMachine.page_2 && !stateMachine.submitButtonIsAbled && (
								<NextBtn type="submit" text="Done" disabled={true} />
							)}

							{stateMachine.page_1 ? (
								<CancelBtn onClick={onClose} />
							) : (
								<CancelBtn onClick={prevPage} text="Back" />
							)}
						</BtnWrapper>
					</FormStyled>
				)}
			</Formik>
		</>
	);
};

ModalAddPet.propTypes = {
	onClose: PropTypes.func.isRequired,
};
