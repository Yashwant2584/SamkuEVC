import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route , Link } from "react-router-dom";
import { CartProvider , useCart } from "./CartContext.jsx";
import CartInfo from './components/CartInfo';
import { FaShoppingCart } from 'react-icons/fa';

import Header from "./pages/landing-page/Header";
import Footer from "./pages/landing-page/Footer";
import HeroSection from "./pages/landing-page/HeroSection";
import FeaturesSection from "./pages/landing-page/Features";
import AboutSection from "./pages/landing-page/About";
import ServicesSection from "./pages/landing-page/PremiumServices";
import NewsletterSection from "./pages/landing-page/NewsletterSection";
import TestimonialsSection from "./pages/landing-page/TestimonialsSection";
import EVChargerCard from "./Services/Services";
import AboutUs from "./pages/about/AboutUs";
import LocationsSection from "./pages/landing-page/loactions";
import FranchiseApplication from "./pages/landing-page/FranchiseApplication";
import ChargingStationApplication from "./pages/landing-page/ChargingStationApplication";
import Enquiry from "./pages/landing-page/Enquiry";
import Marquee from "./components/Marquee";
import Comingsoon from "./components/Comingsoon.jsx"

import logo from "./images/logo.png";

import WhatsAppButton from "./pages/landing-page/WhatsAppButton";

const LoadingScreen = ({ loadingComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 25;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            if (loadingComplete) loadingComplete();
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [loadingComplete]);

  return loading ? (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="w-24 h-24 relative mb-8 animate-pulse">
        <img
          src={logo}
          alt="Logo"
          className="w-full h-full object-contain animate-spin-slow"
          style={{ animationDuration: "2s" }}
        />
      </div>

      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-gray-600 font-medium">Loading... {Math.round(progress)}%</p>
    </div>
  ) : null;
};

const App = () => {
  const [appLoaded, setAppLoaded] = useState(false);

  return (
    <>
      <LoadingScreen loadingComplete={() => setAppLoaded(true)} />

      {appLoaded && (
        <CartProvider> {/* Wrap Router with CartProvider */}
        <Router>
          <Header />
          <div className="flex flex-col min-h-screen overflow-x-hidden
">
            <Routes>
              <Route
                path="/"
                element={
                  <main className="flex-grow">
                    <HeroSection />
                    <ServicesSection />
                    <Marquee />
                    <LocationsSection />
                    <FeaturesSection />
                    <AboutSection />
                    <TestimonialsSection />
                    <NewsletterSection />
                    <WhatsAppButton />
                  </main>
                } 
              />
              <Route path="/services" element={<EVChargerCard />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/FranchiseApplication" element={<FranchiseApplication />} />
              <Route path="/ChargingStationApplication" element={<ChargingStationApplication />} />
              <Route path="/Enquiry" element={<Enquiry />} />
              <Route path="/cartInfo" element={<CartInfo />} />
              <Route path="/store" element={<Comingsoon />} />
            </Routes>
            <Footer />
          </div>
        </Router>
        </CartProvider>
      )}
    </>
  );
};

export default App;
