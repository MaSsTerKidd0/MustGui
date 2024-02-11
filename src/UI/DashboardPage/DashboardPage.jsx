import React, { useState, useEffect } from "react";
import styles from "./DashboardPage.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import LiveChart from "../../Components/LiveChart/LiveChart";
import ScrollableList from "../../Components/ScrollableList/ScrollableList";

const DashboardPage = () => {
  const [items, setItems] = useState([]);
  const [selectedConfigName, setSelectedConfigName] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [isDataTransmitted, setIsDataTransmitted] = useState(false);

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

  const handleItemSelected = (itemName) => {
    setSelectedConfigName(itemName);
  };

  return (
    <div className={styles.dashboard}>
      <Navbar />
      <div className={styles.gridContainer}>
        <div className={`${styles.gridItem} ${styles.gridItem1}`}>
          <div className={styles.connectionStatus}>
            <span
              className={styles.statusIndicator}
              style={{ backgroundColor: isConnected ? "green" : "red" }}
            ></span>
            <span>
              {isConnected
                ? "Connection Established"
                : "Connection Not Established"}
            </span>
          </div>
          <div className={styles.dataTransmissionStatus}>
            <span
              className={styles.statusIndicator}
              style={{ backgroundColor: isDataTransmitted ? "green" : "red" }}
            ></span>
            <span>
              {isDataTransmitted ? "Data Transmitted" : "Data Not Transmitted"}
            </span>
          </div>
        </div>
        <div className={`${styles.gridItem} ${styles.gridItem2}`}>
          <div className={styles.innerGrid}>
            <button className={styles.innerGridItem}>Graph 1</button>
            <button className={styles.innerGridItem}>Graph 2</button>
            <button className={styles.innerGridItem}>Graph 3</button>
            <button className={styles.innerGridItem}>Graph 4</button>
          </div>
        </div>
        <div className={`${styles.gridItem} ${styles.gridItem3}`}>
          <h1>Real-Time Data Graph</h1>
          <LiveChart />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
