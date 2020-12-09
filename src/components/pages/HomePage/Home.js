import React from 'react';
import PicSection from '../../PicSection';
import { picDeadlift } from './Data';
import BackgroundVideo from '../../BackgroundVideo';

function Home() {
  return (
    <> 
      < BackgroundVideo />
      <PicSection {...picDeadlift} />
    </>
  );
}

export default Home;
