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
                      <small>3+ years experience with Java & MySQL</small><br></br>
                      <small>3+ months experience with ReactJS</small>
                  </article>

                  <article className='about__card'>
                      <VscFolderLibrary className='about__icon'/>
                      <h5>Projects</h5>
                      <small>5+ Completed</small>
                  </article>


                  <p>
                    I have been learning programming for 6 years since my
                    14 years. I am passionate about everything that has to do with
                    create software solutions to solve real problems, I have
                    programmed from robotics to web pages.
                    My main specialization is in the development of web pages (Front-end with
                    ReactJS) and Java applications.
                    I can use HTML5 , CSS3 , JavaScript, ReactJS, MaterialUI Design,Context-Api etc.
                      
                  </p>
                  
                  <a href='#contact' className='btn btn-primary'>Let's Talk</a>

              </div>

          </div>


        </div>


    </section>
  )
}

export default About