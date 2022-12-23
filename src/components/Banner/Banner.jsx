import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='Banner'>
      <div className="banner-left">
        <div className="short-line"></div>
        <h1>Humanizing <br/>your insurance.</h1>
        <p> Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
        <a href="/" className='cta'>View Plans</a>
      </div>
      <div className="banner-right">
        <img src="https://res.cloudinary.com/dnovlrekd/image/upload/v1671690031/image-intro-desktop_mhibaa.jpg" alt="" className='banner-img' />
        <img src="https://res.cloudinary.com/dnovlrekd/image/upload/v1671690026/bg-pattern-intro-right-desktop_ygn6p5.svg" alt="" className='banner-img2'/>
        <img src="https://res.cloudinary.com/dnovlrekd/image/upload/v1671690025/bg-pattern-intro-left-desktop_df1369.svg" alt="" className="banner-img3" />
      </div>

    </div>
  )
}

export default Banner
