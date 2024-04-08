import React from 'react'
import TestimonialsCard from './TestimonialsCard'
import "../styles/testimonials.css";

function Testimonials() {
  return (
    <>
      <div className='div-testimonials'>
        <div>
          <h2>Testimonials</h2>
        </div>
        <div className='testimonial-container'>
            <TestimonialsCard rating='5' name='Bruno' review='This place is amazing' />
            <TestimonialsCard rating='4' name='Emma' review='Good place'  />
            <TestimonialsCard rating='5' name='Julius' review="I'll give it 5 out 5"  />
            <TestimonialsCard rating='3' name='Brave' review='Not so good'  />
        </div>
      </div>
    </>
  )
}

export default Testimonials
