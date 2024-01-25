import React, { useState, useEffect } from "react";
import styles from "./ConfigPage.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import ScrollableList from "../../Components/ScrollableList/ScrollableList";
import Footer from "../../Components/Footer/Footer";
import Selector from "../../Components/Selector/Selector";
import axios from "axios";

const ConfigPage = () => {
  const [items, setItems] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const aesOptions = [
    { value: "AesCtr", label: "AES-CTR" },
    { value: "AesGcmSiv", label: "AES-GCM-SIV" },
    { value: "AesCbc", label: "AES-CBC" },
  ];

  const [configData, setConfigData] = useState({
    configName: "",
    secureNet: "",
    unsecureNet: "",
    aesType: aesOptions[0].value,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConfigData({ ...configData, [name]: value });
  };

  const isFormFilled = () => {
    return (
      configData.configName &&
      configData.secureNet &&
      configData.unsecureNet &&
      configData.aesType
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isFormFilled()) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8080/config/",
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
        console.log(response.data);
        setIsSubmitted(true);
      } catch (error) {
        console.error("Error submitting the form", error);
      }
    } else {
      alert("Please fill out all fields.");
    }
  };

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8080/config/");
      if (response.data && Array.isArray(response.data)) {
        setItems(response.data);
      } else {
        console.error("Invalid data format received:", response.data);
      }
    } catch (error) {
      console.error("Error fetching items", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []); // Fetch items on component mount

  useEffect(() => {
    if (isSubmitted) {
      fetchItems();
      setIsSubmitted(false); // Reset the submission state after fetching
    }
  }, [isSubmitted]); // Fetch items after form submission
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8080/config/");
        if (response.data && Array.isArray(response.data)) {
          setItems(response.data);
        } else {
          console.error("Invalid data format received:", response.data);
        }
      } catch (error) {
        console.error("Error fetching items", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <div className={styles.confPage}>
        <Navbar />
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
          <div class="secureNetContainer networkContainer">
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
            <div className={styles.secureNetPort}>
              <label htmlFor="secureNetPort">Secured Network Port:</label>
              <input
                type="text"
                id="secureNetPort"
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
                name="secureNetBandwidth"
                value={configData.secureNetBandwidth}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div class="unsecureNetContainer networkContainer">
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
            <div className={styles.unsecureNetPort}>
              <label htmlFor="unsecureNetPort">Unsecured Network Port:</label>
              <input
                type="text"
                id="unsecureNetPort"
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
                name="unsecureNetBandwidth"
                value={configData.unsecureNetBandwidth}
                onChange={handleInputChange}
              />
            </div>
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
          <div className={styles.oldConfigurations}>
            <ScrollableList items={items} />
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
