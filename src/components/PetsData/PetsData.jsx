import { AddBtn } from "../CommonButtons/AddBtn/AddBtn";
import { PetsList } from "../PetsList/PetsList";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUserPets } from "../../redux/user/userOperations";
// import { selectUser } from "../../redux/user/userSelectors";

export const PetsData = ({ pets }) => {
  //   const pets = useSelector(selectUser);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(fetchUserPets());
  //   }, [dispatch]);
  //   console.log(pets);

  return (
    <>
      <AddBtn />
      {pets && <PetsList pets={pets} />}
    </>
  );
};
