import React from 'react';
import styles from './Loader.module.css'; // Import the CSS module
import Gear from '../../assets/pictures/rust_gear_logo.png'; // Assuming this is the path to your image
import M_LOGO from '../../assets/pictures/rust_m_logo.png'; // Assuming this is the path to your image

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <img src={Gear} alt="Loading..." className={styles.spinnerContainer} />
      <img src={M_LOGO} alt="Inner" className={styles.innerImage} style={{ zIndex: 2 }} />
    </div>
  );
};

export default Loader;
