import { useState } from "react";

import axios from "axios";
// axios.defaults.baseURL = "http://localhost:4000/api/v1";
//---------------testApi---------------
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzg0MjNiMzMwNTdmZTc5ZTZkYzNkNyIsImlhdCI6MTY3NDA2ODU3MCwiZXhwIjoxNjc0MTUxMzcwfQ.zJ573neN-3HKihDENOlTXTjDDiipaxkVCGZD6fJVIbM";
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

// const loginData = {
//   email: "user3@gmail.com",
//   password: "1231237",
// };
// export const login = async () => {
//   try {
//     const { data } = await axios.post("/auth/login", loginData);
//     console.log(data);
//   } catch (error) {
//     return error.message;
//   }
// };

// export const fetchContacts = axios("/users/current")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));
//--------------------------
export const UserDataItem = ({ valueLabel, value, nameInput }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };
  //   const user = useSelector(selectUser);
  //   console.log(user);
  return (
    <>
      <form>
        <label>
          {valueLabel}
          <input
            type="text"
            name={nameInput}
            value={inputValue}
            onChange={handleChange}
          />
        </label>
        <button>edit</button>
      </form>
    </>
  );
};
