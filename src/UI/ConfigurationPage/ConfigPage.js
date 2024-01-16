import React, { useState } from "react";
import "./ConfigPage.css";
import Navbar from "../../Components/Navbar/Navbar";
import ScrollableList from "../../Components/ScrollableList/ScrollableList";
import Footer from "../../Components/Footer/Footer";

const ConfigPage = () => {
  const [configData, setConfigData] = useState({
    configName: "",
    secureNet: "",
    unsecureNet: "",
    aesType: "",
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
    <div className="conf-page">
      <Navbar />
      <div className="grid-container">
        <div className="basic-configurations">
          <div className="config-name">
            <label htmlFor="configName">Configuration Name:</label>
            <input
              type="text"
              id="configName"
              name="configName"
              value={configData.configName}
              onChange={handleInputChange}
            />
          </div>
          <div className="secure-net">
            <label htmlFor="secureNet">Secured Network:</label>
            <input
              type="text"
              id="secureNet"
              name="secureNet"
              value={configData.secureNet}
              onChange={handleInputChange}
            />
          </div>
          <div className="unsecure-net">
            <label htmlFor="unsecureNet">Unsecured Network:</label>
            <input
              type="text"
              id="unsecureNet"
              name="unsecureNet"
              value={configData.unsecureNet}
              onChange={handleInputChange}
            />
          </div>
          <div className="aes-radio-container">
            <form>
              {["Aes-Ctr", "Aes-Gcm-Siv", "Aes-Cbc"].map((type) => (
                <div key={type} className="radio-button-container">
                  <input
                    type="radio"
                    id={type}
                    name="aesType"
                    value={type}
                    checked={configData.aesType === type}
                    onChange={handleInputChange}
                  />
                  <label htmlFor={type}>{type}</label>
                </div>
              ))}
            </form>
          </div>
          <button
            className="button"
            id="save-button"
            onClick={handleSubmit}
            disabled={!isFormFilled()}
          >
            Save
          </button>
        </div>

        <div className="old-configurations">
          <ScrollableList />
          <div className="button-section">
            <button className="button">Load</button>
            <button className="button">New</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ConfigPage;
