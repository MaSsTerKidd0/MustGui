import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {

  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        Must
      </a>
      <ul >
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
          <a href="#" className="nav__link">
            Settings
          </a>
        </li>
      </ul>
      <ul>
        <li className="nav__item">
          <a href="#" className="nav__link">
          <img className = "nav__icon" src='/assets/pictures/person_icon.png' alt="Person Icon" />
          </a>
        </li>
      </ul>
      
    </nav>  
  );
}

export default Navbar;