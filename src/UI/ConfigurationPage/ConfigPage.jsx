import React, { useState, useEffect } from "react";
import styles from "./ConfigPage.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import ScrollableList from "../../Components/ScrollableList/ScrollableList";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import Popup from "../../Components/Popup/Popup";
import CopyTextBlock from "../../Components/CopTextBlock/CopyTextBlock";
import GenerateButton from "../../Components/GenerateButton/GenerateButton";

const ConfigPage = () => {
  const [items, setItems] = useState([]);
  const [selectedConfigName, setSelectedConfigName] = useState("");
  const [showSavePopup, setShowSavePopup] = useState(false);
  const [showLoadPopup, setShowLoadPopup] = useState(false);
  const [popupState, setPopupState] = useState({ show: false, action: null }); // action can be 'save' or 'load'

  const aesOptions = [
    { value: "AesCtr", label: "AES-CTR" },
    { value: "AesGcmSiv", label: "AES-GCM-SIV" },
    { value: "AesCbc", label: "AES-CBC" },
  ];

  const initialConfigData = {
    configName: "",
    secureNet: "",
    secureNetPort: "",
    secureNetSubnetMask: "",
    secureNetBandwidth: "",
    unsecureNet: "",
    unsecureNetPort: "",
    unsecureNetSubnetMask: "",
    unsecureNetBandwidth: "",
    aesType: aesOptions[0].value,
  };

  const [configData, setConfigData] = useState(initialConfigData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConfigData({ ...configData, [name]: value });
  };

  const isFormFilled = () => Object.values(configData).every((value) => value);

  const handleSave = async (event) => {
    event.preventDefault();
    if (isFormFilled()) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8080/config/",
          configData,
          { headers: { "Content-Type": "application/json" } }
        );
        console.log(response.data);
        setShowSavePopup(false); // Close popup on successful submission
        setConfigData(initialConfigData); // Reset form on successful submission
        fetchItems(); // Fetch new items list
      } catch (error) {
        console.error("Error submitting the form", error);
        // Maybe show an error message to the user here
      }
    } else {
      alert("Please fill out all fields.");
    }
  };

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8080/config/");
      setItems(response.data || []);
    } catch (error) {
      console.error("Error fetching items", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSaveClick = () => {
    setPopupState({ show: true, action: "save" });
    setConfigData({
      initialConfigData,
    });
  };

  const handleItemSelected = (itemName) => {
    setSelectedConfigName(itemName);
  };

  const handleLoadClick = async () => {
    if (!selectedConfigName) {
      setConfigData(initialConfigData); // Load initial data into configData
      setPopupState({ show: true, action: "load" });
      return;
    }

    try {
      const response = await axios.get(
        `http://127.0.0.1:8080/config/${selectedConfigName}`
      );
      const config = response.data;
      setConfigData({
        configName: config.config_name || "",
        secureNet: config.secure_net || "",
        secureNetPort: config.secure_net_port || "",
        secureNetSubnetMask: config.secure_net_subnet_mask || "",
        secureNetBandwidth: config.secure_net_bandwidth || "",
        unsecureNet: config.unsecure_net || "",
        unsecureNetPort: config.unsecure_net_port || "",
        unsecureNetSubnetMask: config.unsecure_net_subnet_mask || "",
        unsecureNetBandwidth: config.unsecure_net_bandwidth || "",
        aesType: config.aes_type || aesOptions[0].value,
      });
      setPopupState({ show: true, action: "load" });
    } catch (error) {
      console.error("Error fetching configuration", error);
    }
  };

  return (
    <div className={styles.confPage}>
      <Navbar />
      <CopyTextBlock />
      <div className={styles.oldConfigurations}>
        <ScrollableList items={items} onItemSelected={handleItemSelected} />
        <div className={styles.buttonSection}>
          <button className={styles.button} onClick={handleLoadClick}>
            Load
          </button>
          <button className={styles.button} onClick={handleSaveClick}>
            New
          </button>
        </div>
      </div>
      {popupState.show && (
        <Popup
          title={
            popupState.action === "save"
              ? "New Configuration"
              : "Load Configuration"
          }
          onClose={() => setPopupState({ show: false, action: null })}
          show={popupState.show}
          action={popupState.action}
          configData={configData}
          handleInputChange={handleInputChange}
        />
      )}
      <Footer />
    </div>
  );
};
export default ConfigPage;
