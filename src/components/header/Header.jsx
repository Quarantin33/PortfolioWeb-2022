import React from 'react'
import CTA from './CTA'
import ME from "../../assets/Me-Selfie.png"


import "./header.css"
import HeaderSocials from './HeaderSocials'



const Header = () => {
  return (

    <header>

      <div className='container header__container'>

          <h5>Hi I'm</h5>
          <h1>Josías Pazzelli</h1>
          <h5 className='text-light'>Front-End Developer</h5>

          <CTA/>
          <HeaderSocials/>

          <div className='me'>
              <img src={ME} alt="Hi,This is me."/>
          </div>

          <a href='#contact' className="scroll__down">Scroll Down</a>

          
      </div>
    
    </header>
  )
}

export default Header