import React from 'react'
import Resume from "../../assets/Resume Josías Pazzelli 2022.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} className="btn">Download my Resume</a>
        <a href='#contact' className="btn btn-primary">Let's talk</a>
    </div>
  )
}

export default CTA