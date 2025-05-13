import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DogIdentityStep() {
  const [dogName, setDogName] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (dogName && gender) {
      navigate('/dog-size-selector', { state: { dogName, gender } });
    }
  };

  return (
    <>
      <div className="dog-identity-container">
        <input
          type="text"
          placeholder="Dog name"
          value={dogName}
          onChange={(e) => setDogName(e.target.value)}
          className="dog-name-input"
        />

        <div className="gender-buttons">
          <button
            className={gender === 'girl' ? 'active' : ''}
            onClick={() => setGender('girl')}
          >
            She's a good girl
          </button>
          <button
            className={gender === 'boy' ? 'active' : ''}
            onClick={() => setGender('boy')}
          >
            He's a good boy
          </button>
        </div>

        <button
          className="continue-button"
          disabled={!dogName || !gender}
          onClick={handleContinue}
        >
          CONTINUE
        </button>
      </div>
    </>
  );
}

export default DogIdentityStep;
