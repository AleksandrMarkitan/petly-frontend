import { useDispatch, useSelector } from "react-redux";
import { deletePet } from "../../redux/user/userOperations";

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
      <ul>
        {pets.map(({ _id, avatarURL, name, date, breed, comments }) => (
          <li key={_id}>
            <div>
              <img src={avatarURL} alt="pic" />
            </div>
            <ul>
              <li>
                <p>Name: {name}</p>
              </li>
              <li>
                <p>Date of birth: {date}</p>
              </li>
              <li>
                <p>Breed: {breed}</p>
              </li>
              <li>
                <p>Comments: {comments}</p>
              </li>
            </ul>
            <button onClick={() => deletePetItem(_id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
