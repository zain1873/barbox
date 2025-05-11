import React, { useState } from 'react';
import "../styles/login.css";
import barkBoxLogo from '../assets/barkbox-logo.svg'


const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('zain.saleem155@gmail.com');
  const [password, setPassword] = useState('•••••••••••••');

  return (
    <div className="container" >
      <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-lg-4">
          <div className="login-card shadow p-3">
            {/* Logo */}
            <div className="text-center pt-4 pb-3">
            <div className='login-logo'>
            <img class="obj_fit" alt="" src={barkBoxLogo} />
            </div>
            </div>
            
            {/* Tabs */}
            <ul className="nav nav-tabs login-tabs">
              <li className="nav-item w-50">
                <button
                  className={`nav-link w-100 ${activeTab === 'login' ? 'active fw-medium border-bottom border-dark border-2' : 'text-secondary'}`}
                  onClick={() => setActiveTab('login')}
                >
                  LOGIN
                </button>
              </li>
              <li className="nav-item w-50">
                <button
                  className={`nav-link w-100 ${activeTab === 'signup' ? 'active fw-medium border-bottom border-dark border-2' : 'text-secondary'}`}
                  onClick={() => setActiveTab('signup')}
                >
                  SIGN UP
                </button>
              </li>
            </ul>
            
            {/* Form */}
            <div className="login-card-body p-4">
              <div className="mb-3">
                <div className="input-group mb-3">
                  <span className="input-group-text bg-light border-0" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    className="form-control bg-light border-0"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                
                <div className="input-group">
                  <span className="input-group-text bg-light border-0" style={{ backgroundColor: '#EBF5FF' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <input
                    type="password"
                    className="form-control border-0"
                    style={{ backgroundColor: '#EBF5FF' }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
              </div>
              
              {activeTab === 'login' && (
                <>
                  <div className="text-center mb-3">
                    <a href="#" className="text-primary small">Want to reset your password?</a>
                  </div>
                  
<               a style={{ textDecoration: 'none' }} href="/dashboard">
                  <button className="btn theme_btn w-100 py-2 mb-3">
                      Continue
                  </button>
                </a>
                  
                  <button className="btn theme_btn w-100 py-2 login-p">
                    Log In without a password
                  </button>
                </>
              )}
              
              {activeTab === 'signup' && (
                <>
                  <div className="text-center mb-3 small text-secondary">
                    By signing up, you agree to our <a href="#" className="text-primary">terms of service</a> and <a href="#" className="text-primary">privacy policy</a>.
                  </div>
                  
                  <button className="btn theme_btn w-100 py-2">
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthTabs;