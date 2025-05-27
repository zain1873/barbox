import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext'; // ✅ context import

function EmailStep() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [marketingOptIn, setMarketingOptIn] = useState(true);
  const navigate = useNavigate();
  const { updateSiteData } = useSiteData(); // ✅ use context

  const handleContinue = () => {
    if (!email.trim()) {
      setError('Required field.');
    } else {
      setError('');
      updateSiteData("contact", { email, marketingOptIn }); // ✅ context update
      navigate('/choose-pricing-pan', { state: { email, marketingOptIn } });
    }
  };

  return (
    <section className='email'>
      <div className="email-step-container">
        <h1 className='theme-title mb-4'>What is your email?</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`email-input ${error ? 'input-error' : ''}`}
        />
        {error && <p className="error-text">Error: {error}</p>}

        <div className="checkbox-container" onClick={() => setMarketingOptIn(!marketingOptIn)}>
          <input type="checkbox" checked={marketingOptIn} readOnly />
          <label>Send me more ways to make my dog happy.</label>
        </div>

        <hr className="divider" />

        <p className="terms-text">
          By clicking "Continue", you agree to our{' '}
          <a href="/terms" target="_blank" rel="noopener noreferrer">Terms</a> and{' '}
          <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
        </p>

        <button className="continue-button" onClick={handleContinue}>
          CONTINUE
        </button>
      </div>
    </section>
  );
}

export default EmailStep;
