import React from 'react'
import TestimonialsCard from './TestimonialsCard'
import "../styles/testimonials.css";
import customer1Image from '../assets/client1.jpg';
import customer2Image from '../assets/client2.jpg';
import customer3Image from '../assets/client3.jpg';
import customer4Image from '../assets/client4.jpg';


const testimonials  = [
  {
    fullName: 'Maria Sanchez',
    image: customer1Image,
    rating: [4.5],
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Antony Clifton',
    image: customer2Image,
    rating: [3],
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Tamika Jackson',
    image: customer3Image,
    rating: [4.5],
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Brandon Ming',
    image: customer4Image,
    rating: [4],
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

function Testimonials() {
  return (
    <>
      <div className='div-testimonials'>
        <div>
          <h2>Testimonials</h2>
        </div>
        <div className='testimonial-container'>

        {testimonials.map((testimony, index) =>
        <TestimonialsCard key={index} testimonials={testimony} />)}

        </div>
      </div>
    </>
  )
}

export default Testimonials
