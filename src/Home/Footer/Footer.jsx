import React from 'react'
import './Footer.scss'
import image from './IMAGE.png'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <img className='footer_image' src={image} alt="png" />
        <div className="title">
            <h2>Follow us on</h2>
            <span>Navigation</span>
        </div>
        <hr className='hr' />
        <div className="footer_links">
            <ul className='firstUl'>
                <li><a href="/#">Discord</a></li>
                <li><a href="/#">Twitter</a></li>
                <li><a href="/#">Instagram</a></li>
                <li><a href="/#">Facebook</a></li>
            </ul>
            <ul className='secondUl'>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">Style Guide</a></li>
                <li><a href="/#">Licenses</a></li>
                <li><a href="/#">Changelog</a></li>
            </ul>
        </div>
        <hr className='hr2' />
        <div className="text">
            <p>Powered by <span>Webflow</span></p>
            <p>Made by <span>Tim Poličar</span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
