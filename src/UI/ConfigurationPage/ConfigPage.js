import React, { useState } from "react";
import styles from "./ConfigPage.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import ScrollableList from "../../Components/ScrollableList/ScrollableList";
import Footer from "../../Components/Footer/Footer";
import Selector from "../../Components/Selector/Selector";

const ConfigPage = () => {
  const aesOptions = [
    { value: "AesCtr", label: "AES-CTR" },
    { value: "AesGcmSiv", label: "AES-GCM-SIV" },
    { value: "AesCbc", label: "AES-CBC" },
  ];
  const [configData, setConfigData] = useState({
    configName: "",
    secureNet: "",
    unsecureNet: "",
    aesType: "AesCtr",
  });

  const handleInputChange = (event) => {
    setConfigData({
      ...configData,
      [event.target.name]: event.target.value,
    });
  };

  const isFormFilled = () => {
    const { configName, secureNet, unsecureNet, aesType } = configData;
    return configName && secureNet && unsecureNet && aesType;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8080/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(configData),
      });
      if (response.ok) {
        alert("Configuration saved successfully");
      } else {
        alert("Failed to save the configuration");
      }
    } catch (error) {
      alert("Network error: " + error);
    }
  };

  return (
    <div className={styles.confPage}>
      <Navbar />
      <div className={styles.gridContainer}>
        <div className={styles.basicConfigurations}>
          <div className={styles.configName}>
            <label htmlFor="configName">Configuration Name:</label>
            <input
              type="text"
              id="configName"
              name="configName"
              value={configData.configName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.secureNet}>
            <label htmlFor="secureNet">Secured Network:</label>
            <input
              type="text"
              id="secureNet"
              name="secureNet"
              value={configData.secureNet}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.unsecureNet}>
            <label htmlFor="unsecureNet">Unsecured Network:</label>
            <input
              type="text"
              id="unsecureNet"
              name="unsecureNet"
              value={configData.unsecureNet}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.aesTypeSelector}>
            <Selector
              name="aesType"
              value={configData.aesType}
              onChange={handleInputChange}
              options={aesOptions}
            />
          </div>
          <button
            className={styles.saveButton}
            onClick={handleSubmit}
            disabled={!isFormFilled()}
          >
            Save
          </button>
        </div>

        <div className={styles.oldConfigurations}>
          <ScrollableList />
          <div className={styles.buttonSection}>
            <button className={styles.button}>Load</button>
            <button className={styles.button}>New</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ConfigPage;
