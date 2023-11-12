import React from "react";
import SimpleTemplate from "../../templates/SimpleTemplate";
import { useSelector } from "react-redux";


const Cart = () => {
  const {cart} = useSelector((state) => state.cartReducer);
  console.log(cart);
  return (
    <SimpleTemplate>
      <div>Cart</div>
    </SimpleTemplate>
  );
};

export default Cart;
