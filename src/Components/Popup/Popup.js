import React from "react";
import styles from "./Popup.module.css"; // Assuming you have separate CSS for Popup

const Popup = ({ title, onClose, show, configData, handleInputChange }) => {
  const popupClasses = show
    ? `${styles.popup} ${styles.show}`
    : `${styles.popup} ${styles.hidden}`;
  return (
    <div className={popupClasses} /*style={popupAnim}*/>
      <h2>{title}</h2>
      <div className={styles.configForm}>
        <div className={styles.configName}>
          <label htmlFor="configName">Configuration Name:</label>
          <input
            type="text"
            id="configName"
            className={styles.inputField}
            name="configName"
            value={configData.configName}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.secureNetColumn}>
          {/* Repeat for other elements like secureNet, secureNetPort, etc. */}
          <div className={styles.secureNet}>
            <label htmlFor="secureNet">Secured Network:</label>
            <input
              type="text"
              className={styles.inputField}
              name="secureNet"
              value={configData.secureNet}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.secureNetPort}>
            <label htmlFor="secureNetPort">Secured Network Port:</label>
            <input
              type="text"
              id="secureNetPort"
              className={styles.inputField}
              name="secureNetPort"
              value={configData.secureNetPort}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.secureNetSubnetMask}>
            <label htmlFor="secureNetSubnetMask">
              Secured Network Subnet Mask:
            </label>
            <input
              type="text"
              id="secureNetSubnetMask"
              className={styles.inputField}
              name="secureNetSubnetMask"
              value={configData.secureNetSubnetMask}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.secureNetBandwidth}>
            <label htmlFor="secureNetBandwidth">
              Secured Network Bandwidth:
            </label>
            <input
              type="text"
              id="secureNetBandwidth"
              className={styles.inputField}
              name="secureNetBandwidth"
              value={configData.secureNetBandwidth}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.unsecureNetColumn}>
          <div className={styles.unsecureNet}>
            <label htmlFor="unsecureNet">Unsecured Network:</label>
            <input
              type="text"
              id="unsecureNet"
              className={styles.inputField}
              name="unsecureNet"
              value={configData.unsecureNet}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.unsecureNetPort}>
            <label htmlFor="unsecureNetPort">Unsecured Network Port:</label>
            <input
              type="text"
              id="unsecureNetPort"
              className={styles.inputField}
              name="unsecureNetPort"
              value={configData.unsecureNetPort}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.unsecureNetSubnetMask}>
            <label htmlFor="unsecureNetSubnetMask">
              Unsecured Network Subnet Mask:
            </label>
            <input
              type="text"
              id="unsecureNetSubnetMask"
              className={styles.inputField}
              name="unsecureNetSubnetMask"
              value={configData.unsecureNetSubnetMask}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.unsecureNetBandwidth}>
            <label htmlFor="unsecureNetBandwidth">
              Unsecured Network Bandwidth:
            </label>
            <input
              type="text"
              id="unsecureNetBandwidth"
              className={styles.inputField}
              name="unsecureNetBandwidth"
              value={configData.unsecureNetBandwidth}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <button onClick={onClose}>Close</button>
      <button className={styles.saveButton} onClick={onClose}>
        Save
      </button>
    </div>
  );
};

export default Popup;
