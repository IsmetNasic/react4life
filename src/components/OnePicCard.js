import React, { useState, useEffect } from 'react';
import './OnePicCard.css';

function OnePicCard({
    picImg,
    bigText,
    smallText,
  }) {
    
    return (
      <>
        <div className='about-one-container'>
          <img src={picImg} />
          <h1>{bigText}</h1>
          <p>{smallText}</p>
        </div>
      </>
    );
  }
  
  export default OnePicCard;