import React from 'react'

function Nav() {
  return (
    <div>
      <img alt='Logo' src={require('../assets/title.jpg')}/>
      <ul>
        <li><a href='http://google.com'>Home</a></li>
        <li><a href='http://google.com'>About</a></li>
        <li><a href='http://google.com'>Home</a></li>
        <li><a href='http://google.com'>Home</a></li>
        <li><a href='http://google.com'>Home</a></li>
      </ul>
    </div>
  )
}

export default Nav
