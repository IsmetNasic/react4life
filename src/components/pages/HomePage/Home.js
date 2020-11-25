import React from 'react';
import HeroSection from '../../HeroSection';
import { heroObjOne } from './Data';

function Home() {
  return (
    <> 
     <HeroSection {...heroObjOne} />
    </>
  );
}

export default Home;
