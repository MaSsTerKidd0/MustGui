import React, { useEffect, useState } from "react";
import styles from "./Loader.module.css"; // Make sure to import your CSS file

const Loader = ({ style }) => {
  return (
    <div className={styles.loaderContainer}>
      {[...Array(11)].map((_, i) => (
        <div key={i} style={style}></div> // No need for specific class names
      ))}
    </div>
  );
};

const AudioReactLoader = () => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    // Audio processing setup goes here
    // Update style state based on audio data
  }, []);

  return <Loader style={style} />;
};

export default AudioReactLoader;
