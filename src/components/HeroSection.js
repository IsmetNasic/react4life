import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';


function HeroSection({
    imgBgHome,
    headline,
    smallText,
    buttonLabel
  }) {
    return (
      <>

         <div>
            <img className='home-bg-hero' src={imgBgHome} /> 
            <div className='hero-container'>

                <h1 className='heading'>{headline}</h1>
                <h6 className='small-text'>{smallText}</h6>
                
                <Link to='/services' className='button'>
                  <Button id='btn-medium' buttonStyle='btn--outline' buttonSize='btn--medium'>
                    {buttonLabel}
                  </Button>
                </Link>

            </div>
        </div>
      </>
    );
  }
  
  export default HeroSection;
  