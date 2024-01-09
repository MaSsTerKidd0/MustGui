import React, { useState } from "react";
import "./ScrollableList.css";

const ScrollableList = () => {
  const [selectedItems, setSelectedItems] = useState({});

  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]; // Add more items as needed

  const toggleItemSelection = (item) => {
    setSelectedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <div className="scrollable-div">
      {items.map((item, index) => (
        <div
          key={index}
          className={`item ${selectedItems[item] ? "selected" : ""}`}
          onClick={() => toggleItemSelection(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default ScrollableList;
