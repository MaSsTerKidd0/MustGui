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
    secureNetPort: "",
    secureNetSubnetMask: "",
    secureNetBandwidth: "",
    unsecureNet: "",
    unsecureNetPort: "",
    unsecureNetSubnetMask: "",
    unsecureNetBandwidth: "",
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
      configData.secureNetPort &&
      configData.secureNetSubnetMask &&
      configData.secureNetBandwidth &&
      configData.unsecureNet &&
      configData.unsecureNetPort &&
      configData.unsecureNetSubnetMask &&
      configData.unsecureNetBandwidth &&
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
            secure_net_port: configData.secureNetPort,
            secure_net_subnet_mask: configData.secureNetSubnetMask,
            secure_net_bandwidth: configData.secureNetBandwidth,
            unsecure_net: configData.unsecureNet,
            unsecure_net_port: configData.unsecureNetPort,
            unsecure_net_subnet_mask: configData.unsecureNetSubnetMask,
            unsecure_net_bandwidth: configData.unsecureNetBandwidth,
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

  return (
    <div className={styles.confPage}>
      <Navbar />

      <div className={styles.oldConfigurations}>
        <ScrollableList items={items} />
        <div className={styles.buttonSection}>
          <button className={styles.button}>Load</button>
          <button className={styles.button}>New</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConfigPage;
