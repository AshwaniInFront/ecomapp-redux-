
const initialState = {
  products: [],
  filteredProducts: [],
  singleProduct: [],
  isLoading: true,
  cartItems: [],
  price: [],
};

const productsReducer = (state = initialState, action) => {

  switch (action.type) {

    case 'SET_PRODUCTS':
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };

    case 'FAIL_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };

    case 'GET_PRODUCTS':
      return {
        ...state,
        singleProduct: action.payload,
        isLoading: false,
      };

    case 'ADD_CARTITEM':
      let newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);
      console.log(state.cartItems, 'cartitems')
      if (existingItem) {
        // If the item is already in the cart, increase its quantity by 1
        existingItem.quantity += 1;
        console.log(state,'all other states')
        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      }

      else {
        // If the item is not in the cart, add it with a quantity of 1
        newItem.quantity = 1;
        return {
          ...state,
          cartItems: [...state.cartItems,newItem],
        };
      };

    case 'REMOVE_CARTITEM':

      let newCart = action.payload;
      newCart.quantity = newCart.quantity - 1
      const newQuantity = newCart.quantity;
      console.log(state.cartItems, 'newquantity')

      return {
        ...state,
        cartItems: [...state.cartItems]
      };


    default:
      return state;
  }
};



export default productsReducer;