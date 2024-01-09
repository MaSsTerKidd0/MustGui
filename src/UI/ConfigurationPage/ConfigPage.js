import React, { useState } from "react";
import "./ConfigPage.css";
import Navbar from "../../Components/Navbar/Navbar";
import ScrollableList from "../../Components/ScrollableList/ScrollableList";

const ConfigPage = () => {
  const [configName, setConfigName] = useState("");
  const [ipAddr, setIpAddr] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "configName") {
      setConfigName(value);
    } else if (name === "ipAddr") {
      setIpAddr(value);
    }
  };
  const [aesType, setAesType] = useState("aes-cbc");

  const handleAesChange = (event) => {
    setAesType(event.target.value);
  };

  return (
    <div className="conf-page">
      <Navbar />
      <div className="config-page">
        <div className="grid-container">
          <div className="basic-configurations">
            <label htmlFor="configName">Configuration name:</label>
            <input
              type="text"
              id="configName"
              name="configName"
              value={configName}
              onChange={handleInputChange}
            />
            <label htmlFor="ipAddr">IP address:</label>
            <input
              type="text"
              id="ipAddr"
              name="ipAddr"
              value={ipAddr}
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
                  />
                  <label htmlFor="aes-cbc">Aes-Cbc</label>
                </div>
              </form>
            </div>
            <button className="button" id="save-button">
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
      </div>
    </div>
  );
};

export default ConfigPage;
