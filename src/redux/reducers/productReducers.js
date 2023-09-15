const initialState = {
  products: [],
  filteredProducts: [],
  singleProduct:[],
  isLoading: true,
};

const productsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        isLoading: false
    };

    case 'FAIL_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        isLoading: false
    };

    case 'GET_PRODUCTS':
      return {        
        ...state,
        singleProduct: action.payload,
        
    };

    default:
      return state;
  }
};



export default productsReducer;