import React, { useRef } from 'react'
import './slideshow.css'

function SlideShow() {

    const ref = useRef(null)
    const amountOfSlides = 2;

    const prev = () => {
        ref.current.scrollLeft -= ref.current.scrollWidth / amountOfSlides;
        console.log(ref.current.scrollWidth)
    }

    const next = () => {
        ref.current.scrollLeft += ref.current.scrollWidth / amountOfSlides;
        console.log(ref.current.scrollWidth)
        
    }


    return (
        <>
            <button className='prev' onClick={prev}><i class="fa-solid fa-chevron-left"></i></button>
            <button className='next' onClick={next}><i class="fa-solid fa-chevron-right"></i></button>
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
                        <video width="320" height="240" controls>
                            <source src="/js3-video.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video> 
                    </div>
                    <div className="project-text-container">
                        <h2>Booksters</h2>
                        <p>Uppgiften var att skapa en frontendlösning till en backend som innehåller information om böcker och dess användare. API:et innehåller både administratörer och vanliga användare, men går även att använda som icke-authentiserad användare viss begränsning</p>
                        <div className="btn-wrapper">
                            <a href="https://github.com/Oliver-Andersson19/javascript-3-exam">Code</a>
                        </div>
                    </div>
                </div>

                <div className="project-container">
                    <div className="project-image-container">
                        <img src="trafiklab-img.jpg" alt="" className='project-image'/>
                    </div>
                    <div className="project-text-container">
                        <h2>Busroutes Trafiklab</h2>
                        <p>Hitta tåg och buss-rutter, gjort med React och Trafiklabs API</p>
                        <div className="btn-wrapper">
                            <a href="https://github.com/Oliver-Andersson19/react-trafiklab">Code</a>
                            <a href="https://oliver-andersson19.github.io/react-trafiklab/">Live Demo</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
  )
}

export default SlideShow