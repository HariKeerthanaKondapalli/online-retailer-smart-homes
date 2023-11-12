import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  LoginOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";

import Button from "./Button";
import { isEmpty } from "../../lib/helpers";
import { logout } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const headerStyle = {
  backgroundColor: "#002B80",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
};

const welcomeText = {
  color: "#fff",
  fontSize: 15,
  fontWeight: "bold",
};
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedInUserId } = useSelector((state) => state.authReducer);
  const { users } = useSelector((state) => state.userReducer);
  const { cart } = useSelector((state) => state.cartReducer);
  const user = users?.find((u) => u.id === loggedInUserId);

  const handleLoginNavigation = () => {
    console.log("in Login Page");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleNavigation = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div style={headerStyle}>
      {!isEmpty(loggedInUserId) ? (
        <>
          <p style={welcomeText}>Hello {user.name}</p>
          <Button
            buttonName="Account"
            onClick={() => handleNavigation("account")}
            renderIcon={() => (
              <UserOutlined style={{ color: "white", paddingRight: 6 }} />
            )}
          />
          <Button
            buttonName="Logout"
            onClick={handleLogout}
            renderIcon={() => (
              <LogoutOutlined style={{ color: "white", paddingRight: 6 }} />
            )}
          />
        </>
      ) : (
        <Button
          buttonName="Login"
          onClick={handleLoginNavigation}
          renderIcon={() => (
            <LoginOutlined style={{ color: "white", paddingRight: 6 }} />
          )}
        />
      )}
      <Button
        buttonName={`Cart (${cart?.length})`}
        onClick={() => handleNavigation("cart")}
        renderIcon={() => (
          <ShoppingCartOutlined style={{ color: "white", paddingRight: 6 }} />
        )}
      />
    </div>
  );
};

export default Header;
