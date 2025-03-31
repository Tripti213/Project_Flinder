import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import '../App.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/public/video_1.mp4' autoPlay loop muted />
    <h1>Find Your Perfect Roommate !</h1>
    <p>SWIPE, MATCH, MOVE IN</p>
    <div className='hero-btns'>
    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
      Create Account 
      </Button>
      

    
    </div>
    </div>
  );
}

export default HeroSection;
