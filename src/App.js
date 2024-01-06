import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './UI/LoginPage/LoginPage';
import DashboardPage from './UI/DashboardPage/DashboardPage';
import './App.css';
import ProfilePage from './UI/ProfilePage/ProfilePage';
import AboutUsPage from './UI/AboutPage/AboutPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;