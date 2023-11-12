import React from "react";
import { isEmpty } from "../../../lib/helpers";
import { WelcomePage } from "../../organisms";
import DisplayItems from "./DisplayItems";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/actions/cartActions";
import SimpleTemplate from "../../templates/SimpleTemplate";

const HomeDashboard = () => {
  const dispatch = useDispatch();
  const { selectedCategory: category } = useSelector(
    (state) => state.cartReducer
  );

  const handleCart = (itemId) => {
    const item = category?.items?.find((i) => i.id === itemId);
    dispatch(addToCart(item));
  };

  return (
    <SimpleTemplate>
      {isEmpty(category) ? (
        <WelcomePage />
      ) : (
        <DisplayItems category={category} handleCart={handleCart} />
      )}
    </SimpleTemplate>
  );
};

export default HomeDashboard;
