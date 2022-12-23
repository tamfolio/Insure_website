import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
      <div className="short-line2"></div>
      <h1>We’re different</h1>
      <div className="about-container">
        <div className="about-box">
            <img src="https://res.cloudinary.com/dnovlrekd/image/upload/v1671690029/icon-snappy-process_znfhqq.svg" alt="" />
            <h4>Snappy Process</h4>
            <p>Our application process can be completed in minutes, not hours. Don’t get 
  stuck filling in tedious forms.</p>
        </div>
        <div className="about-box">
            <img src="https://res.cloudinary.com/dnovlrekd/image/upload/v1671690026/icon-affordable-prices_owgmsp.svg" alt="" />
            <h4>Affordable Prices</h4>
            <p>We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
        </div>
        <div className="about-box">
            <img src="https://res.cloudinary.com/dnovlrekd/image/upload/v1671690027/icon-people-first_nwsimy.svg" alt="" />
            <h4>People First</h4>
            <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
        </div>
      </div>
      <div className="how-we-work">
        <h4>Find out more about how we work</h4>
        <a href="/">How we work</a>
        <img src="https://res.cloudinary.com/dnovlrekd/image/upload/v1671690025/bg-pattern-how-we-work-desktop_mq4vt7.svg" alt="" className="how-we-work-img" />
      </div>
    </div>
  )
}

export default About
