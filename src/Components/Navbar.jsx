import React, { useState } from 'react';
import '../styles/navbar.css';
import NavbarLogo from "../assets/barkbox-logo.svg"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      {/* Desktop Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid nav-main">
        
          <a className='navbar-logo order-2' href="">
          <img className='obj_fit' src={NavbarLogo} alt="" />
          </a>
          <button 
            className={`navbar-toggler order-3 ${isOpen ? 'collapsed' : ''}`} 
            type="button" 
            onClick={toggleMenu}
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/help">
                Get help <i className="bi bi-chat-dots-fill chat-icon"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/themes">Monthly Themes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link theme_btn" href="/toy-selector">GET BARKBOX</a>
              </li>
            </ul>
         
          </div>
          <div className="btn-mbl d-lg-none d-md-block">
                <a className="nav-link theme_btn" href="/toy-selector">GET BARKBOX</a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <a href="/get-barkbox" className="mobile-menu-item d-md-none">Get BarkBox</a>
          <a href="/themes" className="mobile-menu-item">Monthly Themes</a>
          <a href="/gifts" className="mobile-menu-item">Gifts</a>
          <a className="mobile-menu-item" href="/help">
            Get help <i className="bi bi-chat-dots-fill chat-icon"></i>
          </a>
          <a href="/login" className="mobile-menu-item">Login</a>
          {/* <div className="mobile-menu-separator"></div>
          <h6 className="mobile-menu-subtitle">MORE FROM BARK</h6>
          <a href="/barkbox" className="mobile-menu-item">BarkBox</a> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;