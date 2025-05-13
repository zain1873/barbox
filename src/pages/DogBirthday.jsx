import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdoptionDateStep() {
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const isValidDate = (value) => {
    const regex = /^(0[1-9]|1[0-2])\/\d{4}$/; // MM/YYYY
    return regex.test(value);
  };

  const handleContinue = () => {
    if (!date || isValidDate(date)) {
      setError('');
      navigate('/food-preferences', { state: { adoptionDate: date || null } });
    } else {
      setError('Invalid date');
    }
  };

  const handleSkip = () => {
    navigate('/food-preferences', { state: { adoptionDate: null } });
  };

  return (
    <div className="adoption-date-container">
        <h1 className='theme-title mb-4'>
            When is Dog's birthday?
        </h1>
      <p className="adoption-message">
        Or adoption day. We want to help celebrate their special day!
      </p>

      <input
        type="text"
        placeholder="MM/YYYY"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={`adoption-input ${error ? 'input-error' : ''}`}
      />
      {error && <p className="error-text">Error: {error}</p>}

      <p className="skip-link" onClick={handleSkip}>
        Or, skip this step
      </p>

      <button className="continue-button" onClick={handleContinue}>
        CONTINUE
      </button>
    </div>
  );
}

export default AdoptionDateStep;
