import React, { useState } from "react";
import styles from "./Navbar.module.css";
import PersonIcon from "../../assets/pictures/person_icon.png";
function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.nav__brand}>Must</h1>
      <ul>
        <li className={`${styles.nav__item} ${styles.nav__itemTriangle}`}>
          <a href="/AboutUs" className={styles.nav__link}>
            About Us
          </a>
        </li>
        <li className={`${styles.nav__item} ${styles.nav__itemTriangle}`}>
          <a href="/dashboard" className={styles.nav__link}>
            Dashboard
          </a>
        </li>
        <li className={`${styles.nav__item} ${styles.nav__itemTriangle}`}>
          <a href="/config" className={styles.nav__link}>
            Configurations
          </a>
        </li>
        <li className={`${styles.nav__item} ${styles.nav__itemTriangle}`}>
          <a href="/HR" className={styles.nav__link}>
            Manage
          </a>
        </li>
      </ul>
      <ul>
        <li className={styles.nav__item}>
          <a href="/profile" className={styles.nav__link}>
            <img
              className={styles.nav__icon}
              src={PersonIcon}
              alt="Person Icon"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
