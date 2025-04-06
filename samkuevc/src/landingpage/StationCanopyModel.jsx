import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heroImage from '../images/model1.jpeg'; // Adjust the import path as needed
import detailImage1 from '../images/model2.jpeg'; // Adjust the import path as needed
import detailImage2 from '../images/model3.jpeg'; // Adjust the import path as needed

const StationCanopyModel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Hero carousel data
  const heroSlides = [
    {
      image: heroImage,
      title: "Station Canopy Model",
      description: "Advanced EV charging infrastructure solution designed for urban environments, offering unmatched reliability and performance."
    },
    {
      image: detailImage1,
      title: "Sustainable Energy Solution",
      description: "Eco-friendly design with integrated solar panels, maximizing energy efficiency while minimizing environmental impact."
    },
    {
      image: detailImage2,
      title: "Smart Technology Integration",
      description: "AI-powered charging optimization with real-time monitoring and predictive maintenance capabilities."
    }
  ];

  // Auto-rotate carousel slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };
  
  return (
    <div className="bg-white">
      {/* Hero Section with Carousel */}
      <div className="relative h-screen">
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                alt={`Station Canopy Hero ${index + 1}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/40"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
              <motion.div 
                key={`slide-${index}`}
                initial={{ opacity: 0, y: -30 }}
                animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
                className="text-white max-w-2xl"
              >
                <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
                  {slide.title}
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-green-400 mb-4"></div>
                <p className="text-base md:text-lg text-gray-100 mb-6">
                  {slide.description}
                </p>
                <button 
                  onClick={() => navigate('/FranchiseApplication')}
                  className="px-5 py-2.5 sm:px-6 bg-green-600 text-white font-medium rounded-lg shadow-lg 
                  transition-all hover:bg-green-700 hover:shadow-xl transform hover:scale-105 text-sm md:text-base"
                >
                  Become a Franchise Partner
                </button>
              </motion.div>
            </div>
          </div>
        ))}
        
        {/* Carousel Navigation - REDUCED SIZE */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-1 sm:space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                currentSlide === index 
                  ? 'bg-green-500 scale-110' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Mobile left/right controls */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button 
            onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
            className="bg-black bg-opacity-30 hover:bg-opacity-50 rounded-r-lg p-2 focus:outline-none"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
            className="bg-black bg-opacity-30 hover:bg-opacity-50 rounded-l-lg p-2 focus:outline-none"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800">Overview</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mt-3 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              The Station Canopy Model represents the pinnacle of EV charging technology, 
              combining efficiency, safety, and aesthetic design.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={detailImage1}
                alt="Station Canopy Details" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4">Unmatched Performance</h3>
              <p className="text-gray-600 mb-6">
                Our Station Canopy Model delivers fast, reliable charging for all electric vehicle types. 
                With multiple charging points and advanced power management systems, it optimizes energy distribution 
                while minimizing grid impact.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">High-speed charging up to 350kW</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Multiple charging standards supported</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Smart load balancing technology</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800">Comprehensive Testing</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mt-3 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Every Station Canopy Model undergoes rigorous testing to ensure maximum safety, 
              reliability, and performance in all conditions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "EFT Tested",
                description: "Resilient against electrical fast transients, ensuring operational stability during grid disturbances."
              },
              {
                title: "Emissions Tested",
                description: "Compliant with strict electromagnetic emission standards, preventing interference with nearby electronic devices."
              },
              {
                title: "ESD Tested",
                description: "Protected against electrostatic discharge events, enhancing durability and user safety."
              },
              {
                title: "HV Tested",
                description: "Withstands high voltage scenarios, providing additional safety measures for both equipment and users."
              },
              {
                title: "Surge Tested",
                description: "Equipped with advanced surge protection to handle power spikes and lightning-induced surges."
              },
              {
                title: "Insulation Tested",
                description: "Features robust electrical insulation properties to prevent current leakage and enhance safety."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800">Gallery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mt-3 mx-auto mb-6"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[heroImage, detailImage1, detailImage2].map((image, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl shadow-md"
              >
                <img 
                  src={image} 
                  alt={`Station Canopy Model ${index + 1}`} 
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Join the Future of EV Charging?</h2>
            <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto">
              Become a franchise partner and bring the Station Canopy Model to your location. 
              Join our network of sustainable energy providers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/FranchiseApplication')}
                className="px-6 py-3 md:px-8 bg-green-600 text-white font-medium rounded-lg shadow-lg 
                transition-all hover:bg-green-700 hover:shadow-xl"
              >
                Apply for Franchise
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="px-6 py-3 md:px-8 bg-white text-blue-800 font-medium rounded-lg shadow-lg 
                transition-all hover:bg-gray-100 hover:shadow-xl"
              >
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StationCanopyModel;