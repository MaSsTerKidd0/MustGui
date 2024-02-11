import React from "react";
import styles from "./AboutPage.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const AboutPage = () => {
  return (
    <div className={styles.maincontainer}>
      <Navbar />
      <div className={styles.aboutus}>
        <h1>About Us</h1>
        <h2>Must: Efficient, Secure Multi-Network Data Adapter</h2>
        <p>
          Must is a highly efficient, encrypted multi-system adapter written in
          Rust.
          <br /> It's designed to optimize data transfer between networks with
          differing bandwidth capabilities.
          <br /> Acting as a smart intermediary, Must ensures the seamless and
          secure transmission of data, maximizing throughput in complex network
          environments.
        </p>
        <h3>Features</h3>
        <ul>
          <li>
            <strong>Dynamic Data Filtering:</strong> Intelligently identifies
            and processes packets meant for the target network.
          </li>
          <li>
            <strong>
              Adaptive Compression:
              <br />
            </strong>{" "}
            Reduces data size for faster transmission, adjusting compression
            levels based on network capacity.
          </li>
          <li>
            <strong>
              Robust Encryption:
              <br />
            </strong>{" "}
            Ensures data security during transit, safeguarding sensitive
            information.
          </li>
          <li>
            <strong>
              Smart Fragmentation:
              <br />
            </strong>{" "}
            Splits larger data packets when necessary to fit the bandwidth
            constraints of the receiving network.
          </li>
          <li>
            <strong>
              Bandwidth Optimization:
              <br />
            </strong>{" "}
            Dynamically adapts to network conditions to maximize data transfer
            efficiency.
          </li>
        </ul>
        <h3>Use Case</h3>
        <p>
          Ideal for scenarios where two networks with different maximum
          bandwidths need to exchange data. Perfect for a high-speed LAN
          communicating with a slower WAN, or bridging data centers with varying
          network capabilities, Must ensures optimal data flow with utmost
          security.
        </p>
        <h3>How It Works</h3>
        <ol>
          <li>
            <strong>Data Reception:</strong> Listens for incoming data from
            Network_1.
          </li>
          <li>
            <strong>Filtering:</strong> Identifies and isolates packets destined
            for Network_2.
          </li>
          <li>
            <strong>Compression and Encryption:</strong> Compresses and encrypts
            the filtered data to reduce size and enhance security.
          </li>
          <li>
            <strong>Fragmentation (If Needed):</strong> If Network_2's bandwidth
            is lower than the data size, Must fragments the data to ensure
            smooth transmission.
          </li>
          <li>
            <strong>Transmission:</strong> Sends the processed data to
            Network_2, optimizing for the available bandwidth.
          </li>
        </ol>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
