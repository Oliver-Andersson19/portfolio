import React from 'react'
import './contact.css'

function Contact(props) {
  return (
    <section className='contact-section' ref={props.contactRef} id='contact'>
        <h2>Kontakt</h2>


        <div className="icon-wrapper">

          <div className="contact-icon-container">
            <i class="fa-solid fa-envelopes-bulk"></i>
            <h3>Mail</h3>
            <p className="contact-icon-content">oliver.andersson101@gmail.com</p>
          </div>

          <div className="contact-icon-container">
            {/* <i class="fa-brands fa-discord"></i> */}
            <i class="fa-solid fa-phone"></i>
            <h3>Phone</h3>
            <p className="contact-icon-content">+46 70 607 38 98</p>
          </div>


        </div>
    </section>
  )
}

export default Contact