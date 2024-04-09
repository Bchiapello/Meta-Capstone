import React from 'react'
import '../styles/about.css'

function about() {
  return (
    <>
<div className='aboutdivcontainer'>
  <div className='abouttextcontainer'>
    <h2>Little Lemon</h2>
    <h3>Chicago</h3>
    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
  </div>
  <div className='aboutphoto'>
    <img className='aboutphoto1' alt='Logo' src={require('../assets/restaurant.jpg')}/>
    <img className='aboutphoto2' alt='Logo' src={require('../assets/lemondessert.jpg')}/>
  </div>
</div>
    </>
  )
}

export default about;
