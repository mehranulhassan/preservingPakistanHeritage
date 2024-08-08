// Hero.js
import React from 'react';
import './Hero.css';
import hero_image from '../Assets/hero.JPG';
import hand_icon from './images/hand_icon.png';
import arrow_icon from './images/arrow.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>New ARRIVALS ONLY</h2>
        <div>
        <div className='hand-hand-icon'>
          
          <img src={hand_icon} alt='Hand Icon' />
        </div>
        <p>Collections</p>
        <p>for everyone</p>
      </div>
      <div className='hero-latest-btn'>
        <div>Latest collection</div>
        <img src={arrow_icon} alt='Arrow Icon' />
      </div>
      </div>
      

    
      <div className='hero-right'>
        <img src={hero_image} alt='Hero' />
      </div>
    </div>
  );
}

export default Hero;
