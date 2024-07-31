import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/css/Sidebar.css';
import F21 from '../pages/css/F21.jpeg';

const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-container">
        <img src={F21} alt="Profile" className="profile-image" />
        <p className="profile-name">Admin</p>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/" className="sidebar-link">Home</Link>
        </li>
        <li>
          <Link to="/rental" className="sidebar-link">Rental</Link>
        </li>
        <li>
          <Link to="" className="sidebar-link">Swapping</Link>
        </li>
        <li>
          <Link to="/login" className="sidebar-link">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
