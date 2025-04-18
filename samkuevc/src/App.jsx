import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './landingpage/Navbar';
import Home from './landingpage/Home';
import Products from './landingpage/Products'
import About from './landingpage/About';
import Contact from './landingpage/Contact';
import LocationsSection from './landingpage/Get-location.jsx';
import Enquiry from './landingpage/Enquiry';
import EVSolutions from './landingpage/EVSolutions';
import Footer from './landingpage/Footer';
import ProductDetails from './components/ProductDetails';
import FranchiseApplication from './landingpage/FranchiseApplication';
import ChargingStationApplication from './landingpage/ChargingStationApplication';
import Franchise from './landingpage/Franchise';
import Dashboard from "./admin/admin-dashboard.jsx"
import StationCanopyModel from './landingpage/StationCanopyModel'
// Import footer components
import Careers from './footer files/careers';
import FAQ from './footer files/faq';
import Privacy from './footer files/privacy';
import Refund from './footer files/refund';
import Terms from './footer files/terms';

const App = () => {
  return (
    <Router>
      <Navbar />
      
     
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/e-bike-chargers" element={<Products />} />
        <Route path="/products/ac-chargers" element={<Products />} />
        <Route path="/products/dc-chargers" element={<Products />} />
        <Route path="/products/ev-accessories" element={<Products />} />
        <Route path="/products/electric-cycles" element={<Products />} />
        <Route path="/products/public-ev-chargers" element={<Products />} />
        <Route path="/products/lev-dc-chargers" element={<Products />} />
        <Route path="/products/e-bike-chargers/:id" element={<ProductDetails />} />
        <Route path="/products/ac-chargers/:id" element={<ProductDetails />} />
        <Route path="/products/dc-chargers/:id" element={<ProductDetails />} />
        <Route path="/products/ev-accessories/:id" element={<ProductDetails />} />
        <Route path="/products/electric-cycles/:id" element={<ProductDetails />} />
        <Route path="/products/public-ev-chargers/:id" element={<ProductDetails />} />
        <Route path="/products/lev-dc-chargers/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<LocationsSection />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/ev-solutions" element={<EVSolutions/>} />
        
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/FranchiseApplication" element={<FranchiseApplication />} />
        <Route path="/ChargingStationApplication" element={<ChargingStationApplication />} />
        <Route path="/Franchise" element={<Franchise />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/stationcanopymodel" element={<StationCanopyModel />} />
        {/* Footer routes */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/terms" element={<Terms />} />


      </Routes>
      <Footer/>
      
    </Router>
  );
};

export default App;