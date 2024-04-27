import React from 'react'
import '../styles/main.css';
import { MdDeliveryDining } from "react-icons/md";

function WeekSpecialsCard({ meal }) {
  return (
    <>
<div className='weekspecialcardcontainer'>
  <div className='cardimgcontainer'>
  <img src={meal.image} alt={meal.name} />
  </div>
  <div className='cardtittleprice cardinfo'>
    <h3>{meal.name}</h3> <p>{meal.price}</p>
  </div>
  <div className='cardinfo'>
    <p>{meal.description}</p>
  </div>
  <div className='cardinfo cardinfobutton '>
    <button>Order a delivery<MdDeliveryDining /></button>
  </div>
</div>
    </>
  )
}

export default WeekSpecialsCard
