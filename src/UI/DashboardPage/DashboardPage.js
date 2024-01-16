import React from "react";
import "./DashboardPage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import AudioReactLoader from "../../Components/AudioVisualizer/AudioReactLoader";

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="grid-container">
        <div className="grid-item grid-item-1">Item 1</div>
        <div className="grid-item grid-item-2">Item 2</div>
        <div className="grid-item grid-item-3">
          <AudioReactLoader />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
