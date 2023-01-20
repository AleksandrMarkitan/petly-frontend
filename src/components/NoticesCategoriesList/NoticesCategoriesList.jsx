import { useState } from "react";
import { NoticeCategoryItem } from '../NoticeCategoryItem/NoticeCategoryItem';
import { List } from "./NoticesCategoriesList.styled";

import axios from "axios";
//import { fetchUserPets } from "../../redux/user/userOperations";
axios.defaults.baseURL = "http://localhost:5000/api/v1";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzg0MjNiMzMwNTdmZTc5ZTZkYzNkNyIsImlhdCI6MTY3NDA2ODU3MCwiZXhwIjoxNjc0MTUxMzcwfQ.zJ573neN-3HKihDENOlTXTjDDiipaxkVCGZD6fJVIbM";
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const NoticesCategoriesList = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentCategory, setCurrentCategory] = useState('sell');

  return (
    <List>
      {/* {currentCategory.map(item => <NoticeCategoryItem data={item} />)} */}
    </List>
  )
}

