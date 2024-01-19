import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./UI/LoginPage/LoginPage";
import DashboardPage from "./UI/DashboardPage/DashboardPage";
import "./App.css";
import ProfilePage from "./UI/ProfilePage/ProfilePage";
import AboutUsPage from "./UI/AboutPage/AboutPage";
import ConfigPage from "./UI/ConfigurationPage/ConfigPage";
import AdminUserManagement from "./UI/HRPage/HRPage";

import cursorLevi from "./assets/pictures/Levi_Airplane_32x32.png";

const App = () => {
  return (
    <div style={{ cursor: `url(${cursorLevi}), auto` }}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/config" element={<ConfigPage />} />
          <Route path="/HR" element={<AdminUserManagement />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
