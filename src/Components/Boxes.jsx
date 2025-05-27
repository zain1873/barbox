import React from 'react';

const BoxHistory = () => {
  const boxHistory = [
    {
      id: 1,
      month: 'January 2025',
      theme: 'Winter Wonderland',
      status: 'Delivered',
      rating: 5,
      image: null
    },
    {
      id: 2,
      month: 'December 2024',
      theme: 'Holiday Cheer',
      status: 'Delivered',
      rating: 5,
      image: null
    },
    {
      id: 3,
      month: 'November 2024',
      theme: 'Thanksgiving Feast',
      status: 'Delivered',
      rating: 4,
      image: null
    },
    {
      id: 4,
      month: 'October 2024',
      theme: 'Spooky Season',
      status: 'Delivered',
      rating: 5,
      image: null
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : 'empty'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div class="container">
        <div className="box-history-container animate-bottom">
      <div className="box-history-header">
        <h2 className="theme-title ">Box History</h2>
        <p className="box-history-subtitle">See all the boxes Buddy has received</p>
      </div>

      <div className="box-history-list">
        {boxHistory.map((box) => (
          <div key={box.id} className="box-history-item animate-bottom">
            <div className="box-image-placeholder">
              {/* Placeholder for box image */}
            </div>
            
            <div className="box-details">
              <div className="box-main-info">
                <h3 className="box-month">{box.month}</h3>
                <p className="box-theme">{box.theme}</p>
                <div className="box-status">
                  <span className="status-badge">{box.status}</span>
                </div>
              </div>
            </div>

            <div className="box-actions">
              <div className="box-rating">
                {renderStars(box.rating)}
              </div>
              <button className="view-details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BoxHistory;