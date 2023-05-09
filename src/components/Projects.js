import React from 'react'
import './projects.css'
import GithubLink from './GithubLink.js'
import SlideShow from './SlideShow.js'

function Projects(props) {
  return (
    <section className='projects-section'>
        <h1>Portfolio</h1>
        
        <SlideShow></SlideShow>
        <GithubLink></GithubLink>
    </section>
  )
}

export default Projects