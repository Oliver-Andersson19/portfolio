import React, { useState } from 'react'
import './nav.css'
import {HashLink} from 'react-router-hash-link';

function Nav(props) {

  
  const [openMobileMeny, setOpenMobileMeny] = useState(false);

  function toggleMobileNav() {
    setOpenMobileMeny(!openMobileMeny)
  }



  return (
    <>
      <nav>
          <h1>&lt; OLIVER /&gt;</h1>
          <ul className='nav-list'>
              <HashLink smooth to="/#about">
                <li className='desktop-link'>Om</li>
              </HashLink>
              <HashLink smooth to="/#first-project" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                <li className='desktop-link'>Projekt</li>
              </HashLink>
              <HashLink smooth to="/#contact">
                <li className='desktop-link'>Kontakt</li>
              </HashLink>
              <li className='menu-btn' onClick={toggleMobileNav}><i className="fa-solid fa-bars"></i></li>
          </ul>
      </nav>
      <div className={`mobile-nav ${openMobileMeny ? "open" : ""}`}>
        <button className='close-btn' onClick={toggleMobileNav}><i className="fa-solid fa-xmark"></i></button>
        <ul>
          <HashLink smooth to="/#about">
            <li className='mobile-link' onClick={toggleMobileNav}>Om</li>
          </HashLink>
          <HashLink smooth to="/#project" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
            <li className='mobile-link' onClick={toggleMobileNav}>Projekt</li>
          </HashLink>
          <HashLink smooth to="/#contact">
            <li className='mobile-link' onClick={toggleMobileNav}>Kontakt</li>
          </HashLink>
        </ul>
      </div>
    </>
  )
}

export default Nav