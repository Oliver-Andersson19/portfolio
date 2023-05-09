import React from 'react'
import './main.css'

function Main() {
  return (
    <main id='about'>
        <div className="text-container">
            <h2>Front-End React Developer</h2>
            <p>Hi, I'm Oliver Andersson. A passionate Front-end React Developer based in Sandviken, Sverige.</p>
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
                </li>
            </ul>
        </div>
        
    </main>
  )
}


export default Main