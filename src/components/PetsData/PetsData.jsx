import { AddBtn } from "../CommonButtons/AddBtn/AddBtn";
import { PetsList } from "../PetsList/PetsList";
import { ModalWindow } from "../CommonComponents/ModalWindow/ModalWindow";
import { useState } from "react";
import { ModalAddPet } from "../ModalAddPet/ModalAddPet";

import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { FieldsWrapper } from "./ModalAddPet.styled";
import { CancelBtn } from "../CommonButtons/CancelBtn/CancelBtn";
import { NextBtn } from "../CommonButtons/NextBtn/NextBtn";

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUserPets } from "../../redux/user/userOperations";
// import { selectUser } from "../../redux/user/userSelectors";

export const PetsData = ({ pets }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [nextFormShow, setNextFormShow] = useState(false);
  const [backFormShow, setBackFormShow] = useState(true);
  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  //   const pets = useSelector(selectUser);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(fetchUserPets());
  //   }, [dispatch]);
  //   console.log(pets);

  /////////----------------------
  const handleNext = () => {
    setNextFormShow(true);
    setBackFormShow(false);
  };
  const handleBack = () => {
    setBackFormShow(false);
    setBackFormShow(true);
  };
  const handleSubmit = () => {
    console.log(777);
  };

  return (
    <>
      <AddBtn closeModal={closeModal} />
      <button onClick={closeModal}>ВІДКРИТИ МОДАЛКУ</button>
      {isModalOpen && (
        <ModalWindow onClose={closeModal} modalType={"addPet"}>
          {/* <div>jjjjj</div>
          <NextBtn onClick={handleSubmit}>Done</NextBtn>
          <CancelBtn onClick={handleBack}>Back</CancelBtn> */}
          <ModalAddPet />
        </ModalWindow>
      )}
      {/* <ModalAddPet /> */}
      {/* <button onClick={closeModal}>ВІДКРИТИ МОДАЛКУ</button> */}
      {/* {isModalOpen && <ModalAddPet />} */}

      {pets && <PetsList pets={pets} />}
    </>
  );
};
