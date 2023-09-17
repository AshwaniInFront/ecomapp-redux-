import { fetchData } from '../../services/api';

export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  payload: products,
});

export const failProducts = (failure) => ({
  type: 'FAIL_PRODUCTS',
  payload: failure,
});


export const getSingleProducts = (data) => ({
  type: 'GET_PRODUCTS',
  payload: data,
});

export const addItemToCart = (product) => ({
  type: 'ADD_CARTITEM',
  payload: product,
});

export const removeItemFromCart = (product) => ({
  type: 'REMOVE_CARTITEM',
  payload: product,
});



export const getProducts =  () => {
  return async (dispatch) => {
    try {
      const data = await fetchData('products');
      dispatch(setProducts(data)); // Dispatch the setProducts action
      console.log(data);
    } catch (error) {
      dispatch(failProducts(error.message));
    }
  };
};


