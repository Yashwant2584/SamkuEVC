import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './landingpage/Navbar';
import Home from './landingpage/Home';
import Products from './landingpage/Products'
import About from './landingpage/About';
import Contact from './landingpage/Contact';
import Location from './landingpage/Location';
import Enquiry from './landingpage/Enquiry';
import EVSolutions from './landingpage/EVSolutions';
import Footer from './landingpage/Footer';


const App = () => {
  return (
    <Router>
      <Navbar />
      
     
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/ev-solutions" element={<EVSolutions/>} />


      </Routes>
      <Footer/>
      
    </Router>
  );
};

export default App;