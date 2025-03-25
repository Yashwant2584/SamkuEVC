import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, BatteryCharging } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 via-gray-50 to-green-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <BatteryCharging className="h-10 w-10 text-green-600 animate-pulse" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">SamkuEVC</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Leading the charge in sustainable mobility with innovative EV charging solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-700">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-gray-600 hover:text-green-700 transition-colors duration-300 flex items-center group">
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  <span className="ml-2">Products</span>
                </Link>
              </li>
              <li>
                <Link to="/ev-solutions" className="text-gray-600 hover:text-green-700 transition-colors duration-300 flex items-center group">
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  <span className="ml-2">EV Solutions</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-green-700 transition-colors duration-300 flex items-center group">
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  <span className="ml-2">About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-green-700 transition-colors duration-300 flex items-center group">
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  <span className="ml-2">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-700">Contact Info</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span>123 EV Street</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span>Chennai, Tamil Nadu</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span>Phone: +91 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span>Email: info@samkuevc.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-700">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-green-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} SamkuEVC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;