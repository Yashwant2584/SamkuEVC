import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, BatteryCharging } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <BatteryCharging className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold">SamkuEVC</span>
            </div>
            <p className="text-gray-400">
              Leading the charge in sustainable mobility with innovative EV charging solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-green-500">Products</Link></li>
              <li><Link to="/ev-solutions" className="text-gray-400 hover:text-green-500">EV Solutions</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-green-500">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-green-500">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 EV Street</li>
              <li>Chennai, Tamil Nadu</li>
              <li>Phone: +91 123 456 7890</li>
              <li>Email: info@samkuevc.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SamkuEVC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;