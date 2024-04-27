import React from 'react';
import '../styles/nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='nav-div'>
      <img alt='Logo' src={require('../assets/title.jpg')}/>
      <ul className='nav-ul'>
        <li className='nav-li'><Link to='/'>Home</Link></li>
        <li className='nav-li'><Link to='/about-me'>About Me</Link></li>
        <li className='nav-li'><Link to='/Menu'>Menu</Link></li>
        <li className='nav-li'><Link to='/Reservations'>Reservations</Link></li>
        <li className='nav-li'><Link to='/OrderOnline'>Order online</Link></li>
        <li className='nav-li'><Link to='/LogIn'>Log in</Link></li>
      </ul>
    </div>
  )
}

export default Nav

