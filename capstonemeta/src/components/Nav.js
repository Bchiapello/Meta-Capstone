import React from 'react';
import '../styles/nav.css';

function Nav() {
  return (
    <div className='nav-div'>
      <img alt='Logo' src={require('../assets/title.jpg')}/>
      <ul className='nav-ul'>
        <li className='nav-li'><a className='nav-a' href='http://google.com'>Home</a></li>
        <li className='nav-li'><a className='nav-a' href='http://google.com'>About</a></li>
        <li className='nav-li'><a className='nav-a' href='http://google.com'>Menu</a></li>
        <li className='nav-li'><a className='nav-a' href='http://google.com'>Reservations</a></li>
        <li className='nav-li'><a className='nav-a' href='http://google.com'>Order online</a></li>
        <li className='nav-li'><a className='nav-a' href='http://google.com'>Log in</a></li>
      </ul>
    </div>
  )
}

export default Nav
