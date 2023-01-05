import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-top">
        <img src="https://res.cloudinary.com/dnovlrekd/image/upload/v1671690030/logo_mxg8ou.svg" alt="" />
        <div className="social-media-links">
            <img src="https://res.cloudinary.com/dnovlrekd/image/upload/v1671690028/icon-facebook_tnvhhe.svg" alt="" />
            <img src="https://res.cloudinary.com/dnovlrekd/image/upload/v1671690030/icon-twitter_ofy0q1.svg" alt="" />
            <img src="https://res.cloudinary.com/dnovlrekd/image/upload/v1671690028/icon-pinterest_rxf79d.svg" alt="" />
            <img src="https://res.cloudinary.com/dnovlrekd/image/upload/v1671690028/icon-instagram_biwbpo.svg" alt="" />
        </div>
      </div>
      <div className="long-line"></div>
      <div className="footer-bottom">
        <div className="footer-links">
            <h1>Our Company</h1>
            <p>How we work</p>
            <p>Why Insure?</p>
            <p>View Plans</p>
            <p>Review</p>
        </div>
        <div className="footer-links">
            <h1>Help Me</h1>
            <p>FAQ</p>
            <p>Terms of use</p>
            <p>Privacy policy</p>
            <p>Cookies</p>
        </div>
        <div className="footer-links">
            <h1>Contact</h1>
            <p>Sales</p>
            <p>Support</p>
            <p>Live chat</p>
        </div>
        <div className="footer-links">
            <h1>Others</h1>
            <p>Careers</p>
            <p>Press</p>
            <p>Licenses</p>
        </div>
      </div>
      <img src="https://res.cloudinary.com/dnovlrekd/image/upload/v1671690025/bg-pattern-footer-desktop_psrjks.svg" alt="" className='footer-pattern' />
    </div>
  )
}

export default Footer
