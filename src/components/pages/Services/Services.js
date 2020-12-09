import React from 'react';
import OnePicCard from '../../OnePicCard';
import TwoPicCard from '../../TwoPicCard';
import { aboutServices, programOne, programTwo } from './Data';


function Services() {
  return (
    <> 
    <OnePicCard {...aboutServices} />
    <TwoPicCard {...programOne} />
    <TwoPicCard {...programTwo} />
    </>
  );
}

export default Services;