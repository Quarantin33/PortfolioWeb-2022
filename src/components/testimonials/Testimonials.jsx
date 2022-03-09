import React from 'react'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import Person1 from "../../assets/Person1.png"
import Person2 from "../../assets/Person2.jpg"
import Person3 from "../../assets/Person3.png"
import "./testimonials.css"


const data =[
  {
    id:1,
    image:Person1,
    client:"Name LastName",
    testimonial:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },

  {
    id:2,
    image:Person2,
    client:"Name LastName",
    testimonial:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },

  {
    id:3,
    image:Person3,
    client:"Name LastName",
    testimonial:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>


      <Swiper className='container testimonials__container'

          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{clickable : true}}
       >

        {data.map(({id,image,client,testimonial})=>{
            return(
              <SwiperSlide key={id} className='testimonial'>
                    <div className='client__avatar'>
                      <img src={image} alt="Person testimonial"></img>
                    </div>
                    <h5 className='client__name'>{client}</h5>
                    <small className='client__review'>
                        {testimonial}
                    </small>
              </SwiperSlide>
          )
          })}
          
      </Swiper>

    </section>
  )
}

export default Testimonials