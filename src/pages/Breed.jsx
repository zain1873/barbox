import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DogBreedStep() {
  const [breed, setBreed] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    // Continue with or without breed
    navigate('/adoption-date-step', { state: { breed } });
  };

  const handleSkip = () => {
    // Proceed without entering breed
    navigate('/adoption-date-step', { state: { breed: '' } });
  };

  return (
    <section className='breed-section'>
      <div className="dog-breed-container">
        <h1 className='theme-title mb-4'> What's breed of your Dog</h1>
      <input
        type="text"
        placeholder="Dog breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        className="dog-breed-input"
      />

      <p className="skip-link" onClick={handleSkip}>
        Or, skip this step
      </p>

      <button className="continue-button" onClick={handleContinue}>
        CONTINUE
      </button>
    </div>
    </section>
  );
}

export default DogBreedStep;
