import React, { useState } from 'react';
import "../styles/dashboard.css";
import Boxes  from '../Components/Boxes'
import DogProfile from '../Components/DogProfile';
import VetChat from '../Components/VetChat';
import Account from '../Components/Account';

import barkboxLogo from "../assets/barkbox-logo.svg"

const BarkBoxDashboard = () => {
  const [activeTab, setActiveTab] = useState('subscription');

  const renderTabContent = () => {
    switch(activeTab) {
      case 'subscription':
        return (
          <div className="row">
            {/* Current Subscription */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 animate-left">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title mb-0">Current Subscription</h5>
                    <span className="badge bg-success">Active</span>
                  </div>
                  
                  <div className="subscription-details">
                    <div className="detail-row">
                      <span className="detail-label">Plan:</span>
                      <span className="detail-value">6 Month Subscription</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Price:</span>
                      <span className="detail-value">$27/month</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Next Billing:</span>
                      <span className="detail-value">February 15, 2025</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Dog Size:</span>
                      <span className="detail-value">Medium (20-50 lbs)</span>
                    </div>
                  </div>

                  <div className="subscription-actions mt-4">
                    <button className="btn btn-outline-secondary btn-sm me-2">
                      <i className="bi bi-pause-fill"></i> Pause Subscription
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                      <i className="bi bi-skip-forward-fill"></i> Skip Next Box
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Box Preview */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100">
                <div className="card-body animate-right">
                  <h5 className="card-title mb-3">Next Box Preview</h5>
                  <p className="text-muted mb-3">February 2025 - "Pawsome Adventures"</p>
                  
                  <div className="box-preview-image mb-3">
                    <div className="preview-placeholder">
                      <i className="bi bi-image" style={{fontSize: '3rem', color: '#ddd'}}></i>
                    </div>
                  </div>

                  <div className="box-contents">
                    <div className="content-item">
                      <i className="bi bi-box text-primary"></i>
                      <span>2 Adventure-themed toys</span>
                    </div>
                    <div className="content-item">
                      <i className="bi bi-heart text-danger"></i>
                      <span>2 All-natural treat bags</span>
                    </div>
                    <div className="content-item">
                      <i className="bi bi-truck text-success"></i>
                      <span>Ships February 10th</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'my-boxes':
        return (
          <Boxes />
        );
      
      case 'dog-profile':
        return (
          <DogProfile/>
        );
      
      case 'vet-chat':
        return (
         <VetChat />
        );
      
      case 'account':
        return (
          <Account />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="barkbox-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <div className="navbar-logo ">
                <img className='obj_fit' src={barkboxLogo} alt="" />
              </div>
            </div>
            <div className="col-auto">
              <button className="btn btn-outline-secondary btn-sm">
                <i className="bi bi-question-circle me-1"></i>
                Get help
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        {/* Welcome Section */}
        <div className="welcome-section mb-4">
          <h1 className="theme-title ">Welcome back! 🐕</h1>
          <p className="welcome-subtitle">Manage Buddy's subscription and see what's coming next</p>
        </div>

        {/* Stats Cards */}
        <div className="row mb-4">
          <div className="col-lg-3 col-md-6 mb-3">
            <div className="stat-card animate-bottom">
              <div className="stat-icon boxes">
                <i className="bi bi-box icon-bounce "></i>
              </div>
              <div className="stat-number icon-bounce">12</div>
              <div className="stat-label">Boxes Delivered</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-3">
            <div className="stat-card animate-bottom">
              <div className="stat-icon toys">
                <i className="bi bi-heart icon-bounce"></i>
              </div>
              <div className="stat-number icon-bounce">48</div>
              <div className="stat-label">Toys Loved</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-3">
            <div className="stat-card animate-bottom">
              <div className="stat-icon treats ">
                <i className="bi bi-gift icon-bounce"></i>
              </div>
              <div className="stat-number icon-bounce">24</div>
              <div className="stat-label">Treats Enjoyed</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-3">
            <div className="stat-card animate-bottom">
              <div className="stat-icon delivery">
                <i className="bi bi-calendar3 icon-bounce"></i>
              </div>
              <div className="stat-number icon-bounce">February 15, 2025</div>
              <div className="stat-label">Next Delivery</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <ul className="nav nav-tabs dashboard-tabs mb-4">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'subscription' ? 'active' : ''}`}
              onClick={() => setActiveTab('subscription')}
            >
              Subscription
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'my-boxes' ? 'active' : ''}`}
              onClick={() => setActiveTab('my-boxes')}
            >
             My Boxes
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'dog-profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('dog-profile')}
            >
              Dog Profile
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'vet-chat' ? 'active' : ''}`}
              onClick={() => setActiveTab('vet-chat')}
            >
              Vet Chat
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'account' ? 'active' : ''}`}
              onClick={() => setActiveTab('account')}
            >
              Account
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default BarkBoxDashboard;