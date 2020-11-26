import React from 'react';
import './PicSection.css';
import { Link } from 'react-router-dom';

function PicSection({
    picImg,
    bigText,
  }) {
    return (
      <>
         <div className='pic-container'>
            <img src={picImg} /> 
            <div className='hero-container'>
                <h1 className='big-text'>{bigText}</h1>
                <Link to='/about'>
                  <button type="button" className="btn btn-outline-dark">MORE ABOUT US</button>
                </Link>
            </div>
        </div>
      </>
    );
  }
  
  export default PicSection;