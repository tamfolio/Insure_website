import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
        <div className="logo">
            <img src="https://res.cloudinary.com/dnovlrekd/image/upload/v1671690030/logo_mxg8ou.svg" alt="" />
        </div>
        <ul className="nav-links">
            <li><a href="/">How we work</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Account</a></li>
            <li><a href="/">View Plans</a></li>
        </ul>
    </div>
  )
}

export default Navbar
