import { fetchData } from '../../services/api';

export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  payload: products,
});

export const failProducts = (failure) => ({
  type: 'FAIL_PRODUCTS',
  payload: failure,
});

export const getCartItems = (product) => ({
  type: 'GET_CARTITEMS',
  payload: product,
});

export const getSingleProducts = (data) => ({
  type: 'GET_PRODUCTS',
  payload: data,
});

export const addItemToCart = (product) => ({
  type: 'ADD_CARTITEM',
  payload: product,
});

export const increaseCartItem = (product) => ({
  type: 'INCREASE_CARTITEM',
  payload: product,
});

export const decreaseCartItem = (product) => ({
  type: 'DECREASE_CARTITEM',
  payload: product,
});

export const removeProduct = (productId) => ({
  type: 'REMOVE_CARTITEMS',
  payload: productId,
});

export const getProducts =  () => {
  return async (dispatch) => {
    try {
      const data = await fetchData('products');
      dispatch(setProducts(data)); // Dispatch the setProducts action
    
    } catch (error) {
      dispatch(failProducts(error.message));
    }
  };
};


