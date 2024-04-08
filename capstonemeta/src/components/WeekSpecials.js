import React from 'react'
import WeekSpecialsCard from './WeekSpecialsCard'
import '../styles/main.css';

function WeekSpecials() {
  return (
  <>
    <div className='weekspecialcontainer'>
      <div className='weekspecial'>
        <h2>This Week Specials</h2>
        <button>Online Menu</button>
      </div>
      <div className='weekspecialcardscontainer'>
        <WeekSpecialsCard />
        <WeekSpecialsCard />
        <WeekSpecialsCard />
      </div>
    </div>
  </>
  )
}

export default WeekSpecials


