import React from "react";
import "./DashboardPage.css";
import Navbar from "../../Components/Navbar/Navbar";
import AudioVisualizer from "../../Components/AudioVisualizer/AudioVisualizer";
import audioex from "../../assets/audioexamples/song.mp3";
import { useRef } from "react";
import Footer from "../../Components/Footer/Footer";

const DashboardPage = () => {
  const wavesurfer = useRef(null);

  return (
    <div className="dashboard">
      <Navbar />
      <div className="grid-container">
        <div className="grid-item grid-item-1">Item 1</div>
        <div className="grid-item grid-item-2">Item 2</div>
        <div className="grid-item grid-item-3">Item 3</div>
      </div>
      <Footer />
    </div>
  );
};

{
  /* <AudioVisualizer url={audioex} wavesurferRef={wavesurfer} /> */
}
export default DashboardPage;
