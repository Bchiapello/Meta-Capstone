import React from 'react';
import "../styles/testimonials.css";
import { IoStarSharp, IoStarHalf, IoStarOutline  } from "react-icons/io5";





function TestimonialsCard(props) {

  const renderStars = (rating) => {
    const stars = [];
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating - filledStars >= 0.5;

    for (let i = 0; i < filledStars; i++) {
      stars.push(<IoStarSharp key={i} />);
    }
/*half*/
    if (hasHalfStar) {
      stars.push(<IoStarHalf key="half" />);
    }
/*blank stars*/
    const remainingStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < remainingStars; i++) {
      stars.push(<IoStarOutline key={`empty-${i}`} />);
    }

    return stars;
  };
  
  return (
    <div className='testimonialcardcontainer'>
        <p className='stars'>{renderStars(props.testimonials.rating)}</p>
      <div className='imgnamediv'>
        <img alt='Logo' src={props.testimonials.image}/>
        <p>{props.testimonials.fullName}</p>
      </div>
      <p className='reviewtext'>"{props.testimonials.review}"</p>
    </div>
  )
}

export default TestimonialsCard
