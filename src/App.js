import React, { useState } from "react";
import { Header, Footer, SideMenu } from "./components/organisms";
import HomeDashboard from "./components/pages/HomeDashboard/HomeDashboard";
import Cart from "./components/pages/Cart/Cart";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState({});
  const [currentPage, setCurrentPage] = useState("");

  const handleMenuNavigation = (category) => {
    setCurrentPage("home");
    setSelectedCategory(category);
  };

  const handleContentNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case "cart":
        return <Cart />;
      case "home":
      default:
        return <HomeDashboard category={selectedCategory} />;
    }
  };
  return (
    <>
      <Header handleNavigation={handleContentNavigation} />
      <div style={styles.contentStyle}>
        <SideMenu handleNavigation={handleMenuNavigation} />
        <div style={styles.container}>{renderContent()}</div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  contentStyle: {
    height: window.innerHeight - 80,
    backgroundColor: "#002B80",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    paddingLeft: 30,
    paddingRight: 30,
    gap: 30,
  },
  container: {
    backgroundColor: "#fff",
    width: "85%",
  },
};
export default App;
