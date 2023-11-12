const addToCart = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

const removeFromCart = (itemId) => ({
  type: "REMOVE_ITEM",
  payload: itemId,
});

const removeAllCartItems = () => ({
  type: "DELETE_CART",
  payload: {},
});

const setSelectedCategory = (category) => ({
  type: "SET_SELECTED_CATEGORY",
  payload: category,
});

export { addToCart, removeFromCart, removeAllCartItems, setSelectedCategory };
