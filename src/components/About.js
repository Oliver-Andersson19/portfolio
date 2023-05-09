import React from 'react'
import './about.css'

function About(props) {
  return (
    <section className='about-section'>
          <h1>About me</h1>
        <div className="container">
          <div className="image-container">
            <img src="desktop.jpg" alt="" />
          </div>
          <p>
            As a front-end developer, I am passionate about creating visually appealing
            and user-friendly interfaces for websites and applications. I have experience with
            HTML, CSS, JavaScript, and also frameworks like React. I also have some experience using
            NodeJS as a backend to build RestAPIs with MongoDB.
            <p>
              I am a creative problem solver who is constantly looking for new ways to improve my skills
              and create high-quality interfaces.
            </p>
          </p>
          
        </div>
    </section>
  )
}

export default About