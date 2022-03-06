/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import "./footer.css"

import {BsLinkedin} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {FiTwitter} from "react-icons/fi"


const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'>JOSIAS PAZZELLI</a>

        <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#testimonials'>Testimonials</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className='footer__socials'>
          <a href='https://www.instagram.com/pazzellijosias/' target="_blank"><BsInstagram/></a>
          <a href='https://twitter.com/JosiasPazzelli' target="_blank"><FiTwitter/></a>
          <a href='https://www.linkedin.com/in/josias-pazzelli-086a0921b/' target="_blank"><BsLinkedin/></a>
        </div>

        <div className='footer__copyright'>
          <small>&copy; Josías Pazzelli . All rights reserved. </small>
        </div>
    </footer>
  )
}

export default Footer