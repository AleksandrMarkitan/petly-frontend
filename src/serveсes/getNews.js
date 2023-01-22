const BASE_URL = "https://pets-support-backend.onrender.com/api/v1"
// const BASE_URL = "http://localhost:4000/api/v1"

export const getNews = async ({ page = 1, limit = 0 }) => {
	const response = await fetch(`${BASE_URL}/news?page=${page}&limit=${limit}`);
	const result = response.json();
	return result;
}
