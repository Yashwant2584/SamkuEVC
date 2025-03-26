import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Leaf, MapPin, Phone, Mail } from 'lucide-react';
import PrivacyPolicyModal from "../footer files/privacy";
import RefundPolicyModal from "../footer files/refund";
import TermsAndConditionsModal from "../footer files/terms";
import CareersModal from "../footer files/careers";
import FAQModal from "../footer files/faq";
import name from '../images/samkuEVC.png';
import logo from '../images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const [modals, setModals] = useState({ privacy: false, refund: false, terms: false, careers: false, faq: false });

  const toggleModal = (modalName, isOpen) => setModals((prev) => ({ ...prev, [modalName]: isOpen }));

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Locations", path: "/location" },
    { name: "Careers", modal: "careers" },
    { name: "FAQ", modal: "faq" },
    { name: "Terms of Service", modal: "terms" },
    { name: "Privacy Policy", modal: "privacy" },
    { name: "Refund Policy", modal: "refund" },
  ];

  const socialLinks = [
    { icon: Facebook, link: "https://www.facebook.com/share/1GiTeUp6tb/" },
    { icon: Instagram, link: "https://www.instagram.com/samkuevservice?igsh=cHE1NHp2b3JmNDl4" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/mahesh-shingare-225151176/" },
    { icon: Youtube, link: "https://www.youtube.com/@samkuevc8267" },
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
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="text-sm text-green-800 font-semibold">
                Electric Vehicle Care
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 md:mb-6 text-navy-700 border-b-2 border-green-500 pb-2">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2 md:grid-cols-1 md:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.modal ? (
                    <button 
                      onClick={() => toggleModal(link.modal, true)}
                      className="text-gray-700 hover:text-green-700 transition-colors duration-300 flex items-center text-sm md:text-base"
                    >
                      <span className="w-3 h-3 bg-green-500 mr-3 rounded-full"></span>
                      {link.name}
                    </button>
                  ) : (
                    <Link 
                      to={link.path}
                      onClick={() => handleNavigation(link.path)}
                      className="text-gray-700 hover:text-green-700 transition-colors duration-300 flex items-center text-sm md:text-base"
                    >
                      <span className="w-3 h-3 bg-green-500 mr-3 rounded-full"></span>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 md:mb-6 text-navy-500 border-b-2 border-green-400 pb-2">Contact Info</h3>
            <ul className="space-y-3 md:space-y-4 text-gray-700 text-sm md:text-base">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="hover:text-navy-700 transition-colors">
                  SAMKU EV POWERING PVT. LTD.<br />
                  Vighnaharta Services Industrial Complex,<br />
                  Charholi Khurd Road, Charholi Khurd,<br />
                  Pune, Maharashtra, India - 412105
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-600" />
                <a href="tel:+919561137963" className="hover:text-navy-700 transition-colors">
                  +91 9561137963
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-600" />
                <a href="mailto:samkuevservices@gmail.com" className="hover:text-navy-700 transition-colors">
                  samkuevservices@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4 md:mt-6">
              <h4 className="text-sm font-semibold text-navy-700 mb-2">Business Hours:</h4>
              <p className="text-sm text-gray-700">
                Mon-Fri: 8:00 AM - 6:00 PM<br />
                Sat: 9:00 AM - 5:00 PM<br />
                Sun: Closed
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 md:mb-6 text-navy-700 border-b-2 border-green-500 pb-2">Connect With Us</h3>
            <div className="flex space-x-6 mt-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                >
                  <social.icon className="h-7 w-7" />
                </a>
              ))}
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

      {modals.privacy && <PrivacyPolicyModal isOpen={true} onClose={() => toggleModal("privacy", false)} />}
      {modals.refund && <RefundPolicyModal isOpen={true} onClose={() => toggleModal("refund", false)} />}
      {modals.terms && <TermsAndConditionsModal isOpen={true} onClose={() => toggleModal("terms", false)} />}
      {modals.careers && <CareersModal isOpen={true} onClose={() => toggleModal("careers", false)} />}
      {modals.faq && <FAQModal isOpen={true} onClose={() => toggleModal("faq", false)} />}
    </footer>
  );
};

export default Footer;