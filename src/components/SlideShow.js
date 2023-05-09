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
                
                

                <div className="project-container" id='first-project'>
                    <div className="project-image-container">
                        <img src="weather-app-img.jpg" alt="" className='project-image'/>
                    </div>
                    <div className="project-text-container">
                        <h2>Project</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        <div className="btn-wrapper">
                            <a href="https://github.com/Oliver-Andersson19/react-weather-app">Code</a>
                            <a href="https://oliver-andersson19.github.io/react-weather-app/">Live Demo</a>
                        </div>
                    </div>
                </div>

                <div className="project-container">
                    <div className="project-image-container">
                        <img src="" alt="" className='project-image'/>
                    </div>
                    <div className="project-text-container">
                        <h2>Project</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        <div className="btn-wrapper">
                            <a href="">Code</a>
                            <a href="">Live Demo</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
  )
}

export default SlideShow