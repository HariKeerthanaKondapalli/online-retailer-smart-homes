import React from "react";
import DisplayItem from "./DisplayItem";

const DisplayItems = ({ category, handleCart }) => {
  return (
    <div>
      <h2 style={styles.title}>{category.title}</h2>
      <div style={styles.divider} />
      <div style={styles.gridContainer}>
        {category?.items?.map((item) => (
          <div key={item.id} style={styles.gridItem}>
            <DisplayItem item={item} onClick={handleCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  title: {
    color: "#002B80",
    paddingLeft: 40,
  },
  divider: {
    backgroundColor: "black",
    height: 2,
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: 16,
    margin: 16,
  },
  gridItem: {
    border: "1px solid #ccc",
    borderRadius: 12,
    padding: 16,
    textAlign: "center",
  },
};
export default DisplayItems;
