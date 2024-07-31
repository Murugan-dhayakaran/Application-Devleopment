import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import LandingPage from './components/LandingPage';
import AdminDashboard from './components/AdminDashboard';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import AdminLoginPage from './components/AdminLoginPage';
import OrderPage from './components/OrderPage';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/side" element={<Sidebar />} />
          <Route path="/adminside" element={<AdminDashboard />} />
          <Route path="/adminlogin" element={<AdminLoginPage />} />
          <Route path="/order" element={<OrderPage />} />
          
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;