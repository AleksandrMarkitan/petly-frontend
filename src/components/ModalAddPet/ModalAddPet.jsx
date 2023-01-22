//import { ModalWindow } from "../CommonComponents/ModalWindow/ModalWindow";
import { Formik, Form, Field } from "formik";
//import * as Yup from "yup";
//import { FieldsWrapper } from "./ModalAddPet.styled";
import { CancelBtn } from "../CommonButtons/CancelBtn/CancelBtn";
import { NextBtn } from "../CommonButtons/NextBtn/NextBtn";
import { useDispatch } from "react-redux";
import { addPet } from "../../redux/user/userOperations";

import { useRef, useState } from "react";
//import { InputHidden } from "./UserData.styled";
//import { UserDataItem } from "../UserDataItem/UserDataItem";

export const ModalAddPet = () => {
  const dispatch = useDispatch();
  //const [isModalOpen, setIsModalOpen] = useState(false);
  const [nextFormShow, setNextFormShow] = useState(false);
  const [backFormShow, setBackFormShow] = useState(true);
  const filePicker = useRef(null);
  //const [uploaded, setUploaded] = useState(null);

  //   const closeModal = () => {
  //     setIsModalOpen(!isModalOpen);
  //   };

  //   const token =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzkzMDc0Nzc4MDA3ZDg1NmVlZDhiOCIsImlhdCI6MTY3NDE2NDQ3NSwiZXhwIjoxNjc0OTkyNDc1fQ.pGsU7-qWoeUAQS8l3qzUqVLV876F1d48tpeoC8vwAfQ";

  /////////----------------------

  const initialValues = {
    name: "",
    date: "",
    breed: "",
    avatarURL: "",
    comments: "",
    //   comment: "",

    // toggle: true,
    // toggle: 'checked',
    //category: '',
  };
  const handleNext = (e) => {
    e.preventDefault(e);
    setBackFormShow(false);

    setNextFormShow(true);
    // setBackFormShow(false);
  };
  const handleBack = (e) => {
    e.preventDefault(e);
    setBackFormShow(true);
    setNextFormShow(false);
    console.log(888);
  };
  const handleSubmit = () => {
    console.log(777);
  };

  //---------PICTURE---------
  const [selectedFile, setSelectedFile] = useState(null);
  //const [selectedFile1, setSelectedFile1] = useState(null);

  //при изменении инпута добавляем выбранную картинку в селектедфайл
  const selectAvatar = (e) => {
    e.preventDefault();
    const data = new FormData();
    setSelectedFile(e.target.files[0]); // я это засунула в функцию handleAvatar
    console.log(selectedFile);
    console.log(data);
    console.log(e.target.files[0]);
  };

  // для отправки на бек
  const handleAvatar = async (e) => {
    const data = new FormData();
    data.append(
      "avatarURL",
      // e.target.files[0]
      selectedFile
    );

    //добавляет картинку на бек
    // const res = await fetch("Http://localhost:4000/api/v1/pets", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    //   body: data,
    // });

    // const result = await res.json();
    // setUploaded(result.avatarURL);
    // console.log(result.avatarURL);
    //dispatch(updateUserData(data));

    dispatch(addPet({ data }));
  };
  const handlePick = () => {
    filePicker.current.click();
  };

  const onAddPet = (name) => {
    const data = new FormData();
    data.append(
      "avatarURL",
      // e.target.files[0]
      selectedFile
    );
    dispatch(
      addPet({
        name: name.name,
        breed: name.breed,
        comments: name.comments,
        avatarURL: data,
      })
    );
    console.log(name.name);
    console.log(name.avatarURL);
    console.log(name.date);
    //handleAvatar();
    // { name: "oopppp", breed: "oooooo" }
  };

  return (
    <>
      {/* <button onClick={closeModal}>ВІДКРИТИ МОДАЛКУ</button>
      {isModalOpen && (
        <ModalWindow onClose={closeModal} modalType={"addPet"}> */}
      <Formik
        initialValues={initialValues}
        // validationSchema={schema}
        onSubmit={onAddPet}
        //     enableReinitialize
      >
        {/* <FieldArray> */}

        <Form autoComplete="off" encType="multipart/form-data">
          {/* <FieldsWrapper> */}
          {backFormShow && (
            <div>
              <label>
                Name pet
                <Field name="name" placeholder="name" />
                {/* <ErrorMessage name="name" component="span" /> */}
              </label>

              <label>
                Date of birth
                <Field name="date" />
                {/* <ErrorMessage name="date" component="span" /> */}
              </label>

              <label>
                Breed
                <Field name="breed" />
                {/* <ErrorMessage name="breed" component="span" /> */}
              </label>
              {/* </FieldsWrapper> */}
              <NextBtn handleBtn={handleNext}>Next</NextBtn>
              <CancelBtn>Cancel</CancelBtn>
            </div>
          )}
          {/* </Form> */}
          {/* )} */}
          {nextFormShow && (
            <div>
              <button type="button" onClick={handlePick}>
                Edit photo
              </button>
              {/* <InputHidden> */}
              <input
                type="file"
                name="avatarURL"
                // value={selectedFile}
                // onChange={handleAvatar}
                // ref={filePicker}
                onChange={selectAvatar}
              />
              {/* </InputHidden> */}
              <img src="" alt="avatar" />
              {/* <label>
                Date of birth
                <Field name="avatar" /> */}
              {/* <ErrorMessage name="date" component="span" /> */}
              {/* </label> */}

              <label>
                Comments
                <Field name="comments" />
                {/* <ErrorMessage name="breed" component="span" /> */}
              </label>
              <NextBtn handleBtn={handleSubmit}>Done</NextBtn>
              <CancelBtn type="button" handleBtn={handleBack}>
                Back
              </CancelBtn>
              <button type="submit">добавить</button>
            </div>
          )}
        </Form>
        {/* )} */}
        {/* </FieldArray> */}
      </Formik>
      {/* </ModalWindow> */}
      {/* )} */}
    </>
  );
};
