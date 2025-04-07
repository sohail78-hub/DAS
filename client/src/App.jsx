import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import ServicesSection from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutUs from './components/About'
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'
import WebAppDev from './components/WebAppDev'
import Digital_Marketing from './components/Digital_Marketing'
import Design_Development from './components/Design_Development'
import Digital_Marketing_Outsourcing from './components/Digital_Marketing_Outsourcing'
import Get_A_Quote from './components/Get_A_Quote'
import PortfolioHero from './components/PortfolioHero'

const App = () => {
  return (
    <>
    <Router>
    <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Web_&_App_Development' element={<WebAppDev/>}/>
        <Route path='/Digital_Marketing' element={<Digital_Marketing/>}/>
        <Route path='/Digital_Marketing_Outsourcing' element={<Digital_Marketing_Outsourcing/>}/>
        <Route path='/Design_&_Development' element={<Design_Development/>}/>
        <Route path='/Get_A_Quote' element={<Get_A_Quote/>}/>
        <Route path='/portfolio' element={<PortfolioHero/>}/>

      </Routes>
      <Footer/>

      </Router>
    </>
  )
}

export default App
