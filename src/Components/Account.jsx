import React from 'react';

const Account = () => {
  return (
    <div className="account-container">
      <div className="account-content">
        {/* Account Information Section */}
        <div className="account-section animate-bottom">
          <h2 className="section-title">Account Information</h2>
          
          <div className="account-details animate-bottom">
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">Zain@gmail.com</span>
            </div>
            
            <div className="detail-item">
              <span className="detail-label">Member Since:</span>
              <span className="detail-value">January 2024</span>
            </div>
            
            <div className="detail-item">
              <span className="detail-label">Customer ID:</span>
              <span className="detail-value">#BRK123456</span>
            </div>
          </div>

          <button className="account-settings-btn">
            <svg className="settings-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Account Settings
          </button>
        </div>

        {/* Billing & Shipping Section */}
        <div className="billing-section animate-right">
          <h2 className="section-title">Billing & Shipping</h2>
          
          <div className="billing-content">
            <div className="payment-method">
              <h3 className="subsection-title">Payment Method</h3>
              <div className="payment-info">
                <svg className="card-icon" width="20" height="16" viewBox="0 0 24 19" fill="none">
                  <rect x="1" y="3" width="22" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M1 7h22" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span className="card-number">•••• •••• •••• 4242</span>
              </div>
            </div>

            <div className="shipping-address">
              <h3 className="subsection-title">Shipping Address</h3>
              <div className="address-info">
                <div className="address-line">123 Dog Street</div>
                <div className="address-line">Puppy City, PC 12345</div>
              </div>
            </div>

            <button className="update-billing-btn">
              Update Billing Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;