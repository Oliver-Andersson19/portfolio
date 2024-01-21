import React, { useRef } from 'react'
import './slideshow.css'

function SlideShow() {

    const ref = useRef(null)
    const amountOfSlides = 2;




    return (
        <>
            
            <div className="projects-wrapper" ref={ref} id='project'>
                
                

                {/* <div className="project-container" id='first-project'>
                    <div className="project-image-container">
                        <img src="weather-app-img.jpg" alt="" className='project-image'/>
                    </div>
                    <div className="project-text-container">
                        <h2>Weather App</h2>
                        <p>Weather App made with React and OpenWeather API</p>
                        <div className="btn-wrapper">
                            <a href="https://github.com/Oliver-Andersson19/react-weather-app">Code</a>
                            <a href="https://oliver-andersson19.github.io/react-weather-app/">Live Demo</a>
                        </div>
                    </div>
                </div> */}
                <div className="project-container" id='first-project'>
                    <div className="project-image-container">
                        <img src="filmvisarna.png" alt="" className='project-image'/>
                    </div>
                    <div className="project-text-container">
                        <div>
                            <h2>Filmvisarna</h2>
                            <p>
                                Uppgiften var att skapa både en frontend och en backend åt en biograf med ett fungerande bokningssystem.
                                Vi jobbade enligt scrum i ett team på 6 personer där alla fick turas om att vara scrum master.
                            </p>
                        </div>
                        <div className="btn-wrapper">
                            <a href="https://github.com/IsacZetterstrom/Frontend-Project" target='_blank' rel='noreferrer'>Code</a>
                            <a href="https://filmvisarna-team2.nodehill.se/" target='_blank' rel='noreferrer'>Live Demo</a>
                        </div>
                    </div>
                </div>

                <div className="project-container">
                    <div className="project-image-container">
                        <video width="320" height="240" controls>
                            <source src="/js3-video.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video> 
                    </div>
                    <div className="project-text-container">
                        <div>
                            <h2>Booksters</h2>
                            <p>Uppgiften var att skapa en frontendlösning till en backend som innehåller information om böcker och dess användare. API:et innehåller både administratörer och vanliga användare, men går även att använda som icke-authentiserad användare viss begränsning</p>
                        </div>
                        <div className="btn-wrapper">
                            <a href="https://github.com/Oliver-Andersson19/javascript-3-exam" target='_blank' rel='noreferrer'>Code</a>
                        </div>
                    </div>
                </div>

                <div className="project-container">
                    <div className="project-image-container">
                        <img src="trafiklab-img.jpg" alt="" className='project-image'/>
                    </div>
                    <div className="project-text-container">
                        <div>
                            <h2>Busroutes Trafiklab</h2>
                            <p>Ett av dom första projekten jag gjorde där vi fick lära oss att prata med APIn, hitta tåg och buss-rutter, gjort med React och Trafiklabs API.</p>
                        </div>
                        <div className="btn-wrapper">
                            <a href="https://github.com/Oliver-Andersson19/react-trafiklab" target='_blank' rel='noreferrer'>Code</a>
                            <a href="https://oliver-andersson19.github.io/react-trafiklab/" target='_blank' rel='noreferrer'>Live Demo</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
  )
}

export default SlideShow