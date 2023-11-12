const initialState = {
  cart: [],
  selectedCategory: {},
  orders: [],
  currentOrderId: 0,
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
    case "SET_SELECTED_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "PLACE_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.payload],
        currentOrderId: state.currentOrderId + 1,
      };
    case "CANCEL_ORDER":
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
