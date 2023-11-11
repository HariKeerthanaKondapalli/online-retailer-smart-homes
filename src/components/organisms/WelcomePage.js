import React from "react";
import { useSelector } from "react-redux";

import { userTypes } from "../../constants";

import SmartHomes from "../../assets/smartHomes.jpg";

const WelcomePage = () => {
  const { loggedInUserId } = useSelector((state) => state.authReducer);
  const { users } = useSelector((state) => state.userReducer);
  const user = users?.find((u) => u.id === loggedInUserId);

  switch (user.type) {
    case userTypes.STORE_MANAGER:
      return (
        <div>
          <h1>Welcome Store Manager, {user?.name}</h1>
        </div>
      );
    case userTypes.SALES_MANAGER:
      return (
        <div>
          <h1>Welcome Sales Manager, {user?.name}</h1>
        </div>
      );
    case userTypes.CUSTOMER:
    default:
      return (
        <div style={styles.container}>
          <h1>Welcome To Smart Homes</h1>
          <img src={SmartHomes} alt="smart homes" style={styles.imageStyles} />
          <p>High quality products, with quality delivery</p>
          <h3>
            Please check the left navigation to go through amazing products
          </h3>
        </div>
      );
  }
};

const styles = {
  container: {
    textAlign: "center",
  },
  imageStyles: {
    width: 600,
    height: 400,
  },
};

export default WelcomePage;
