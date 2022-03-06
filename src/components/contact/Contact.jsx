/* eslint-disable react/jsx-no-target-blank */
import React,{useRef} from 'react'

import emailjs from "emailjs-com"

import {MdOutlineMail} from "react-icons/md"
import {FaTelegramPlane} from "react-icons/fa"
import {BsWhatsapp} from "react-icons/bs"

import "./contact.css"

const Contact = () => {

  const form= useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2bjbhzf', 'template_8bwvh5a', form.current, 'EamyZs9812k8oIthm')
      .then((result) => {
          alert("The Message was sent correctly")
          console.log(result.text);
      }, (error) => {
          alert("The Message could not be sent")
          console.log(error.text);
      });

      e.target.reset()
  };



  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
          <div className='contact__options'>

              <article className='contact__option'>
                <MdOutlineMail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>josiaspazzelli2001@gmail.com</h5>
                <a href='mailto:josiaspazzelli2001@gmail.com' target="_blank">Send A Message</a>
              </article>

              <article className='contact__option'>
                <FaTelegramPlane className='contact__option-icon'/>
                <h4>Telegram</h4>
                <h5>@Josias333</h5>
                <a href='https://telegram.me/Josias333' target="_blank">Send A Message</a>
              </article>

              <article className='contact__option'>
                <BsWhatsapp className='contact__option-icon'/>
                <h4>WhatsApp</h4>
                <h5>+54 9 3571-535076</h5>
                <a href='https://wa.me/+5493571535076' target="_blank">Send A Message</a>
              </article>

          </div>

          {/* END OF CONTACT */}

          <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name' required></input>
              <input type="email" name='email' placeholder='Your Email' required></input>
              <textarea name='message' rows="7" placeholder='Your Message Here' required></textarea>
              <button type="submit" className='btn btn-primary sendmessage'>Send Message</button>
          </form>
      </div>

    </section>
  )
}

export default Contact