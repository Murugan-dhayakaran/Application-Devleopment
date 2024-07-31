import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../pages/css/RegistrationPage.css';
import p001 from '../pages/css/p001.jpg';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^[0-9]{10}$/;
    return re.test(String(phoneNumber));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !phoneNumber || !password || !confirmPassword) {
      alert('Please fill out all fields');
      return;
    }
    if (!validateEmail(email)) {
      alert('Please enter a valid email');
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      alert('Please enter a valid phone number');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const user = { username, email, phoneNumber, password };
    dispatch(setUser(user));
    navigate('/landing');
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="form-container">
          <h2>Registration</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
              />
            </div>
            <button type="submit" className="btn">Register</button>
          </form>
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
        <div className="registration-image-container">
          <img src={p001} alt="Registration" />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
