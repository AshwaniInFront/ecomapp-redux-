// api.js or api.ts
const BASE_URL = 'https://fakestoreapi.com';

//functions to fetch products from the Fakestore API
export async function fetchData(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`API request failed: ${error.message}`);
    }
}


//functions to fetch single product from the Fakestore API
export async function getProductId(productId) {
    try {
        const response = await fetch(`${BASE_URL}/products/${productId}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error(`API request failed: ${error.message}`);
      }
}
