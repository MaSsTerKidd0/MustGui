import React from "react";
import styles from "./Navbar.module.css";
import PersonIcon from "../../assets/pictures/person_icon.png";
import { Link as MuiLink } from "@mui/material";
import DateTimeDisplay from "../DateTimeDisplay/DateTimeDisplay";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
      <h1 className={styles.nav__brand}>Must</h1>
      <DateTimeDisplay/>
      </div>
      <ul className={styles.nav__menu}>
        <li className={`${styles.nav__item} ${styles.nav__itemTriangle}`}>
          <MuiLink href="/AboutUs" className={styles.nav__link}>
            About Us
          </MuiLink>
        </li>
        <li className={`${styles.nav__item} ${styles.nav__itemTriangle}`}>
          <MuiLink href="/dashboard" className={styles.nav__link}>
            Dashboard
          </MuiLink>
        </li>
        <li className={`${styles.nav__item} ${styles.nav__itemTriangle}`}>
          <MuiLink href="/config" className={styles.nav__link}>
            Configurations
          </MuiLink>
        </li>
        <li className={`${styles.nav__item} ${styles.nav__itemTriangle}`}>
          <MuiLink href="/HR" className={styles.nav__link}>
            Manage
          </MuiLink>
        </li>
      </ul>
      <ul className={styles.nav__menu}>
        <li className={styles.nav__item}>
          <MuiLink href="/profile" className={styles.nav__link}>
            <img
              className={styles.nav__icon}
              src={PersonIcon}
              alt="Person Icon"
            />
          </MuiLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
