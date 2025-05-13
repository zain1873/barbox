import React, { useState } from 'react';
import Toy1 from '../assets/bee-img.webp'
import Toy2 from '../assets/flower-img.webp' 
import { useNavigate } from 'react-router-dom';


function ToySelector() {
  const [selected, setSelected] = useState('');
  const navigate = useNavigate();


  const handleSelect = (type) => {
    setSelected(type);
  };

  return (
    <>

      <div className='like-toys'>
        <h1 className='theme-title'>What toys does your dog like best?</h1>

        <div className='toy-options'>
          <div
            className={`toy-card-selector ${selected === 'plush' ? 'selected' : ''}`}
            onClick={() => handleSelect('plush')}
          >
            <img src={Toy1} alt='Plush Toys' />
            <div>
              <h3 className='theme-title'>Plush Toys</h3>
              <p>Soft materials</p>
            </div>
          </div>

          <div
            className={`toy-card-selector ${selected === 'durable' ? 'selected' : ''}`}
            onClick={() => handleSelect('durable')}
          >
            <img src={Toy2} alt='Durable Chew Toys' />
            <div>
              <h3 className='theme-title'>Durable Chew Toys</h3>
              <p>Tough materials</p>
            </div>
          </div>
        </div>

       <button
            className='continue-btn theme_btn mx-auto'
            disabled={!selected}
            onClick={() => {
                if (selected === 'plush') {
                navigate('/plush-toys');
                } else if (selected === 'durable') {
                navigate('/identity-form');
                }
            }}
            >
            CONTINUE
            </button>
      </div>
    </>
  );
}

export default ToySelector;
