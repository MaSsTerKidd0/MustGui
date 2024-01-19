import React, { useState, useEffect } from "react";
import styles from "./Selector.module.css";

const Selector = ({ name, value, onChange, options, label }) => {
  const [selectedOption, setSelectedOption] = useState(value);

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  // Function to go to the next option
  const nextOption = () => {
    const currentIndex = options.findIndex(
      (option) => option.value === selectedOption
    );
    const nextIndex = (currentIndex + 1) % options.length; // Wrap around to the first option
    setSelectedOption(options[nextIndex].value);
    onChange({ target: { name, value: options[nextIndex].value } });
  };

  // Function to go to the previous option
  const previousOption = () => {
    const currentIndex = options.findIndex(
      (option) => option.value === selectedOption
    );
    const previousIndex = (currentIndex - 1 + options.length) % options.length; // Wrap around to the last option
    setSelectedOption(options[previousIndex].value);
    onChange({ target: { name, value: options[previousIndex].value } });
  };

  return (
    <div className={styles.selectorContainer}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className={styles.navigationElement}>
        <div className={styles.arrow} onClick={previousOption}>
          ◄
        </div>
        <div className={styles.selector}>
          {options.map(
            (option, index) =>
              option.value === selectedOption && (
                <div
                  key={index}
                  value={option.value}
                  onClick={() =>
                    onChange({ target: { name, value: option.value } })
                  }
                  className={`${styles.option} ${styles.liShown}`}
                >
                  {option.label}
                </div>
              )
          )}
        </div>
        <div className={styles.arrow} onClick={nextOption}>
          ►
        </div>
      </div>
    </div>
  );
};

export default Selector;
