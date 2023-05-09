import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer>
        <div className="container">
            <span>Oliver Andersson</span>
            <span className='footer-icons-container'>
                <a href="https://github.com/Oliver-Andersson19">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/oliver-andersson-789405143/">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
            </span>
        </div>
    </footer>
  )
}

export default Footer