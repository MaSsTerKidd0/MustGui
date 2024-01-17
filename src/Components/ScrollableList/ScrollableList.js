import React, { useState } from "react";
import styles from "./ScrollableList.module.css";

const ScrollableList = () => {
  const [selectedItems, setSelectedItems] = useState({});

  const items = [
    "Save 1",
    "Save 2",
    "Save 3",
    "Save 4",
    "Save 5",
    "Save 6",
    "Save 7",
    "Save 8",
  ]; // Add more items as needed

  const toggleItemSelection = (item) => {
    setSelectedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <div className={styles.scrollableDiv}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.item} ${
            selectedItems[item] ? `${styles.selected}` : ""
          }`}
          onClick={() => toggleItemSelection(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default ScrollableList;
