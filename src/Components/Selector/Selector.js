import React from "react";
import styles from "./Selector.module.css";

const Selector = ({ name, value, onChange, options, label }) => {
  // Function to go to the next option
  const nextOption = () => {
    const currentIndex = options.findIndex((option) => option.value === value);
    const nextIndex = (currentIndex + 1) % options.length; // Wrap around to the first option
    onChange({ target: { name, value: options[nextIndex].value } });
  };

  // Function to go to the previous option
  const previousOption = () => {
    const currentIndex = options.findIndex((option) => option.value === value);
    const previousIndex = (currentIndex - 1 + options.length) % options.length; // Wrap around to the last option
    onChange({ target: { name, value: options[previousIndex].value } });
  };

  return (
    <div className={styles.selectorContainer}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className={styles.navigationElement}>
        <div className={styles.arrow} onClick={previousOption}>
          ◄
        </div>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={styles.selector}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className={styles.arrow} onClick={nextOption}>
          ►
        </div>
      </div>
    </div>
  );
};

export default Selector;
