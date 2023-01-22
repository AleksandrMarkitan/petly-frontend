import { List } from "./NoticesCategoriesList.styled";

import axios from "axios";
//import { fetchUserPets } from "../../redux/user/userOperations";
const { REACT_APP_API_URL } = process.env;
const BASE_URL = REACT_APP_API_URL;

axios.defaults.baseURL = BASE_URL;
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzg0MjNiMzMwNTdmZTc5ZTZkYzNkNyIsImlhdCI6MTY3NDA2ODU3MCwiZXhwIjoxNjc0MTUxMzcwfQ.zJ573neN-3HKihDENOlTXTjDDiipaxkVCGZD6fJVIbM";
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const NoticesCategoriesList = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [currentCategory, setCurrentCategory] = useState("sell");

  return (
    <List>
      {children}
    </List>
  );
};
