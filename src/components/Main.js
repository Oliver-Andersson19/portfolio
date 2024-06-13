import React from 'react'
import './main.css'

function Main() {
  return (
    <main id='about'>
        <div className="text-container">
            <h1>Front-End Utvecklare</h1>
            <p>Hej! Jag heter Oliver Andersson. Jag är en nyexaminerad Front-end utvecklare från Sandviken, Sverige.</p>
        </div>
        <div className="skills">
            <h3>Tech Stack</h3>
            <ul>
                <li className="skill-item">
                  <img src="htmllogo.png" alt="" />
                </li>
                <li className="skill-item">
                  <img src="csslogo.png" alt="" />
                </li>
                <li className="skill-item">
                  <img src="jslogo.png" alt="" />
                </li>
                <li className="skill-item">
                  <img src="reactlogo.webp" alt="" />
                </li>
                <li className="skill-item">
                  <img src="nodejslogo.png" alt="" />
                </li>
                <li className="skill-item">
                <img src="mongodblogo.png" alt="" />
                </li><li className="skill-item">
                <img src="sqllogo.jpg" alt="" />
                </li>
            </ul>
        </div>
        
    </main>
  )
}


export default Main