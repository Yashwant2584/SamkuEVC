import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Products = () => {
  const categories = [
    {
      title: 'EV Bike Chargers',
      description: 'Efficient charging solutions for electric bikes',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80'
    },
    {
      title: 'AC Chargers',
      description: 'Reliable AC charging for all electric vehicles',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80'
    },
    {
      title: 'DC Chargers',
      description: 'High-power DC fast charging solutions',
      image: 'HeroImage.png'
    },
    {
      title: 'EV Accessories',
      description: 'Essential accessories for your EV charging needs',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80'
    },
    {
      title: 'EV Cycle Chargers',
      description: 'Specialized chargers for electric cycles',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-blue-800">Our <span className="text-green-600">Products</span></h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Innovative EV charging solutions designed to power the future of sustainable transportation.
          </p>
        </motion.div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index + 0.3, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition duration-300 border-l-4 border-blue-600"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-30 group-hover:opacity-50 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-2">{category.title}</h3>
                <p className="text-gray-700 mb-4">{category.description}</p>
                <Link
                  to={`/products/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition duration-300"
                >
                  <span>View Products</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-lg max-w-4xl mx-auto mt-16 border-t-4 border-green-600 hover:shadow-xl transition duration-300"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Need a Custom Charging Solution?</h2>
            <p className="text-gray-700 mb-6">
              We offer customized EV charging solutions tailored to your specific needs. Contact our team to discuss your requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-green-600 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;