import React from "react";
import styles from "./ChartPopup.module.css";
import LiveChart from "./LiveChart";

const ChartPopup = ({ network, networkName, onClose }) => {
  console.log("ChartPopup rendered with network:", network);

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popup}>
        <div className={styles.popupHeader}>
          <h2>{networkName}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.popupContent}>
          <LiveChart network={network} networkName={networkName} />
        </div>
      </div>
    </div>
  );
};

export default ChartPopup;
