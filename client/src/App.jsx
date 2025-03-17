import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import ServicesSection from './components/Services'
import Portfolio from './components/Portfolio'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <Portfolio/>
    </>
  )
}

export default App
