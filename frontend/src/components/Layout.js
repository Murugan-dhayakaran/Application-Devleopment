// src/components/Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import '../pages/css/HomePage.css'; // Ensure to import your CSS here if needed

const Layout = ({ children }) => {
  const location = useLocation();
  const showSidebar = location.pathname === '/order';

  return (
    <div className="layout-container">
      {showSidebar && <Sidebar />}
      <div className={`main-content ${showSidebar ? 'with-sidebar' : ''}`}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
