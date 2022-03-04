import React from 'react'

import "./about.css"

import ME from "../../assets/Me-About.jpg"

import {FaAward} from "react-icons/fa"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>

        <h5 style={{color:'white'}}>Come To Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>


          <div className='about__me'>

              <div className='about__me-image'>
                   <img src={ME} alt="About me"></img>   

              </div>

          </div>


          <div className='about__content'>

              <div className='about__cards'>

                  <article className='about__card'>
                      <FaAward className='about__icon'/>
                      <h5>Experience</h5>
                      <small>3+ years learning and programming with Java</small>
                  </article>

                  <article className='about__card'>
                      <VscFolderLibrary className='about__icon'/>
                      <h5>Projects</h5>
                      <small>5+ Completed</small>
                  </article>


                  <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it 
                      
                  </p>
                  
                  <a href='#contact' className='btn btn-primary'>Let's Talk</a>

              </div>

          </div>


        </div>


    </section>
  )
}

export default About