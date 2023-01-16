const BASE_URL = "http://localhost:3000"

export const getNews = async ({ page = 1, limit = 0 }) => {
	const response = await fetch(`${BASE_URL}/news?page=${page}&limit=${limit}`);
	const result = response.json();
	return result;
}