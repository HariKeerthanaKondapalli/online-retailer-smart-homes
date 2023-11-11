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

export { addToCart, removeFromCart, removeAllCartItems };
