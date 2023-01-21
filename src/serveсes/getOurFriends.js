const BASE_URL = "https://pets-support-backend.onrender.com/api/v1";

export const getOurFriends = async ({ page = 1, limit = 20 }) => {
  const response = await fetch(
    `${BASE_URL}/friends?page=${page}&limit=${limit}`
  );
  const result = response.json();
  return result;
};
