/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {FaGithub} from "react-icons/fa"
import {BsLinkedin} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/josias-pazzelli-086a0921b/' target="_blank"> <BsLinkedin/> </a>
        <a href='https://github.com/Quarantin33' target="_blank"> <FaGithub/> </a>
        <a href='https://www.instagram.com/pazzellijosias/' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials