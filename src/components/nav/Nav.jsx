/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'


import {AiOutlineHome} from "react-icons/ai"
import {FaRegUser} from "react-icons/fa" 
import {BiBook} from "react-icons/bi" 
import {RiServiceLine} from "react-icons/ri" 
import {BiMessageRoundedDetail} from "react-icons/bi" 


import "./nav.css"

const Nav = () => {

  const [activeNav,setActiveNav] = useState("#")


  return (

    <nav>

        <a href='#' onClick={()=>setActiveNav("#")} className={activeNav === "#" ? "active" : ""}> <AiOutlineHome/> </a>

        <a href='#about' onClick={()=>setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}> <FaRegUser/> </a>

        <a href='#experience' onClick={()=>setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}>  <BiBook/> </a>

        <a href='#services' onClick={()=>setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}> <RiServiceLine/> </a>

        <a href='#contact' onClick={()=>setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""} > <BiMessageRoundedDetail/> </a>

    </nav>
  )
}

export default Nav