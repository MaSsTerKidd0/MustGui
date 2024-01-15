import React, { useState } from "react";
import "./ConfigPage.css";
import Navbar from "../../Components/Navbar/Navbar";
import ScrollableList from "../../Components/ScrollableList/ScrollableList";
import Footer from "../../Components/Footer/Footer";

const ConfigPage = () => {
  const [config_name, setConfigName] = useState("");
  const [ip_addr, setIpAddr] = useState("");
  const [aes_type, setAesType] = useState("aes-cbc");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "configName") {
      setConfigName(value);
    } else if (name === "ipAddr") {
      setIpAddr(value);
    }
  };

  const handleAesChange = (event) => {
    setAesType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const configData = {
      config_name,
      ip_addr,
      aes_type,
    };

    try {
      const response = await fetch("http://127.0.0.1:8080/config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(configData),
      });

      if (response.ok) {
        console.log("Configuration saved successfully");
      } else {
        console.error("Failed to save the configuration");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div className="conf-page">
      <Navbar />

      <div className="grid-container">
        <div className="basic-configurations">
          <label htmlFor="configName">Configuration name:</label>
          <input
            type="text"
            id="configName"
            name="configName"
            value={config_name}
            onChange={handleInputChange}
          />
          <label htmlFor="ipAddr">IP address:</label>
          <input
            type="text"
            id="ipAddr"
            name="ipAddr"
            value={ip_addr}
            onChange={handleInputChange}
          />
          <div className="aes-radio-container">
            <form>
              <div className="radio-button-container">
                <input
                  type="radio"
                  id="aes-ctr"
                  name="encryption"
                  value="Aes-Ctr"
                  checked={aes_type === "Aes-Ctr"}
                  onChange={handleAesChange}
                />
                <label htmlFor="aes-ctr">Aes-Ctr</label>
              </div>

              <div className="radio-button-container">
                <input
                  type="radio"
                  id="aes-gcm-siv"
                  name="encryption"
                  value="Aes-Gcm-Siv"
                />
                <label htmlFor="aes-gcm-siv">Aes-Gcm-Siv</label>
              </div>

              <div className="radio-button-container">
                <input
                  type="radio"
                  id="aes-cbc"
                  name="encryption"
                  value="Aes-Cbc"
                  checked={aes_type === "Aes-Cbc"}
                  onChange={handleAesChange}
                />
                <label htmlFor="aes-cbc">Aes-Cbc</label>
              </div>
            </form>
          </div>
          <button className="button" id="save-button" onClick={handleSubmit}>
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
