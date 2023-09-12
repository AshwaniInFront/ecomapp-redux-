const initialState = {
  products: [],
  filteredProducts: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
    };

    case 'SET_FILTERED_PRODUCTS':
      const category = action.payload;
      const filteredProducts = state.products.filter(
        (product) => product.category === category
      );
      return {
        ...state,
        filteredProducts,
      };
    default:
      return state;
  }
};



export default productsReducer;