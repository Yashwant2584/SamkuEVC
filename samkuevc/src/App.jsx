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
import ProductDetails from './components/ProductDetails';
import FranchiseApplication from './landingpage/FranchiseApplication';
import ChargingStationApplication from './landingpage/ChargingStationApplication';
import Franchise from './landingpage/Franchise';


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
        
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/FranchiseApplication" element={<FranchiseApplication />} />
        <Route path="/ChargingStationApplication" element={<ChargingStationApplication />} />
        <Route path="/Franchise" element={<Franchise />} />


      </Routes>
      <Footer/>
      
    </Router>
  );
};

export default App;