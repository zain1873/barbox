import React, { useState } from 'react';
import { User, Clock, MapPin, UserCircle, Clipboard, LogOut } from 'lucide-react';
import '../styles/Dashboard.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Dashboard = () => {
  const navigate = useNavigate(); 
  const [activeTab, setActiveTab] = useState('my-account');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'my-account':
        return (
          <div className="tab-content">
            <h2 className="theme-title">My Account</h2>
            <p>Email: Zain@gmail.com</p>
            <p>Member since: January 15, 2025</p>
            <p>Subscription: Premium</p>
          </div>
        );
      case 'order-history':
        return (
          <div className="tab-content">
            <h2 className="theme-title">Order History</h2>
            <div className="order-item">
              <p><strong>Order #12345</strong> - May 5, 2025</p>
              <p>Total: $125.99</p>
              <p>Status: Delivered</p>
            </div>
            <div className="order-item">
              <p><strong>Order #12290</strong> - April 18, 2025</p>
              <p>Total: $67.50</p>
              <p>Status: Delivered</p>
            </div>
          </div>
        );
      case 'addresses':
        return (
          <div className="tab-content">
            <h2 className="theme-title">Addresses</h2>
            <div className="address-item">
              <h3 className="theme-title">Home Address</h3>
              <p>123 Main Street</p>
              <p>Apartment 4B</p>
              <p>Lahore, Punjab</p>
              <p>Pakistan</p>
            </div>
            <div className="address-item">
              <h3 className="theme-title">Work Address</h3>
              <p>456 Business Avenue</p>
              <p>Suite 300</p>
              <p>Lahore, Punjab</p>
              <p>Pakistan</p>
            </div>
          </div>
        );
      case 'personal-profile':
        return (
          <div className="tab-content">
            <h2 className="theme-title">Personal Profile</h2>
            <p>Name: Zain Saleem</p>
            <p>Phone: +92 300 1234567</p>
            <p>Date of Birth: March 15, 1990</p>
            <p>Preferred Language: English</p>
          </div>
        );
      case 'manage-subscription':
        return (
          <div className="tab-content">
            <h2 className="theme-title">Manage Subscription</h2>
            <p>Current plan: Premium</p>
            <p>Billing cycle: Monthly</p>
            <p>Next billing date: June 10, 2025</p>
            <p>Payment method: Visa ending in 4321</p>
          </div>
        );
      default:
        return <div className="tab-content">Select a tab to view content</div>;
    }
  };

  return (
  
    <div className="dashboard-container">
       

      <div className="sidebar">
        <div
          className={`sidebar-item ${activeTab === 'my-account' ? 'active' : ''}`}
          onClick={() => setActiveTab('my-account')}
        >
          <User className="sidebar-icon" />
          <span>My Account</span>
        </div>
        <div
          className={`sidebar-item ${activeTab === 'order-history' ? 'active' : ''}`}
          onClick={() => setActiveTab('order-history')}
        >
          <Clock className="sidebar-icon" />
          <span>Order History</span>
        </div>
        <div
          className={`sidebar-item ${activeTab === 'addresses' ? 'active' : ''}`}
          onClick={() => setActiveTab('addresses')}
        >
          <MapPin className="sidebar-icon" />
          <span>Addresses</span>
        </div>
        <div
          className={`sidebar-item ${activeTab === 'personal-profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal-profile')}
        >
          <UserCircle className="sidebar-icon" />
          <span>Personal Profile</span>
        </div>
        <div
          className={`sidebar-item ${activeTab === 'manage-subscription' ? 'active' : ''}`}
          onClick={() => setActiveTab('manage-subscription')}
        >
          <Clipboard className="sidebar-icon" />
          <span>Manage Subscription</span>
        </div>
        <div className="sidebar-item" onClick={() => navigate('/')}>
          <LogOut className="sidebar-icon" />
          <span>Log out</span>
        </div>
      </div>
      <div className="content">
        <div className="welcome-header">
          <h1 className="theme-title">Hi, Zain Saleem</h1>
          <p>Welcome to your account.</p>
          <div className="logout-button">
            <LogOut className="logout-icon" />
            <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
              Log out
            </span>
          </div>
        </div>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Dashboard;
