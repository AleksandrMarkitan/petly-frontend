import { Formik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { CancelBtn } from '../CommonButtons/CancelBtn/CancelBtn';
import { NextBtn } from '../CommonButtons/NextBtn/NextBtn';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addPet } from '../../redux/user/userOperations';
import { BsPlusLg } from 'react-icons/bs';
import {
  InputFileWrap,
  InputFile,
  FieldsWrapper,
  Label,
  BtnWrapper,
  FormStyled,
  SubmitBtn,
  Error,
  InputField,
  CommentWrap,
  Textarea,
  Title,
  InputFieldWrap,
  Calendar,
} from './ModalAddPet.styled';

export const ModalAddPet = ({ onClose }) => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [imgURL, setImgURL] = useState('');
  const [preview, setPreview] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const nameBreedRegexp = /^[a-zA-Z]{2,16}$/;
  const commentRegexp = /^[A-Za-z0-9!?#$%^&_\-*]{8,120}$/;

  const validDate = current => {
    return current.isBefore(moment()) && current.isAfter('1999-12-31', 'day');
  };

  const validateName = value => {
    setName(value);
  };
  const validateBreed = value => {
    setBreed(value);
  };
  const nextPage = () => {
    setPage(prevState => prevState + 1);
  };

  const prevPage = () => {
    setPage(prevState => prevState - 1);
  };

  const inputFileHandler = e => {
    const file = e.target.files[0];

    setImgURL(file);
    const reader = new FileReader();

    reader.onload = function (e) {
      setPreview(e.target.result);
    };

    reader.readAsDataURL(file);
    setSelectedFile(file);
  };

  const birthdateHandler = e => {
    setBirthdate(e.format('DD.MM.YYYY'));
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
      .matches(nameBreedRegexp, 'Please, enter a valid name')
      .required('Name is required'),
    breed: Yup.string()
      .min(2, 'Breed must contain at least 2 symbol')
      .max(16, 'Breed must contain no more than 16 symbols')
      .matches(nameBreedRegexp, 'Please, enter a valid breed')
      .required('Breed is required'),
    comments: Yup.string()
      .min(8, 'Comment must contain at least 8 symbol')
      .max(120, 'Comment must contain no more than 120 symbols')
      .matches(commentRegexp, 'Please, enter a valid comment')
      .required('Comment is required'),
  });

  const onAddPet = value => {
    const { name, breed, comments } = value;

    const formData = new FormData();

    selectedFile && formData.append('avatarURL', selectedFile);
    name && formData.append('name', name);
    birthdate && formData.append('date', birthdate);
    breed && formData.append('breed', breed);
    comments && formData.append('comments', comments);

    dispatch(addPet(formData));
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
                      placeholder: 'Choose date',
                    }}
                    value={birthdate}
                    onChange={birthdateHandler}
                    timeFormat={false}
                    closeOnSelect={true}
                    dateFormat="DD.MM.YYYY"
                    //input={true}
                    //open={false}
                    isValidDate={validDate}
                  />
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
                    />
                  </Label>
                </InputFileWrap>

                <CommentWrap>
                  <Label>
                    <div>Comments</div>
                    <Textarea placeholder="Type comment" name="comments" />
                    {touched.comments && errors.comments && (
                      <Error>{errors.comments}</Error>
                    )}
                  </Label>
                </CommentWrap>
              </>
            )}
            <BtnWrapper>
              {page === 1 ? (
                (name.length >= 2) & (breed.length >= 2) ? (
                  <NextBtn onClick={nextPage} />
                ) : (
                  <NextBtn onClick={nextPage} disabled={true} />
                )
              ) : (
                <SubmitBtn type="submit">Done</SubmitBtn>
              )}
              {page === 1 ? (
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
