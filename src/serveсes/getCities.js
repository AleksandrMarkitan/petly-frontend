const BASE_URL = "http://localhost:4000/api/v1"

export const getCities = async () => {
	const response = await fetch(`${BASE_URL}/cities`);
	const result = response.json();
	return result;
}