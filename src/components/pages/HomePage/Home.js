import React from 'react';
import HeroSection from '../../HeroSection';
import PicSection from '../../PicSection';
import { heroObjOne, picDeadlift } from './Data';
import BackgroundVideo from '../../BackgroundVideo';

function Home() {
  return (
    <> 
      < BackgroundVideo />
     {/* <HeroSection {...heroObjOne} /> */}
      <PicSection {...picDeadlift} />
    </>
  );
}

export default Home;
