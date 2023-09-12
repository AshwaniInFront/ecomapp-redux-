import { fetchData } from '../../services/services'


export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    payload: products,
});

export const failProducts = (failure) => ({
  type: 'FAIL_PRODUCTS',
  payload:failure,
});

export const setFilteredProducts = (category) => ({
    type: 'SET_FILTERED_PRODUCTS',
    payload: category,
});
  

const getProducts = async() => {
    try {
      const data = await fetchData('products');
      dispatch(setProducts(data)); // Dispatch the setProducts action
      console.log(data)
    } catch (error) {
      dispatch(failProducts(error.message));
    }
}


export { getProducts }