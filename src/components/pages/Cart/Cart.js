import React from "react";
import SimpleTemplate from "../../templates/SimpleTemplate";
import { useDispatch, useSelector } from "react-redux";
import { removeAllCartItems } from "../../../redux/actions/cartActions";

const Cart = () => {
  const {cart} = useSelector((state) => state.cartReducer);

  console.log(cart);
  return (
    <SimpleTemplate>
      <div>
        Cart
      </div>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </SimpleTemplate>
  );
};

export default Cart;
