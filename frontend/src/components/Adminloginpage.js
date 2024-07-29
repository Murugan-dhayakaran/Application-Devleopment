import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../pages/css/LoginPage.css';

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Please fill out all fields');
      return;
    }
    const user = { username, password };
    dispatch(setUser(user));
    navigate('/admin-dashboard');
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p>
          {/* <Link to="/adminside">Back to Admin Side</Link> */}
        </p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
