import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../pages/css/LoginPage.css';

const LoginPage = () => {
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
    navigate('/landing');
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
        <p>
          <Link to="/adminside">Login as Admin</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
