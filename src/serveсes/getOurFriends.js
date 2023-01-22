
const { REACT_APP_API_URL } = process.env;
const BASE_URL = REACT_APP_API_URL;

export const getOurFriends = async ({ page = 1, limit = 20 }) => {
  const response = await fetch(
    `${BASE_URL}/friends?page=${page}&limit=${limit}`
  );
  const result = response.json();
  return result;
};
