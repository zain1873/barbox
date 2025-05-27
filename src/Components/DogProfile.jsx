import React from 'react';

const DogProfile = () => {
  return (
    <div className="dog-profile-container">
      {/* Header Section */}
      <div className="profile-header">
        <h1 className="theme-title ">Buddy's Profile</h1>
        <button className="edit-profile-btn">
          <span className="edit-icon">✏️</span>
          Edit Profile
        </button>
      </div>

      {/* Dog Info Section */}
      <div className="dog-info-section animate-bottom">
        <div className="dog-avatar">
          {/* Circular placeholder for dog photo */}
        </div>
        
        <div className="dog-basic-info">
          <h2 className="dog-name">Buddy</h2>
          <p className="dog-details">Golden Retriever • 3 years old</p>
          <div className="dog-size-badge">
            <span className="size-text">Medium Dog (35 lbs)</span>
          </div>
        </div>
      </div>

      {/* Preferences and Allergies Section */}
      <div className="profile-content">
        <div className="preferences-section animate-left">
          <h3 className="section-title">Preferences</h3>
          
          <div className="preference-item">
            <span className="preference-label">Toy Type:</span>
            <span className="preference-value">Plush Toys</span>
          </div>
          
          <div className="preference-item">
            <span className="preference-label">Activity Level:</span>
            <span className="preference-value">High Energy</span>
          </div>
          
          <div className="preference-item">
            <span className="preference-label">Chew Strength:</span>
            <span className="preference-value">Moderate</span>
          </div>
        </div>

        <div className="allergies-section animate-right">
          <h3 className="section-title">Allergies & Restrictions</h3>
          
          <div className="allergy-item">
            <span className="allergy-text">No Chicken</span>
          </div>
          
          <div className="allergy-item">
            <span className="allergy-text">Grain-Free Preferred</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogProfile;