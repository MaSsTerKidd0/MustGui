import React, { useState } from "react";
import "./Navbar.css";
import PersonIcon from "../../assets/pictures/person_icon.png";
function Navbar() {
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        Must
      </a>
      <ul>
        <li className="nav__item nav__item-triangle">
          <a href="/AboutUs" className="nav__link">
            About Us
          </a>
        </li>
        <li className="nav__item nav__item-triangle">
          <a href="/dashboard" className="nav__link">
            Dashboard
          </a>
        </li>
        <li className="nav__item nav__item-triangle">
          <a href="/config" className="nav__link">
            Configurations
          </a>
        </li>
      </ul>
      <ul>
        <li className="nav__item">
          <a href="/profile" className="nav__link">
            <img className="nav__icon" src={PersonIcon} alt="Person Icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
