import React from 'react';
import { FaChargingStation, FaTools, FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  // Features section data
  const features = [
    {
      icon: <FaChargingStation className="text-blue-600 text-5xl mb-4" />,
      title: 'Charging Solutions',
      description: 'Fast and reliable charging options for all EV models'
    },
    {
      icon: <FaTools className="text-green-600 text-5xl mb-4" />,
      title: 'Expert Maintenance',
      description: 'Certified technicians for comprehensive EV care'
    },
    {
      icon: <FaLeaf className="text-teal-600 text-5xl mb-4" />,
      title: 'Eco-Friendly Approach',
      description: 'Sustainable practices for a cleaner environment'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Why Choose <span className="text-blue-600">SamkuService</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We're dedicated to providing exceptional service and innovative solutions for all your electric vehicle needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-200"
          >
            <div className="flex items-center justify-center bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
