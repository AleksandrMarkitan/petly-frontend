import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../helpers/formatDate";
import { deletePet } from "../../redux/user/userOperations";
import {
  DeleteBtn,
  DeleteBtn2,
  DescriptionUl,
  List,
  ListItem,
  WrapperPicDiv,
} from "./PetsList.styled";
import { Icon } from "@iconify/react";

export const PetsList = ({ pets }) => {
  const dispatch = useDispatch();
  console.log(pets);
  const deletePetItem = (id) => {
    dispatch(deletePet(id));

    // deletePetItem
  };
  return (
    <>
      {/* <h1>pets list </h1> */}
      <List>
        {pets.map(({ _id, avatarURL, name, date, breed, comments }) => (
          <ListItem key={_id}>
            {/* <WrapperPicDiv> */}
            <WrapperPicDiv src={avatarURL} alt="pic" />
            {/* </WrapperPicDiv> */}
            <DescriptionUl>
              <li>
                <p>Name: {name}</p>
              </li>
              <li>
                <p>Date of birth: {formatDate(date)}</p>
              </li>
              <li>
                <p>Breed: {breed}</p>
              </li>
              <li>
                <p>Comments: {comments}</p>
              </li>
            </DescriptionUl>
            <DeleteBtn onClick={() => deletePetItem(_id)}>
              <Icon icon="fluent:delete-16-filled" />
            </DeleteBtn>
            <DeleteBtn2 onClick={() => deletePetItem(_id)}>
              {/* <Icon icon="fluent:delete-16-filled" /> */}
            </DeleteBtn2>
          </ListItem>
        ))}
      </List>
    </>
  );
};
