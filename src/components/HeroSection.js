import React from 'react';
import './HeroSection.css';

function HeroSection({
    imgBgHome,
    headline,
    smallText,
  }) {
    return (
      <>

         <div>
            <img className='home-bg-hero' src={imgBgHome} /> 
            <div className='hero-container'>

                <h1 className='heading'>{headline}</h1>
                <h6 className='small-text'>{smallText}</h6>
              
            </div>
        </div>
      </>
    );
  }
  
  export default HeroSection;
  