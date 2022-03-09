import React from 'react'

import {BiCheck} from "react-icons/bi"

import "./services.css"


const Services = () => {
  return (
    <section id='services'>
        <h5>What I Have To Offer</h5>
        <h2>Services</h2>

        <div className='container services__container'>
            
            <article className='service'>
                <div className='service__head'>
                   <h3>
                       UI/UX Design
                   </h3>
               </div>
                   <ul className='service__list'>
                         <li>
                              <BiCheck className='service__list-icon'></BiCheck>
                              <p>Create Original UI Designs</p>
                         </li>
                         <li>
                              <BiCheck className='service__list-icon'></BiCheck>
                              <p>User Comfort </p>
                         </li>
                         <li>
                              <BiCheck className='service__list-icon'></BiCheck>
                              <p>Reflect Customer Values</p>
                         </li>
                         <li>
                              <BiCheck className='service__list-icon'></BiCheck>
                              <p>Show Your Business Objectives</p>
                         </li>
                         <li>
                              <BiCheck className='service__list-icon'></BiCheck>
                              <p>Intuitive Designs</p>
                         </li>
                         
                   </ul>

                

            </article>
            {/* END UI/UX */}

            <article className='service'>
                <div className='service__head'>
                   <h3>
                       Web Development
                   </h3>
               </div>
                   <ul className='service__list'>
                         <li>
                              <BiCheck className='service__list-icon'></BiCheck>
                              <p>Responsive Design</p>
                         </li>
                         <li>
                              <BiCheck className='service__list-icon'></BiCheck>
                              <p>Development Integration</p>
                         </li>
                         <li>
                              <BiCheck className='service__list-icon'></BiCheck>
                              <p>Contentful Development</p>
                         </li>
                         <li>
                              <BiCheck className='service__list-icon'></BiCheck>
                              <p>Innovative and Professional solutions</p>
                         </li>
                         <li>
                              <BiCheck className='service__list-icon'></BiCheck>
                              <p>WebSite Design & Re-design</p>
                         </li>
                         <li>
                              <BiCheck className='service__list-icon'></BiCheck>
                              <p>Digital Strategy</p>
                         </li>
                   </ul>

                

            </article>

            {/* END WEB DEVELOPMENT*/}

            <article className='service'>
                <div className='service__head'>
                   <h3>
                       Content Creation
                   </h3>
               </div>
                   <ul className='service__list'>
                         <li>
                              <BiCheck className='service__list-icon'></BiCheck>
                              <p>Blog Posts</p>
                         </li>
                         <li>
                              <BiCheck className='service__list-icon'></BiCheck>
                              <p>Online Guides</p>
                         </li>
                         <li>
                              <BiCheck className='service__list-icon'></BiCheck>
                              <p>Videos</p>
                         </li>
                         <li>
                              <BiCheck className='service__list-icon'></BiCheck>
                              <p>Content Promotion</p>
                         </li>
                         <li>
                              <BiCheck className='service__list-icon'></BiCheck>
                              <p>Slideshares</p>
                         </li>
                         <li>
                              <BiCheck className='service__list-icon'></BiCheck>
                              <p>Infographics</p>
                         </li>
                         
                   </ul>

                

            </article>

            {/* END CONTENT CREATION*/}

            

        </div>

    </section>
  )
}

export default Services