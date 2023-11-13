import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userTypes } from "../../constants";

import SmartHomes from "../../assets/smartHomes.jpg";
import Button from "./Button";
import { cancelOrder } from "../../redux/actions/cartActions";
import Register from "../pages/Login/Register";

const WelcomePage = () => {
  const dispatch = useDispatch();
  const { loggedInUserId } = useSelector((state) => state.authReducer);
  const { users } = useSelector((state) => state.userReducer);
  const { orders } = useSelector((state) => state.cartReducer);
  const user = users?.find((u) => u.id === loggedInUserId);
  const [showUserRegisterForm, setShowUserRegisterForm] = useState(false);

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
    alert(`Canceled order ${orderId}`);
  };

  const handleRegisterModal = () => {
    setShowUserRegisterForm(!showUserRegisterForm);
  };

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
      <h2 style={styles.title}>Welcome Sales Manager, {user?.name}</h2>
      <div style={styles.divider} />
      <Button
        buttonName="Register Customer"
        buttonStyles={{ ...styles.buttonStyle, marginLeft: 40, marginTop: 40 }}
        onClick={handleRegisterModal}
      />
      <Button
        buttonName="Add Order"
        buttonStyles={{ ...styles.buttonStyle, marginLeft: 40, marginTop: 10 }}
        onClick={() =>
          alert("Please add items to cart and checkout to place an order")
        }
      />
      <h3 style={styles.title}>Orders Placed</h3>
      {orders?.length ? (
        <div style={styles.usersContainer}>
          {orders?.map((order) => (
            <div key={order.id} style={styles.itemContainer}>
              <p style={{ width: 20 }}>{order.id}</p>
              <p style={{ width: 20 }}>{order.userName}</p>
              <p style={{ width: 100 }}>{order.items}</p>
              <p style={{ width: 20 }}>
                {order.deliveryAction || "In Store Pickup"}
              </p>
              <p style={{ width: 200 }}>
                Ordered on {order.orderedDate?.toString()}
              </p>
              <p>Total: {order.total}</p>
              <Button
                buttonName="Cancel"
                buttonStyles={styles.buttonStyle}
                onClick={() => handleCancelOrder(order.id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <p style={{ paddingLeft: 40 }}>No Registered customers yet!</p>
      )}
      <Register
        isOpen={showUserRegisterForm}
        setModalOpen={setShowUserRegisterForm}
      />
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
  usersContainer: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  title: {
    color: "#002B80",
    paddingLeft: 40,
  },
  divider: {
    backgroundColor: "black",
    height: 2,
  },
  imageStyles: {
    width: 600,
    height: 400,
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid black",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    borderRadius: 12,
  },
  buttonStyle: {
    backgroundColor: "#002B80",
  },
};

export default WelcomePage;
