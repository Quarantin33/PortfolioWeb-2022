/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

import IMG1 from "../../assets/proyect-1.png"
import IMG2 from "../../assets/proyect-2.png"
import IMG3 from "../../assets/proyect-3.png"
import IMG4 from "../../assets/proyect-4.png"
import IMG5 from "../../assets/proyect-5.png"
import IMG6 from "../../assets/proyect-6.png"


import "./portfolio.css"



const data= [
  {
    id:1,
    image:IMG1,
    title:"Project Countries",
    github:"https://github.com/Quarantin33/PersonalProject-ApiCountries",
    demo:"https://apicountriesoftheworld.netlify.app"
  },

  {
    id:2,
    image:IMG2,
    title:"Name Project",
    github:"https://github.com",
    demo:"https://github.com"
  },

  {
    id:3,
    image:IMG3,
    title:"Name Project",
    github:"https://github.com",
    demo:"https://github.com"
  },

  {
    id:4,
    image:IMG4,
    title:"Name Project",
    github:"https://github.com",
    demo:"https://github.com"
  },

  {
    id:5,
    image:IMG5,
    title:"Name Project",
    github:"https://github.com",
    demo:"https://github.com"
  },

  {
    id:6,
    image:IMG6,
    title:"Name Project",
    github:"https://github.com",
    demo:"https://github.com"
  },
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

          {data.map(({id,image,title,github,demo})=>{

            return(
              <article key={id} className='portfolio__item'>

                <div className='portfolio__item-image'>
                  <img src={image} alt="Proyect"></img>
                </div>
                <h3>{title}</h3>    
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
          
              </article>
            )
          })}
          
      </div>
    </section>
  )
}

export default Portfolio
