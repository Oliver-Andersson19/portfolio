import React from 'react'
import './about.css'

function About(props) {
  return (
    <section className='about-section'>
          <h1>Vem är jag?</h1>
        <div className="container">
          <div className="image-container">
            <img src="desktop.jpg" alt="" />
          </div>
          <p>
            Som en Frontend-utvecklare brinner jag för att skapa visuellt tilltalande och användarvänliga gränssnitt för hemsidor. 
            
            <p>
              Jag har god kunskap utav HTML, CSS, JavaScript och även ramverk som React. Jag har också erfarenhet av att använda NodeJS som en backend för att bygga t.ex. RestAPIs med MongoDB.
            </p>
            
            <p>
              Jag är en kreativ kille som älskar problemlösning och letar ständigt efter nya sätt att förbättra min kompetens och skapa högkvalitativa gränssnitt.
            </p>
          </p>
          
        </div>
    </section>
  )
}

export default About