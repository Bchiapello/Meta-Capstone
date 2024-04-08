import React from 'react';
import "../styles/testimonials.css";
import { IoStarSharp } from "react-icons/io5";

function TestimonialsCard(props) {
  return (
    <div className='testimonialcardcontainer'>
      <p className='stars'>{props.rating}<IoStarSharp /></p>
      <div className='imgnamediv'>
        <img alt='Logo' src={require('../assets/restauranfoodsq.jpg')}/>
        <p>{props.name}</p>
      </div>
      <p className='reviewtext'>"{props.review}"</p>
    </div>
  )
}

export default TestimonialsCard
