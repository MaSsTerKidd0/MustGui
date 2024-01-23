import React from "react";
import styles from "./DashboardPage.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const DashboardPage = () => {
  return (
    <div className={styles.dashboard}>
      <Navbar />
      <div className={styles.gridContainer}>
        <div className={`${styles.gridItem} ${styles.gridItem1}`}></div>
        <div className={`${styles.gridItem} ${styles.gridItem2}`}></div>
        <div className={`${styles.gridItem} ${styles.gridItem3}`}></div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
