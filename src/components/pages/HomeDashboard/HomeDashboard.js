import React from "react";
import { isEmpty } from "../../../lib/helpers";
import { WelcomePage } from "../../organisms";
import DisplayItems from "./DisplayItems";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cartActions";

const HomeDashboard = ({ category = {} }) => {
  const dispatch = useDispatch();

  const handleCart = (itemId) => {
    const item = category?.items?.find((i) => i.id === itemId);
    dispatch(addToCart(item));
  };

  return isEmpty(category) ? (
    <WelcomePage />
  ) : (
    <DisplayItems category={category} handleCart={handleCart} />
  );
};

export default HomeDashboard;
