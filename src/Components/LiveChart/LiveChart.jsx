import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./LiveChart.module.css";

const LiveChart = ({ network, networkName }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const maxDataPoints = 25; // Maximum data points to show on the chart at any time

  const fetchData = async () => {
    try {
      let response;
      switch (network) {
        case "incomingUnsecure":
          response = await axios.get(
            "http://127.0.0.1:8080/dashboard/incomingUnsecure"
          );
          break;
        case "outgoingUnsecure":
          response = await axios.get(
            "http://127.0.0.1:8080/dashboard/outgoingUnsecure"
          );
          break;
        case "incomingSecure":
          response = await axios.get(
            "http://127.0.0.1:8080/dashboard/incomingSecure"
          );
          break;
        case "outgoingSecure":
          response = await axios.get(
            "http://127.0.0.1:8080/dashboard/outgoingSecure"
          );
          break;
        default:
          return;
      }
      console.log("Fetched data:", response.data); // Add this log
      updateChartData(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Cannot load chart");
    }
  };

  const updateChartData = (newData) => {
    setData((currentData) => {
      let updatedData = [...currentData, ...newData];
      // Keep only the last maxDataPoints elements
      if (updatedData.length > maxDataPoints) {
        updatedData = updatedData.slice(updatedData.length - maxDataPoints);
      }
      return updatedData;
    });
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      await fetchData();
    }, 2000); // Fetch new data every 2 seconds

    return () => clearInterval(interval);
  }, [network]);

  if (!network) {
    return <div>No network selected</div>;
  }

  if (error) {
    return <div className={styles.errorMessage}>{error}</div>;
  }

  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.chartTitle}>{networkName}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="time" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip
            wrapperStyle={{ backgroundColor: "#fff", borderColor: "lightblue" }}
            labelStyle={{ color: "#333" }}
            itemStyle={{ color: "#666" }}
          />
          <Line
            type="monotone"
            dataKey="packet_count"
            stroke="#82ca9d"
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LiveChart;
