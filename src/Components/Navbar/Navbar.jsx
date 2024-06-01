import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import styles from "./Navbar.module.css";
import PersonIcon from "../../assets/pictures/person_icon.png";
import { Link as MuiLink } from "@mui/material";
import DateTimeDisplay from "../DateTimeDisplay/DateTimeDisplay";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        // Decode token using jsonwebtoken; no key needed as we are not verifying
        const decodedToken = jwt.decode(token);
        if (decodedToken) {
          setRole(decodedToken.role); // Make sure your token has 'role' in its payload
          console.log("Decoded Payload:", decodedToken);
        }
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <h1 className={styles.nav__brand}>Must</h1>
        <DateTimeDisplay />
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

        {role === "PermittedUser" && (
          <li className={`${styles.nav__item} ${styles.nav__itemTriangle}`}>
            <MuiLink href="/config" className={styles.nav__link}>
              Configurations
            </MuiLink>
          </li>
        )}
        {role === "Admin" && (
          <>
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
          </>
        )}
        <li className={styles.nav__item}>
          <MuiLink
            href="#"
            onClick={handleLogout}
            className={`${styles.logoutButton} ${styles.nav__link}`}
          >
            Logout
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
