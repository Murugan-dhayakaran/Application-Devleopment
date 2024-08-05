// src/pages/Dashboard.js
import React from 'react';
// import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../pages/css/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="dashboard-content">
        {/* <Navbar /> */}
        <div className="dashboard-container">
          <h1 className="dashboard-heading">Dashboard</h1>
          <div className="dashboard-overview">
            <div className="dashboard-card">
              <h3>Total Users</h3>
              <p>1,234</p>
            </div>
            <div className="dashboard-card">
              <h3>Total Sales</h3>
              <p>$12,345</p>
            </div>
            <div className="dashboard-card">
              <h3>Total Orders</h3>
              <p>567</p>
            </div>
          </div>
          <div className="dashboard-chart">
            <h2>Sales Overview</h2>
            {/* <img src={chartImage} alt="Sales Chart" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
