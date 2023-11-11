const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "DELETE_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default cartReducer;
