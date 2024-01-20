import React, { useState } from "react";
import styles from "./ScrollableList.module.css";

const ScrollableList = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState({});

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
