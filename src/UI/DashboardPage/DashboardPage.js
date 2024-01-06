import React from 'react';
import './DashboardPage.css';
import Navbar from '../../Components/Navbar/Navbar';

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="grid-container">
        <div className="grid-item grid-item-1">Item 1</div>
        <div className="grid-item grid-item-2">Item 2</div>
        <div className="grid-item grid-item-3">Item 3</div>
        <div className="grid-item grid-item-4">Footer</div>
      </div>
    </div>
  );
};

export default DashboardPage;
