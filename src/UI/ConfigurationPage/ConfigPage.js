import React from "react";
import "./ConfigPage.css";
import Navbar from "../../Components/Navbar/Navbar";

const ConfigPage = () => {
  return (
    <div>
      <Navbar />

      <div className="config-page">
        <div className="config-header">
          <h1>Configuration Settings</h1>
        </div>
        <div className="config-body">
          <div className="config-item">
            <label>Setting 1</label>
            <input type="text" />
          </div>
          <div className="config-item">
            <label>Setting 2</label>
            <input type="text" />
          </div>
          <div className="config-item">
            <label>Setting 3</label>
            <input type="text" />
          </div>
          {/* Add more configuration items here */}
        </div>
        <div className="config-footer">
          <button>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default ConfigPage;
