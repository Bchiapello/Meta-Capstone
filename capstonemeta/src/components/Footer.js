import React from 'react';
import '../styles/footer.css';
import FooterUl1 from './FooterUl1';
import FooterUl2 from './FooterUl2';
import FooterUl3 from './FooterUl3';




function Footer() {
  return (
  <>
    <div className='footer-div'>
      <div className='footerphoto'>
        <img className='footerphoto' alt='Logo' src={require('../assets/lemondessert.jpg')}/>
      </div>
      <div className='footeruls'>
        <FooterUl1 />
        <FooterUl2 />
        <FooterUl3 />
      </div>
    </div>
  </>
  )
}

export default Footer
