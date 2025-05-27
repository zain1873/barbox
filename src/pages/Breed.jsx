import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext'; // ✅ context import

function DogBreedStep() {
  const [breed, setBreed] = useState('');
  const navigate = useNavigate();
  const { updateSiteData } = useSiteData(); // ✅ use context

  const handleContinue = () => {
    updateSiteData("dog", { breed }); // ✅ context update
    navigate('/adoption-date-step', { state: { breed } });
  };

  const handleSkip = () => {
    updateSiteData("dog", { breed: '' }); // ✅ context update even if skipped
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
