import React from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home
