import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import ServicesSection from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default App
