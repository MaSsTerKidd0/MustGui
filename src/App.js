// App.js
import React, { useState, useEffect } from "react";
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
import Logo from "./Components/Logo/Logo";
import cursorLevi from "./assets/pictures/Levi_Airplane_32x32.png";
import Loader from "./Components/Loader/Loader";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Logo />
      <div style={{ cursor: `url(${cursorLevi}), auto` }}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/AboutUs" element={<AboutUsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route
              path="/config"
              element={<ProtectedRoute path="/config" component={ConfigPage} />}
            />
            <Route
              path="/HR"
              element={
                <ProtectedRoute path="/HR" component={AdminUserManagement} />
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
