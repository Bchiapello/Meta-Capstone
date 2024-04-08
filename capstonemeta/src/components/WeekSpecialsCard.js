import React from 'react'
import '../styles/main.css';
import { MdDeliveryDining } from "react-icons/md";

function WeekSpecialsCard() {
  return (
    <>
<div className='weekspecialcardcontainer'>
  <div className='cardimgcontainer'>
    <img alt='Logo' src={require('../assets/greeksalad.jpg')}/>
  </div>
  <div className='cardtittleprice cardinfo'>
    <h3>Greek Salad</h3> <p>$9.99</p>
  </div>
  <div className='cardinfo'>
    <p>Description sakdjsa ljksd lkasjd lskjdasldk jsalkdjald akjdaslkdj sld ksaj dlkjdasldkjas ldkjs lak dja lkdjasldkasj dlksjda ldkja dlakjdsld kasj dlksj ds lksajl</p>
  </div>
  <div className='cardinfo cardinfobutton '>
    <button>Order a delivery<MdDeliveryDining /></button>
  </div>
</div>
    </>
  )
}

export default WeekSpecialsCard
