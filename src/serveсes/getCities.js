const { REACT_APP_API_URL } = process.env;
const BASE_URL = REACT_APP_API_URL;

export const getCities = async () => {
  const response = await fetch(`${BASE_URL}/cities`);
  const result = response.json();
  return result;
};
