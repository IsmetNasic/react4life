import React, { useState, useEffect } from 'react';
import './TwoPicCard.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


function TwoPicCard({
    imgOne,
    imgTwo,
    coachOneH,
    coachOneP,
    coachTwoH,
    coachTwoP,
    }){
    
    useEffect(() =>{
      Aos.init({ duration: 1200, offset: 50 });
    }, []);
    return (
      <>
         <div className='about-two-container'>
             <div data-aos='fade-down' className='coach-one'>
                 <img src={imgOne} />
                 <h1>{coachOneH}</h1>
                 <p>{coachOneP}</p>
             </div>
             <div data-aos='fade-down' className='coach-two'>
                 <img src={imgTwo} />
                 <h1>{coachTwoH}</h1>
                 <p>{coachTwoP}</p>
             </div>     
        </div>
      </>
    );
  }

  export default TwoPicCard;