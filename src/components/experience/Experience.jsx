import React from 'react'

import {BsPatchCheckFill} from "react-icons/bs"

import "./experience.css"


const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>

          <div className='experience__frontend'>
              <h3>Front-End Development</h3>
              <div className='experience__content'>

                  <article className='experience__details'>

                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                        <h4>HTML5</h4>
                        <small className='text-light'>Mid-level</small>
                    </div>

                  </article>

                  <article className='experience__details'>

                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                        <h4>CSS3</h4>
                        <small className='text-light'>Mid-level</small>
                    </div>
                    

                  </article>

                  <article className='experience__details'>

                    <BsPatchCheckFill className="experience__details-icon"/>

                    <div>
                        <h4>JavaScript</h4>
                        <small className='text-light'>Mid-level</small>
                    </div>
                    

                  </article>

                  <article className='experience__details'>

                    <BsPatchCheckFill className="experience__details-icon"/>

                    <div>
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Basic-Mid-level</small>
                    </div>
                    

                  </article>

                  <article className='experience__details'>

                    <BsPatchCheckFill className="experience__details-icon"/>

                    <div>
                        <h4>Material UI</h4>
                        <small className='text-light'>Basic level</small>
                    </div>
                    

                  </article>

                  <article className='experience__details'>

                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h4>ReactJS</h4>
                        <small className='text-light'>Mid-level to Advance  </small>
                    </div>
                    

                  </article>

                  <article className='experience__details'>

                    <BsPatchCheckFill className="experience__details-icon"/>

                      <div>
                        <h4>SASS</h4>
                        <small className='text-light'>Basic-level</small>
                      </div>
                        
                  </article>
              </div>

          </div>


          {/* End of front end */}


          {/* backend start */}

          <div className='experience__backend'>
          <h3>Back-End Development</h3>
              <div className='experience__content'>

                  <article className='experience__details'>

                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h4>Java</h4>
                        <small className='text-light'>Advanced-level</small>
                    </div>
                    

                  </article>

                  <article className='experience__details'>

                    <BsPatchCheckFill className="experience__details-icon"/>

                    <div>
                        <h4>MySQL</h4>
                        <small className='text-light'>Mid-level</small>
                    </div>
                    

                  </article>

                  <article className='experience__details'>

                    <BsPatchCheckFill className="experience__details-icon"/>

                    <div>
                        <h4>SpringBoot</h4>
                        <small className='text-light'>Basic-level</small>
                    </div>
                    

                  </article>

                  <article className='experience__details'>

                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h4>GitHub</h4>
                        <small className='text-light'>Basic-level</small>
                    </div>
                    

                  </article>

                  </div>
          </div>




      </div>



    </section>
  )
}

export default Experience