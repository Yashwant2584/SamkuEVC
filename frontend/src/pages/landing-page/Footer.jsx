import React from 'react';
import { FaChargingStation, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import logo from "../../images/logo.png";
import name from "../../images/samkuService.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200" id="contact">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Column 1: About */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4 md:mb-6">
              <img src={logo} alt="SamkuEvc Logo" className="w-8 h-8 md:w-10 md:h-10 mr-2" />
              <div>
               <img src={name} alt="samkuService.png" className="w-35 h-7 mr-2 cursor-pointer" />
                <p style={{fontSize: "0.75rem", color: "#6b7280", marginTop: "-4px"}}>Electric Vehicle Care</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
              Leading the electric vehicle revolution with premium service, maintenance, and charging solutions for all EV models.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              {[
                { icon: <FaFacebook />, color: 'hover:bg-blue-600', link: "https://www.facebook.com/share/1GiTeUp6tb/" },
                { icon: <FaInstagram />, color: 'hover:bg-pink-600', link: "https://www.instagram.com/samkuevservice?igsh=cHE1NHp2b3JmNDl4" },
                { icon: <FaLinkedin />, color: 'hover:bg-blue-700', link: "https://www.linkedin.com/in/mahesh-shingare-225151176/" },
                { icon: <FaYoutube />, color: 'hover:bg-red-600', link: "https://www.youtube.com/@samkuevc8267" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link} 
                  target="_blank"
                  className={`w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all duration-300`}
                  aria-label={`Social media link ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Quick Links - Hidden on mobile */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                'Services', 'About Us', 'Locations', 'Careers', 'FAQ', 'Terms of Service', 'Privacy Policy'
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <FaArrowRight className="text-blue-600 text-xs mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div className="col-span-1">
            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-4 md:mb-6">Our Services</h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                'EV Diagnostics', 'Battery Maintenance', 'Charger Installation',
                'Software Updates', 'Roadside Assistance', 'Tyre Services',
                'EV Washing', 'Performance Upgrades'
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <FaArrowRight className="text-blue-600 text-xs mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div className="col-span-1">
            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-4 md:mb-6">Contact Us</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 mt-1 mr-2 md:mr-3 flex-shrink-0" />
                <div className="text-sm md:text-base text-gray-600">
                  <strong>SAMKU EV POWERING PVT. LTD.</strong><br />
                  Vighnaharta Services Industrial Complex, Charholi Khurd Road,<br />
                  
                  Charholi Khurd, Pune,<br />
                  Maharashtra, India - 412105
                </div>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-600 mr-2 md:mr-3 flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-600">+91 95561137963
                </span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-600 mr-2 md:mr-3 flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-600">samkuevservices@gmail.com</span>
              </li>
            </ul>
            
            <div className="mt-4 md:mt-6">
              <h4 className="text-sm font-semibold text-gray-800 mb-2 md:mb-3">Business Hours:</h4>
              <p className="text-xs md:text-sm text-gray-600">
                Monday-Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 5:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Certification Badges Section */}
      {/* <div className="border-t border-gray-200 py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {[
              "https://cdn-icons-png.flaticon.com/512/3143/3143636.png",
              "https://cdn-icons-png.flaticon.com/512/4812/4812189.png",
              "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
              "https://cdn-icons-png.flaticon.com/512/983/983840.png",
              "https://cdn-icons-png.flaticon.com/512/4590/4590025.png"
            ].map((badge, index) => (
              <img 
                key={index} 
                src={badge} 
                alt={`Certification Badge ${index + 1}`} 
                className="h-12 md:h-16 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div> */}
      
      {/* Copyright Section */}
      <div className="bg-gray-50 py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-xs md:text-sm text-gray-600 text-center md:text-left">
              &copy; {currentYear} SamkuEvc. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-2 text-xs md:text-sm text-gray-500">
              <a href="#" className="hover:text-blue-600 transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-blue-600 transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-blue-600 transition-colors duration-300">Cookies</a>
              <a href="#" className="hover:text-blue-600 transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Streak Maintain