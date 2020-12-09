import React from 'react';
import './TwoPicCard.css';

function TwoPicCard({
    imgOne,
    imgTwo,
    coachOneH,
    coachOneP,
    coachTwoH,
    coachTwoP,
  }) {
    return (
      <>
         <div className='about-two-container'>
             <div className='coach-one'>
                 <img src={imgOne} />
                 <h1>{coachOneH}</h1>
                 <p>{coachOneP}</p> 
             </div>
             <div className='coach-two'>
                 <img src={imgTwo} />
                 <h1>{coachTwoH}</h1>
                 <p>{coachTwoP}</p> 
             </div>
        </div>
      </>
    );
  }
  
  export default TwoPicCard;