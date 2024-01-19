import React, { useState } from "react";
import styles from "./ConfigPage.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import ScrollableList from "../../Components/ScrollableList/ScrollableList";
import Footer from "../../Components/Footer/Footer";
import Selector from "../../Components/Selector/Selector";
import axios from "axios";
const ConfigPage = () => {
  const aesOptions = [
    { value: "AesCtr", label: "AES-CTR" },
    { value: "AesGcmSiv", label: "AES-GCM-SIV" },
    { value: "AesCbc", label: "AES-CBC" },
  ];

  // State for the form data
  const [configData, setConfigData] = useState({
    configName: "",
    secureNet: "",
    unsecureNet: "",
    aesType: aesOptions[0].value, // Default to the first option
  });

  // Handles form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConfigData({ ...configData, [name]: value });
  };

  // Checks if the form is completely filled out
  const isFormFilled = () => {
    return (
      configData.configName &&
      configData.secureNet &&
      configData.unsecureNet &&
      configData.aesType
    );
  };

  // Handles form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isFormFilled()) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8080/config",
          {
            config_name: configData.configName,
            secure_net: configData.secureNet,
            unsecure_net: configData.unsecureNet,
            aes_type: configData.aesType,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data); // Handle the response accordingly
      } catch (error) {
        console.error("Error submitting the form", error);
      }
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <>
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
    </>
  );
};
export default ConfigPage;
