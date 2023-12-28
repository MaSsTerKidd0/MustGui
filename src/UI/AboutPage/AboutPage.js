import React from 'react';
import './AboutPage.css'; // Assuming you have an external CSS file
import Navbar from '../../Components/Navbar/Navbar';

const AboutPage = () => {
  return (
    <div>
      <Navbar/>
    <div className="container">
      <h4 className="title">About Us</h4>
      <p className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        
      </p>
    </div>
    </div>
  );
};

export default AboutPage;
