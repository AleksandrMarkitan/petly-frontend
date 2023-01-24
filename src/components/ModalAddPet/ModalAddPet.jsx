//import { ModalWindow } from "../CommonComponents/ModalWindow/ModalWindow";

import { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ModalWindow } from '../CommonComponents/ModalWindow/ModalWindow';
import { CancelBtn } from '../CommonButtons/CancelBtn/CancelBtn';
import { NextBtn } from '../CommonButtons/NextBtn/NextBtn';
import { useDispatch } from 'react-redux';
//import { addPet } from "../../redux/user/userOperations";

import { useRef, useState } from 'react';
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
  DateInput,
  InputFieldWrap,
} from './ModalAddPet.styled';
import { getCities } from '../../serveсes/getCities';

//import { Label } from '../AuthForms/Forms.styled';
//import { InputHidden } from "./UserData.styled";
//import { UserDataItem } from "../UserDataItem/UserDataItem";

export const ModalAddPet = ({ onClose }) => {
  const dispatch = useDispatch();

  // const [nextFormShow, setNextFormShow] = useState(false);
  // const [backFormShow, setBackFormShow] = useState(true);
  // const filePicker = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imgURL, setImgURL] = useState('');
  const [preview, setPreview] = useState('');
  const [date, setDate] = useState('');
  const [sex, setSex] = useState('');
  const [location, setLocation] = useState('');

  const [page, setPage] = useState(1);
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [showCitiesList, setShowCitiesList] = useState(false);

  const validateTitle = value => {
    setTitle(value);
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
    setDate(e.format('DD.MM.YYYY'));
  };

  const initialValues = {
    name: '',
    // date: '',
    breed: '',
    avatarURL: {},
    comments: '',
  };

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(16, 'Too Long!')
      .required('Required'),
    breed: Yup.string()
      .min(2, 'Too Short!')
      .max(24, 'Too Long!')
      .required('Required'),
    comments: Yup.string()
      .min(8, 'Too Short!')
      .max(120, 'Too Long!')
      .required('Required'),
  });
  // const handleNext = e => {
  //   e.preventDefault(e);
  //   setBackFormShow(false);

  //   setNextFormShow(true);
  //   // setBackFormShow(false);
  // };
  // const handleBack = e => {
  //   e.preventDefault(e);
  //   setBackFormShow(true);
  //   setNextFormShow(false);
  //   console.log(888);
  // };
  // const handleSubmit = () => {
  //   console.log(777);
  // };

  //---------PICTURE---------

  //const [selectedFile1, setSelectedFile1] = useState(null);

  //при изменении инпута добавляем выбранную картинку в селектедфайл
  // const selectAvatar = e => {
  //   e.preventDefault();
  //   const data = new FormData();
  //   setSelectedFile(e.target.files[0]); // я это засунула в функцию handleAvatar
  //   //inputFileHandler(); //Anna
  // };

  // для отправки на бек
  // const handleAvatar = async e => {
  //   const data = new FormData();
  //   data.append(
  //     'avatarURL',
  //     // e.target.files[0]
  //     selectedFile
  //   );

  //   dispatch(addPet(data));
  // };
  // const handlePick = () => {
  //   filePicker.current.click();
  // };

  const onAddPet = value => {
    const { name, breed, comments } = value;

    const formData = new FormData();

    selectedFile && formData.append('avatarURL', selectedFile);
    name && formData.append('name', name);
    formData.append('date', date);
    breed && formData.append('breed', breed);
    comments && formData.append('comments', comments);
    console.log(date);
    dispatch(addPet(formData));
    //onClose();
  };

  return (
    <ModalWindow onClose={onClose} modalType={'addPet'}>
      <Title>Add pet</Title>
      {/* <button onClick={closeModal}>ВІДКРИТИ МОДАЛКУ</button>
      {isModalOpen && (
        <ModalWindow onClose={closeModal} modalType={"addPet"}> */}
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={values => onAddPet(values)}
        validateOnChange
        //     enableReinitialize
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
                    />
                    {touched.name && errors.name && (
                      <Error>{errors.name}</Error>
                    )}
                  </Label>

                  {/* <label>
                    Name pet
                    <Field name="name" placeholder="name" />
                  </label> */}
                  {/* <label>
                    Date of birth
                    <Field name="date" />
                  </label>
                  <label>
                    Breed
                    <Field name="breed" />
                  </label> */}
                  {/* </FieldsWrapper> */}
                  {/* <NextBtn handleBtn={handleNext}>Next</NextBtn>
              <CancelBtn>Cancel</CancelBtn> */}
                  <Label htmlFor="date">Date of birth</Label>
                  <DateInput
                    inputProps={{
                      readOnly: true,
                      id: 'date',
                      placeholder: 'Choose date',
                      name: 'date',
                    }}
                    value={date}
                    onChange={birthdateHandler}
                    timeFormat={false}
                    closeOnSelect={true}
                    dateFormat="DD.MM.YYYY"
                  />
                  <Label>
                    Breed
                    <InputField
                      type="text"
                      placeholder="Type breed"
                      name="breed"
                    />
                    {touched.breed && errors.breed && (
                      <Error>{errors.breed}</Error>
                    )}
                  </Label>
                </InputFieldWrap>
              </>
            )}

            {/* </Form> */}
            {/* )} */}
            {/* {nextFormShow && ( */}
            {/* <div>
            <button type="button" onClick={handlePick}>
              Edit photo
            </button> */}
            {/* <InputHidden> */}
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
                    <InputFile type="file" onChange={inputFileHandler} />
                  </Label>
                </InputFileWrap>
                {/* <input
              type="file"
              name="avatarURL"
              onChange={inputFileHandler}
              // ref={filePicker}
              // onChange={selectAvatar}
            /> */}
                {/* </InputHidden> */}
                {/* <img src="" alt="avatar" />
          {!preview && (
            <span>
              <BsPlusLg />
            </span>
          )}
          {preview && <img src={preview} alt="Previev" />} */}

                {/* <label>
                Date of birth
                <Field name="avatar" /> */}
                {/* <ErrorMessage name="date" component="span" /> */}
                {/* </label> */}

                <CommentWrap>
                  <Label>
                    <div>
                      Comments <span>*</span>
                    </div>
                    <InputField placeholder="Type comment" name="comments" />
                    {touched.comments && errors.comments && (
                      <Error>{errors.comments}</Error>
                    )}
                  </Label>
                </CommentWrap>
              </>
            )}
            <BtnWrapper>
              {page === 1 ? (
                // title.length >= 2 ? (
                <NextBtn onClick={nextPage} />
              ) : (
                <NextBtn onClick={nextPage} disabled={true} />
                // )
                // ) : (
                // <SubmitBtn type="submit">Done</SubmitBtn>
              )}
              {page === 1 ? (
                <CancelBtn onClick={onClose} />
              ) : (
                <CancelBtn onClick={prevPage} text="Back" />
              )}
            </BtnWrapper>
            {/* <NextBtn handleBtn={handleSubmit}>Done</NextBtn>
          <CancelBtn type="button" handleBtn={handleBack}>
            Back
          </CancelBtn>
          <button type="submit">добавить</button> */}
            {/* </div> */}
            {/* )} */}
          </FormStyled>
        )}
        {/* </FieldArray> */}
      </Formik>
      {/* </ModalWindow> */}
      {/* )} */}
    </ModalWindow>
  );
};
