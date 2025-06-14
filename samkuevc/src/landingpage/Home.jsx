import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { ChevronRight, Zap, Battery, Shield, Download, FileText } from 'lucide-react';
import Marquee from '../components/Marquee';
import ImgMOB3 from '../images/ImgMob3.png';
import Modelslider from "./model";
import LocationsSection from "./Get-location";
import bike from '../images/C-Images/bike.png';
import dc_charge from '../images/C-Images/dc_chargers.png';
import ev_accessories from '../images/C-Images/accessories.jpg';
import WhatsAppButton from '../landingpage/WhatsAppButton';
// Import your PDF files
import cataloguePDF1 from '../assets/SAMKU_EV_Catalogue-1.pdf';
import cataloguePDF2 from '../assets/SAMKU_EV_Catalogue-2.pdf';

const Home = () => {
  // Function to handle scroll animations using Intersection Observer
  const useScrollAnimation = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            controls.start({ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8,
                staggerChildren: 0.2
              }
            });
          }
        },
        { 
          threshold: 0.1, // Trigger animation when 10% of element is visible
          rootMargin: '-50px' // Adjust based on when you want the animation to trigger
        }
      );
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [controls]);
    
    return { ref, controls };
  };

  // Create animation controls for different sections
  const featuresAnimation = useScrollAnimation();
  const productsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();
  const downloadsAnimation = useScrollAnimation();

  return (
    <div className="bg-white">
      <WhatsAppButton />
      <section className="relative min-h-screen">
        {/* Desktop Video */}
        <div className="hidden md:block absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/ev.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Mobile Full-Screen Image */}
        <div className="block md:hidden absolute inset-0">
          <img 
            src={ImgMOB3} 
            alt="Electric Vehicle"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 text-white z-10 
            bg-black/40 md:bg-black/20 p-4 md:p-8 md:rounded-xl"
        >
          <div className="text-center max-w-xl">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Powering the Future of Electric Mobility
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base md:text-2xl mb-6 max-w-2xl">
              Leading the charge with innovative EV charging solutions for a sustainable tomorrow.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 rounded-lg text-base md:text-lg font-semibold transition duration-300"
            >
              Explore Our Product
              <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </div>
        </motion.div>
      </section>



      <Modelslider />

       {/* Products Preview Section */}
       <section className="py-12 md:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            ref={productsAnimation.ref}
            initial={{ opacity: 0, y: 20 }}
            animate={productsAnimation.controls}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Our <span className="text-green-600">Products</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6 rounded-full"></div>
          </motion.div>
          
          <motion.div 
            ref={productsAnimation.ref}
            initial={{ opacity: 0 }}
            animate={productsAnimation.controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              {
                title: 'EV Bike Chargers',
                image: bike,
                description: 'Efficient charging solutions for electric bikes with smart connectivity features.'
              },
              {
                title: 'DC Fast Chargers',
                image: dc_charge,
                description: 'High-power DC charging for quick turnaround when you need to get back on the road fast.'
              },
              {
                title: 'EV Accessories',
                image: ev_accessories,
                description: 'Convenient and safe charging at home that integrates seamlessly with your lifestyle.'
              }
            ].map((product, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={productsAnimation.controls}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-blue-600 hover:shadow-xl transition duration-300"
              >
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-40 md:h-48 object-cover"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-2">{product.title}</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-4">{product.description}</p>
                  <Link
                    to="/products"
                    className="text-green-600 hover:text-green-700 font-medium inline-flex items-center text-sm md:text-base"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            ref={featuresAnimation.ref}
            initial={{ opacity: 0, y: 20 }}
            animate={featuresAnimation.controls}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Why Choose <span className="text-green-600">SamkuEVC</span>?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6 rounded-full"></div>
          </motion.div>
          
          <motion.div 
            ref={featuresAnimation.ref}
            initial={{ opacity: 0 }}
            animate={featuresAnimation.controls}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              {
                icon: <Zap className="h-6 w-6 text-blue-600" />,
                bgColor: 'bg-blue-100',
                title: 'Fast Charging',
                borderColor: 'border-blue-600',
                description: 'Advanced technology ensuring rapid charging for all electric vehicles with maximum efficiency and minimal wait times.'
              },
              {
                icon: <Battery className="h-6 w-6 text-green-600" />,
                bgColor: 'bg-green-100',
                title: 'Smart Solutions',
                borderColor: 'border-green-600',
                description: 'Intelligent charging systems with remote monitoring capabilities that adapt to your specific needs and usage patterns.'
              },
              {
                icon: <Shield className="h-6 w-6 text-blue-600" />,
                bgColor: 'bg-blue-100',
                title: 'Safety First',
                borderColor: 'border-blue-600',
                description: 'Built-in protection features ensuring safe charging every time with multiple safeguards to protect your vehicle and home.'
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresAnimation.controls}
                transition={{ delay: 0.1 * index }}
                className={`bg-white p-5 md:p-6 rounded-xl shadow-md border-l-4 ${feature.borderColor} hover:shadow-xl transition duration-300`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${feature.bgColor} flex items-center justify-center mr-3`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-800">{feature.title}</h3>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee />

     

      {/* Product Catalogs Download Section */}
      <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            ref={downloadsAnimation.ref}
            initial={{ opacity: 0, y: 20 }}
            animate={downloadsAnimation.controls}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Download Our <span className="text-green-600">Catalogs</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-sm md:text-base text-gray-700 mb-8 max-w-2xl mx-auto">
              Get detailed information about our complete range of EV charging solutions. Download our product catalogs for specifications, features, and pricing details.
            </p>
          </motion.div>
          
          <motion.div 
            ref={downloadsAnimation.ref}
            initial={{ opacity: 0 }}
            animate={downloadsAnimation.controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                title: 'DC Fast EV Charging Station Catalog',
                description: 'Detailed specifications for our 30kW to 350kW DC fast charging stations',
                file: cataloguePDF1,
                icon: <FileText className="h-8 w-8 text-blue-600" />,
              },
              {
                title: 'AC Fast EV Charging Catalog',
                description: 'Complete range of our AC and DC charging solutions from 3kW to 350kW',
                file: cataloguePDF2,
                icon: <FileText className="h-8 w-8 text-green-600" />,
              }
            ].map((catalog, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={downloadsAnimation.controls}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-6 rounded-xl shadow-md border-b-4 border-blue-600 hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    {catalog.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-800">{catalog.title}</h3>
                </div>
                
                <p className="text-sm md:text-base text-gray-700 mb-6">
                  {catalog.description}
                </p>
                
                <a 
                  href={catalog.file} 
                  download
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg hover:from-blue-700 hover:to-green-600 transition duration-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            ref={ctaAnimation.ref}
            initial={{ opacity: 0, y: 30 }}
            animate={ctaAnimation.controls}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-lg overflow-hidden border-b-4 border-green-600 text-center"
          >
            <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4">Ready to make the switch to electric?</h3>
            <p className="text-sm md:text-base text-gray-700 mb-6 max-w-2xl mx-auto">
              Contact us today to learn more about our innovative EV charging solutions and speak with our expert team.
            </p>
            <Link
              to="/contact"
              className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-green-600 transition duration-300 inline-flex items-center text-sm md:text-base"
            >
              Get in Touch
              <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;