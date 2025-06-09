import React from 'react'
import ImageCard from '../components/Imagecard';

function Home() {
  return (
   <div>
        <h1>Vanlife Portfolio</h1>
        <div>
        <ImageCard src="/van6.jpg" alt="" />
        <ImageCard src="/van13.jpg" alt="" />
        <ImageCard src="/van5.jpg" alt="" />
      </div>
      </div>
  );
}

export default Home