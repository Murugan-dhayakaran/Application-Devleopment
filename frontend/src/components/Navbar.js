import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/css/Navbar.css';
import logo from '../pages/css/p7.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/dash">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <p className="navbar-name">Fashion Rental</p>
        <img src={logo} alt="Fashion Rental Logo" className="navbar-logo" />
      </div>
    </nav>
  );
};

export default Navbar;
