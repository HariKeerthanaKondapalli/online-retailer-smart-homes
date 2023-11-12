import React from "react";
import { useSelector } from "react-redux";

import { userTypes } from "../../constants";

import SmartHomes from "../../assets/smartHomes.jpg";

const WelcomePage = () => {
  const { loggedInUserId } = useSelector((state) => state.authReducer);
  const { users } = useSelector((state) => state.userReducer);
  const user = users?.find((u) => u.id === loggedInUserId);

  const renderCustomerHome = () => (
    <div style={styles.container}>
      <h1>Welcome To Smart Homes</h1>
      <img src={SmartHomes} alt="smart homes" style={styles.imageStyles} />
      <p>High quality products, with quality delivery</p>
      <h3>Please check the left navigation to go through amazing products</h3>
    </div>
  );
  const renderStoreManagerHome = () => (
    <div>
      <h1>Welcome Store Manager, {user?.name}</h1>
    </div>
  );
  const renderSalesManagerHome = () => (
    <div>
      <h1>Welcome Sales Manager, {user?.name}</h1>
    </div>
  );

  switch (user?.type) {
    case userTypes.STORE_MANAGER:
      return renderStoreManagerHome();
    case userTypes.SALES_MANAGER:
      return renderSalesManagerHome();
    case userTypes.CUSTOMER:
    default:
      return renderCustomerHome();
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
