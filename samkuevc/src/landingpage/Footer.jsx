import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight } from "react-icons/fa";
import name from '../images/samkuEVC.png';
import logo from '../images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Locations", path: "/location" },
    { name: "Careers", path: "/careers" },
    { name: "FAQ", path: "/faq" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Refund Policy", path: "/refund" },
  ];

  const socialLinks = [
    { icon: <FaFacebook size={16} />, bgColor: "bg-blue-600", link: "https://www.facebook.com/share/1GiTeUp6tb/", label: "Facebook" },
    { icon: <FaInstagram size={16} />, bgColor: "bg-pink-600", link: "https://www.instagram.com/samkuev?igsh=eGxwNWNvcmIyZGRh", label: "Instagram" },
    { icon: <FaLinkedin size={16} />, bgColor: "bg-blue-700", link: "https://www.linkedin.com/in/mahesh-shingare-225151176/", label: "LinkedIn" },
    { icon: <FaYoutube size={16} />, bgColor: "bg-red-600", link: "https://www.youtube.com/@samkuevc8267", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-100 via-green-50 to-blue-50 text-navy-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src={logo} 
                alt="SamkuEvc Logo" 
                className="w-9.5 h-9.5"
              />
              <img 
                src={name} 
                alt="SamkuEVC" 
                className="w-35 h-15" 
              />
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
              Leading the electric vehicle revolution with premium service, maintenance, and charging solutions.
            </p>
            <div className="flex items-center space-x-2 bg-green-50 p-2 rounded-lg border border-green-100">
              <FaArrowRight className="text-green-600" />
              <span className="text-sm text-green-800 font-semibold">
                Electric Vehicle Care
              </span>
            </div>
            {/* <div className="flex space-x-3 md:space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 transition-all duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div> */}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 md:mb-6 text-navy-700 border-b-2 border-green-500 pb-2">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2 md:grid-cols-2 md:gap-x-4 md:gap-y-4">
              {quickLinks.map((link) => (
                <li key={link.name} className="flex">
                  <Link 
                    to={link.path}
                    onClick={() => handleNavigation(link.path)}
                    className="text-gray-700 hover:text-green-700 transition-colors duration-300 flex items-center text-sm md:text-base md:whitespace-nowrap"
                  >
                    <FaArrowRight className="text-blue-600 text-xs mr-2" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 md:mb-6 text-navy-500 border-b-2 border-green-400 pb-2">Contact Info</h3>
            <ul className="space-y-3 md:space-y-4 text-gray-700 text-sm md:text-base">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 mt-1 mr-2 md:mr-3 flex-shrink-0" />
                <span className="hover:text-navy-700 transition-colors">
                Samku Technology & Consultancy <br />
                  Vighnaharta Services Industrial Complex, Charholi Khurd Road,<br />
                  Charholi Khurd, Pune,<br />
                  Maharashtra, India - 412105
                </span>
              </li>
              <li className="flex items-center">
              <FaPhone className="text-blue-600 mr-2 md:mr-3 flex-shrink-0 transform scale-x-[-1]" />
                <a href="tel:+919561137963" className="hover:text-navy-700 transition-colors">
                  +91 9561137963
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-600 mr-2 md:mr-3 flex-shrink-0" />
                <a href="mailto:samkuevservices@gmail.com" className="hover:text-navy-700 transition-colors">
                  samkuevservices@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 md:mb-6 text-navy-700 border-b-2 border-green-500 pb-2">Connect With Us</h3>
            <div className="flex space-x-6 mt-4 justify-center md:justify-start">
              <a href="https://www.facebook.com/share/1GiTeUp6tb/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <FaFacebook size={16} />
                </div>
              </a>
              <a href="https://www.instagram.com/samkuevservice?igsh=cHE1NHp2b3JmNDl4" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-pink-600 hover:text-white transition-all duration-300">
                  <FaInstagram size={16} />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/mahesh-shingare-225151176/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-all duration-300">
                  <FaLinkedin size={16} />
                </div>
              </a>
              <a href="https://www.youtube.com/@samkuevc8267" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-all duration-300">
                  <FaYoutube size={16} />
                </div>
              </a>
            </div>
            <div className="mt-4 md:mt-6 bg-green-50 p-3 rounded-lg border border-green-100 text-center">
              <p className="text-sm text-green-800 font-medium">
                Join our sustainable mobility community
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-200 mt-8 md:mt-12 pt-4 md:pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Samku Technologies and Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;