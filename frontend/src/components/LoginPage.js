import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
// import '../pages/css/LoginPage.css';
import p001 from '../pages/css/p001.jpg';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [userType, setUserType] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Email:', email, 'Password:', password);
      if (email === 'admin@example.com') {
        setUserType('admin');
        navigate('/adminside');
      } 
       else {
        setUserType('user');
        navigate('/side');
      }
      const user = { email, password, userType };
      dispatch(setUser(user));
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-content">
          <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account? <Link to="/register">Register here</Link>
            </p>

          </div>
          <div className="image-container">
            <img src={p001} alt="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
