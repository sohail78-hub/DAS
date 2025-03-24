import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import ServicesSection from './components/Services'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './components/About';
import ServicesPage from './components/ServicesPage'; // New dedicated services page

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={
          <>
            <HeroSection />
            <ServicesSection /> {/* Keep basic services preview on home */}
            <AboutUs />
            <Contact />
          </>
        } />

        {/* Dedicated Services Page Route */}
        <Route path="/services" element={
          <ServicesPage /> // Full services page with all sub-services
        } />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;