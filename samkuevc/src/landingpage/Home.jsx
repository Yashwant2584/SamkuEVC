import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Zap, Battery, Shield } from 'lucide-react';
import Marquee from '../components/Marquee';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      {/* CHANGES: Added flex-col-reverse for mobile, adjusted video and text container */}
      <section 
        className="relative min-h-screen"
      >
        <div className="absolute inset-0 flex flex-col md:flex-row">
          {/* Video on Right */}
          {/* CHANGES: Adjusted height for mobile responsiveness */}
          <div className="relative w-full h-1/2 md:h-full order-2 md:order-1">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/ev.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* CHANGES: Added mobile-specific styling, centered content, adjusted background */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 sm:px-6 lg:px-8 text-white z-10 
      flex items-center justify-center md:justify-end md:w-1/2 bg-black/40 md:bg-black/20 p-4 md:p-8 md:rounded-xl"
          >
            <div className="text-center md:text-right max-w-xl">
              <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Powering the Future of 
                Electric Mobility
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto md:mx-0 mb-4 md:mb-6 rounded-full"></div>
              <p className="text-base md:text-2xl mb-6 max-w-2xl">
                Leading the charge with innovative EV charging solutions for a sustainable tomorrow.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 rounded-lg text-base md:text-lg font-semibold transition duration-300 mx-auto md:mx-0"
              >
                Explore Our Product
                <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee />

      {/* Features Section */}
      {/* CHANGES: Reduced padding, adjusted mobile styles */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Why Choose <span className="text-green-600">SamkuEVC</span>?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * index, duration: 0.8 }}
                key={index}
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
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      {/* CHANGES: Adjusted padding, grid, and text sizes */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Our <span className="text-green-600">Products</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'EV Bike Chargers',
                image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80',
                description: 'Efficient charging solutions for electric bikes with smart connectivity features.'
              },
              {
                title: 'DC Fast Chargers',
                image: 'https://images.unsplash.com/photo-1697800653529-dcc0f1b78f88?auto=format&fit=crop&q=80',
                description: 'High-power DC charging for quick turnaround when you need to get back on the road fast.'
              },
              {
                title: 'Home Charging Solutions',
                image: 'https://images.unsplash.com/photo-1697800653529-dcc0f1b78f88?auto=format&fit=crop&q=80',
                description: 'Convenient and safe charging at home that integrates seamlessly with your lifestyle.'
              }
            ].map((product, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * index, duration: 0.8 }}
                key={index} 
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CHANGES: Adjusted padding, text sizes, and button styles */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
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