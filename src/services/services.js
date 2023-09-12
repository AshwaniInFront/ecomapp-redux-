// api.js or api.ts
const BASE_URL = 'https://fakestoreapi.com';


//functions to fetch products from the Fakestore API
export async function fetchData(endpoint, options = {}) {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`API request failed: ${error.message}`);
    }
}

