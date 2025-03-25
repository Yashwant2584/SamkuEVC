import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, BatteryCharging, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 via-green-50 to-blue-50 text-navy-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <BatteryCharging className="h-12 w-12 text-green-600 animate-pulse" />
                <Leaf className="absolute -top-2 -right-2 h-5 w-5 text-green-500 transform rotate-12" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-navy-700 via-green-600 to-blue-500 bg-clip-text text-transparent">
                SamkuEVC
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed font-medium">
              Pioneering sustainable mobility with cutting-edge EV charging innovations that power a greener future.
            </p>
            <div className="flex items-center space-x-2 bg-green-50 p-2 rounded-lg border border-green-100">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="text-sm text-green-800 font-semibold">
                Eco-Friendly Solutions
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-navy-700 border-b-2 border-green-500 pb-2">Quick Links</h3>
            <ul className="space-y-4">
              {['Products', 'EV Solutions', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-700 hover:text-green-700 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-3 h-3 bg-green-500 mr-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                      {link}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-navy-700 border-b-2 border-green-500 pb-2">Contact Info</h3>
            <ul className="space-y-4 text-gray-700">
              {[
                '123 EV Street',
                'Chennai, Tamil Nadu',
                'Phone: +91 123 456 7890',
                'Email: info@samkuevc.com'
              ].map((info) => (
                <li key={info} className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="hover:text-navy-700 transition-colors">{info}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-navy-700 border-b-2 border-green-500 pb-2">Connect With Us</h3>
            <div className="flex space-x-6 mt-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-600 hover:text-green-600 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 group"
                >
                  <Icon className="h-7 w-7 group-hover:text-navy-700" />
                </a>
              ))}
            </div>
            <div className="mt-6 bg-green-50 p-3 rounded-lg border border-green-100 text-center">
              <p className="text-sm text-green-800 font-medium">
                Join our sustainable mobility community
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-200 mt-12 pt-8 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} SamkuEVC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;