import React from 'react';
import '../styles/main.css'
import WeekSpecials from './WeekSpecials';
import Testimonials from './Testimonials';
import About from './about';

function Main() {
  return (
    <>
      <div className='Main-div'>
        <WeekSpecials />
        <Testimonials />
        <About />
      </div>
    </>
  )
}

export default Main
