import React,{useState} from 'react'
import './Navbar.css'

function Navbar() {
  const[active, setActive] = useState(false);

  return (
    <div className='Navbar'>
        <div className="logo">
            <img src="https://res.cloudinary.com/dnovlrekd/image/upload/v1671690030/logo_mxg8ou.svg" alt="" />
        </div>
        <ul className="nav-links">
            <li><a href="/">How we work</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Account</a></li>
            <li><a href="/" className='cta'>View Plans</a></li>
        </ul>
        {active ? <img src='https://res.cloudinary.com/dnovlrekd/image/upload/v1671690027/icon-close_mzowtd.svg' alt='' onClick={() => setActive(!active)}/> : <img src='https://res.cloudinary.com/dnovlrekd/image/upload/v1671690028/icon-hamburger_v2jes6.svg' alt='' onClick={() => setActive(!active)}/> }
        {active && 
        <div className="mobile-nav">
            <ul className="mobile-nav-links">
            <li><a href="/">How we work</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Account</a></li>
            <li><a href="/" className='cta'>View Plans</a></li>
        </ul>
        <img src="https://res.cloudinary.com/dnovlrekd/image/upload/v1671690027/bg-pattern-mobile-nav_miho9t.svg" alt="" className='bg-mobile-nav' />
        </div>
        }
    </div>
  )
}

export default Navbar
