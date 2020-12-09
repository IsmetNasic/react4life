import React from 'react';
import OnePicCard from '../../OnePicCard';
import TwoPicCard from '../../TwoPicCard';
import Location from '../../Location';
import { aboutUs, ourTeam, ourGym } from './Data';

function About() {
  return (
    <> 
      <OnePicCard {...aboutUs} />
      <TwoPicCard {...ourTeam} />
      <TwoPicCard {...ourGym} />
      <Location />
    </>
  );
}

export default About;