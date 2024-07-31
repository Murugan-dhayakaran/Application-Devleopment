// src/pages/Dashboard.js
import React from 'react';
import Adminsidebar from './Adminsidebar';
import '../pages/css/Dashboard.css';
import '../pages/css/p05.jpeg';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Adminsidebar />
      <div className="dashboard-content">
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
            <div className="dashboard-card">
              <h3>New Registrations</h3>
              <p>123</p>
            </div>
            <div className="dashboard-card">
              <h3>Pending Orders</h3>
              <p>45</p>
            </div>
          </div>
          {/* <div className="dashboard-chart">
            <h2>Sales Overview</h2>
            Add chart here
            <img src="p10" alt="Sales Chart" />
          </div> */}
          <div className="dashboard-recent-activity">
            <h2>Recent Activity</h2>
            <ul>
              <li>User John Doe purchased Item XYZ.</li>
              <li>Order #1234 has been shipped.</li>
              <li>Product ABC is now back in stock.</li>
            </ul>
          </div>
          <div className="dashboard-reports">
            <h2>Reports</h2>
            <div className="report-links">
              <a href="/reports/sales" className="report-link">Sales Report</a>
              <a href="/reports/orders" className="report-link">Orders Report</a>
              <a href="/reports/users" className="report-link">Users Report</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
