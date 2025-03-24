import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Zap, Battery, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Powering the Future of <br />
            Electric Mobility
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Leading the charge with innovative EV charging solutions for a sustainable tomorrow.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 rounded-lg text-lg font-semibold transition duration-300"
          >
            Explore Our Products
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Why Choose <span className="text-green-600">SamkuEVC</span>?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800">Fast Charging</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Advanced technology ensuring rapid charging for all electric vehicles with maximum efficiency and minimal wait times.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <Battery className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-700">Smart Solutions</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Intelligent charging systems with remote monitoring capabilities that adapt to your specific needs and usage patterns.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800">Safety First</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Built-in protection features ensuring safe charging every time with multiple safeguards to protect your vehicle and home.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our <span className="text-green-600">Products</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{product.title}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <Link
                    to="/products"
                    className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg overflow-hidden border-b-4 border-green-600 text-center"
          >
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Ready to make the switch to electric?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Contact us today to learn more about our innovative EV charging solutions and speak with our expert team.
            </p>
            <Link
              to="/contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-green-600 transition duration-300 inline-flex items-center"
            >
              Get in Touch
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;