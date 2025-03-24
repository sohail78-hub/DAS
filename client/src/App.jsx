import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import ServicesSection from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutUs from './components/About'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <AboutUs/>
      {/* <Portfolio/> */}
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
