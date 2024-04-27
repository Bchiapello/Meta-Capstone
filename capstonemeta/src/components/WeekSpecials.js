import React from 'react'
import WeekSpecialsCard from './WeekSpecialsCard'
import '../styles/main.css';
import bruschettaImage from '../assets/bruschetta.svg';
import greekSaladImage from '../assets/greeksalad.jpg';
import lemonDessertImage from '../assets/lemondessert.jpg';

function WeekSpecials() {

  const meals = [
    {
      name: 'Greek Salad',
      image: greekSaladImage,
      price: '$12.99',
      description: `The famous greek salad of crispy lettuce, peppers, olives and 
        our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
        croutons.`,
    },
    {
      name: 'Bruschetta',
      image: bruschettaImage,
      price: '$5.99',
      description: `Our Bruschetta is made from grilled bread that has been 
        smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
      name: 'Lemon Dessert',
      image: lemonDessertImage,
      price: '$5.00',
      description: `This comes straight from grandma's recipe book, every last 
        ingredient has been sourced and is as authentic as can be imagined.`,
    },
  ];


  return (
  <>
    <div className='weekspecialcontainer'>
      <div className='weekspecial'>
        <h2>This Week Specials</h2>
        <button>Online Menu</button>
      </div>
      <div className='weekspecialcardscontainer'>
        {meals.map((meal, index) =>
        <WeekSpecialsCard key={index} meal={meal} />)}
      </div>
    </div>
  </>
  )
}

export default WeekSpecials


