import React from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
    </div>
  )
}

export default Home
