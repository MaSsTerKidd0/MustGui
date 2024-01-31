// ScrollableList.js
import React, { useState } from "react";
import styles from "./ScrollableList.module.css";

const ScrollableList = ({ items, onItemSelected }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (onItemSelected) {
      onItemSelected(item);
    }
  };

  return (
    <div className={styles.scrollableDiv}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.item} ${
            selectedItem === item ? styles.selected : ""
          }`}
          onClick={() => handleItemClick(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default ScrollableList;
