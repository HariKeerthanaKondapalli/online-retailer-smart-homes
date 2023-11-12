import React from "react";
import HomeDashboard from "./components/pages/HomeDashboard/HomeDashboard";
import Cart from "./components/pages/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./components/pages/Account/Account";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
