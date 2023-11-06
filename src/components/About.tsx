import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'

function About() {

  return (
    <div> 
    <section className="resume-section p-3 p-lg-5 d-flex d-column text-left" id="about">
    <div className="my-auto">
      <h1 className="text-primary">Robert
        <span className="text-primary-darkest"> Crum</span>
      </h1>
      <div className="subheading mb-5">1636 Chestnut St · Helena, MT 59601 · (406) 431-1811 ·
        <a href="mailto:robertdcrum@gmail.com">robertdcrum@gmail.com</a>
      </div>
      <p className="lead mb-5">
        <ul>
          <li>Passionate problem solver with 3 years of SQL database experience, 5 years of technical support, and proficiency in React, C#, JavaScript, ASP, SQL, Python, and BASH.</li>
          <li>Committed to delivering high-quality and efficient solutions. </li>
          <li>Montana Code School graduate (March 2019) with a background in computer science.</li>
          <li>Designed a single player Android game called Hexwordz.</li>
          <li>9 years retail experience at Batteries Plus Bulbs in device repair, batteries, lighting, management,
            employee training, and customer service.</li>
        </ul>
      </p>

      <div className="mt-3 text-center">
        <div className="subheading mb-3">My Core Values</div>
        <ul className="text-left" style={{listStyleType: 'none', padding: '0', margin:'0'}}>
          <li className='mb-2'><b>Passion for Problem Solving:</b> I am driven by a deep-seated passion for tackling complex challenges and finding elegant solutions through code. My commitment to problem-solving fuels my dedication to software development.</li>
          
          <li className='mb-2'><b>Mentoring and Knowledge Sharing:</b> I am dedicated to sharing my knowledge and experience with colleagues, promoting a culture of learning and growth within the team.</li>
          
          <li className='mb-2'><b>Quality and Efficiency:</b> I am committed to delivering high-quality code and efficient solutions. I take pride in writing clean, maintainable code and following best practices to ensure the longevity of software projects.
          </li>
        </ul>
      </div>

      <div className="mt-3  social-icons">

        <a href="https://www.linkedin.com/in/robertdcrum">
        <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a href="https://github.com/gargansa">
        <FontAwesomeIcon icon={faGithub} /> 
        </a>

        {/* <a href="https://www.facebook.com/gargansa">
        <FontAwesomeIcon icon={faFacebook} /> 
        </a> */}

      </div>
    </div>
  </section>
  </div>
  )
}



export default About