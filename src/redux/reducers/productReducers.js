
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



    case 'INCREASE_CARTITEM':
      let newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);
      console.log(state.cartItems, 'cartitems')
      if (existingItem) {
        // If the item is already in the cart, increase its quantity by 1
        existingItem.quantity += 1;
        console.log(state, 'all other states')
        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      }

     

    case 'DECREASE_CARTITEM':

      let newCart = action.payload;
      const rmvItem = state.cartItems.find((item) => item.id === newCart.id);
      console.log(state.cartItems, 'remove cartitems')
      if (rmvItem)
        if (rmvItem.quantity > 1) {
          rmvItem.quantity -= 1;
          return {
            ...state,
            cartItems: [...state.cartItems]
          };

        }
        if (rmvItem.quantity <= 1) {
          console.log(rmvItem,state.cartItems, 'rmvItem statecartitiems')
          const removedCart = rmvItem.filter((item) => state.cartItems.id !== item.id )
          return {
            ...state,
            cartItems: [removedCart]
          };
    
        }

    case 'ADD_CARTITEM':

      const newCartItem = action.payload;
      const existingCartItem = state.cartItems.find((item) => item.id === newCartItem.id);
      console.log(state.cartItems, 'cartitems')
      if (existingCartItem) {
        // If the item is already in the cart, increase its quantity by 1
        existingCartItem.quantity += 1;
        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      }

      else {
        // If the item is not in the cart, add it with a quantity of 1
        console.log(newCartItem, 'newItem before')
        newCartItem.quantity += 1;
        console.log(newCartItem.quantity, 'newItem after')

        return {
          ...state,
          cartItems: [...state.cartItems, newCartItem],
        };
      };

    case 'REMOVE_CARTITEMS':
     
      const updatedCartItem = state.cartItems.filter((item) => item.id !== action.payload);
      return {
        ...state,
       cartItems: updatedCartItem
      }


    default: return state;


  };
  // If the item is already in the cart, increase its quantity by 1




};



export default productsReducer;