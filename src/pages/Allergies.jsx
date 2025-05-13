import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FoodPreferencesStep() {
  const [preferences, setPreferences] = useState([]);
  const navigate = useNavigate();

  const options = ['Chicken', 'Turkey', 'Beef', 'None'];

  const handleToggle = (option) => {
    if (option === 'None') {
      // If 'None' is selected, deselect all others
      setPreferences(['None']);
    } else {
      // If any other option is selected, remove 'None' if selected
      const updated = preferences.includes(option)
        ? preferences.filter((item) => item !== option)
        : [...preferences.filter((item) => item !== 'None'), option];
      setPreferences(updated);
    }
  };

  const handleContinue = () => {
    navigate('/you-email', { state: { restrictions: preferences } });
  };

  return (
   <section className='allergies'>
     <div className="food-preference-container">
        <h1 className='theme-title'>
            Any allergies?
        </h1>
      <p className="description">
        Our treats are formulated by a certified nutritionist and made in the USA and Canada
        to make sure your pup is happy and healthy.
      </p>

      <p className="question"><strong>Please do <u>not</u> send any...</strong></p>

      <div className="food-options">
        {options.map((option) => (
          <div
            key={option}
            className={`food-box ${preferences.includes(option) ? 'selected' : ''}`}
            onClick={() => handleToggle(option)}
          >
            <input
              type="checkbox"
              checked={preferences.includes(option)}
              readOnly
            />
            <span>{option}</span>
          </div>
        ))}
      </div>

      <p className="note">
        If kutti has other dietary needs, please chat with us after you checkout and we'll do our best to accommodate.
      </p>

      <button className="continue-button theme_btn" onClick={handleContinue}>
        CONTINUE
      </button>
    </div>
   </section>
  );
}

export default FoodPreferencesStep;
