import React, { useState, useEffect } from "react";
import styles from "./DashboardPage.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import ChartPopup from "../../Components/LiveChart/ChartPopup";

const DashboardPage = () => {
  const [selectedConfigName, setSelectedConfigName] = useState("");
  const [connectionStatus, setConnectionStatus] = useState({
    connection_established: false,
    data_transmitted: false,
  });
  const [showChartPopup, setShowChartPopup] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const handleItemSelected = (itemName) => {
    setSelectedConfigName(itemName);
  };

  const handleNetworkSelected = (network) => {
    setSelectedNetwork(network);
    setShowChartPopup(true);
  };

  const closeChartPopup = () => {
    setShowChartPopup(false);
    setSelectedNetwork(null);
  };

  useEffect(() => {
    const fetchConnectionStatus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/dashboard/connectionStatus"
        );
        setConnectionStatus(response.data);
      } catch (error) {
        console.error("Error fetching connection status:", error);
      }
    };

    fetchConnectionStatus();
    const interval = setInterval(fetchConnectionStatus, 5000); // Fetch status every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Helper function to get the network name
  const getNetworkName = (network) => {
    switch (network) {
      case "incomingUnsecure":
        return "Incoming Data Unsecure";
      case "outgoingUnsecure":
        return "Outgoing Data Unsecure";
      case "incomingSecure":
        return "Incoming Data Secure";
      case "outgoingSecure":
        return "Outgoing Data Secure";
      default:
        return "Real-Time Data Graph";
    }
  };

  return (
    <div className={styles.dashboard}>
      <Navbar />
      <div className={styles.gridContainer}>
        <table className={`${styles.statusTable} ${styles.gridItem1}`}>
          <thead>
            <tr>
              <th>Secure Status</th>
              <th>Unsecure Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.connectionStatus}>
                  <span
                    className={styles.statusIndicator}
                    style={{
                      backgroundColor: connectionStatus.connection_established
                        ? "green"
                        : "red",
                    }}
                  />
                  <span>
                    {connectionStatus.connection_established
                      ? "Connection Established"
                      : "Connection Not Established"}
                  </span>
                </div>
                <div className={styles.dataTransmissionStatus}>
                  <span
                    className={styles.statusIndicator}
                    style={{
                      backgroundColor: connectionStatus.data_transmitted
                        ? "green"
                        : "red",
                    }}
                  />
                  <span>
                    {connectionStatus.data_transmitted
                      ? "Data Transmitted"
                      : "Data Not Transmitted"}
                  </span>
                </div>
              </td>
              <td>
                <div className={styles.connectionStatus}>
                  <span
                    className={styles.statusIndicator}
                    style={{
                      backgroundColor: connectionStatus.connection_established
                        ? "green"
                        : "red",
                    }}
                  />
                  <span>
                    {connectionStatus.connection_established
                      ? "Connection Established"
                      : "Connection Not Established"}
                  </span>
                </div>
                <div className={styles.dataTransmissionStatus}>
                  <span
                    className={styles.statusIndicator}
                    style={{
                      backgroundColor: connectionStatus.data_transmitted
                        ? "green"
                        : "red",
                    }}
                  />
                  <span>
                    {connectionStatus.data_transmitted
                      ? "Data Transmitted"
                      : "Data Not Transmitted"}
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className={`${styles.gridItem} ${styles.gridItem2}`}>
          <div className={styles.innerGrid}>
            <button
              className={styles.innerGridItem}
              onClick={() => handleNetworkSelected("incomingUnsecure")}
            >
              Incoming Data Unsecure
            </button>
            <button
              className={styles.innerGridItem}
              onClick={() => handleNetworkSelected("outgoingUnsecure")}
            >
              Outgoing Data Unsecure
            </button>
            <button
              className={styles.innerGridItem}
              onClick={() => handleNetworkSelected("incomingSecure")}
            >
              Incoming Data Secure
            </button>
            <button
              className={styles.innerGridItem}
              onClick={() => handleNetworkSelected("outgoingSecure")}
            >
              Outgoing Data Secure
            </button>
          </div>
        </div>
        <div className={`${styles.gridItem} ${styles.gridItem3}`}>
          {showChartPopup && (
            <ChartPopup
              network={selectedNetwork}
              networkName={getNetworkName(selectedNetwork)}
              onClose={closeChartPopup}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
