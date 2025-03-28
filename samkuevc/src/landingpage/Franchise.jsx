import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTools, FaChargingStation, FaArrowRight, FaCheck, FaShieldAlt, FaCertificate } from 'react-icons/fa';

const FranchiseSection = () => {
  const navigate = useNavigate();
  const [activeType, setActiveType] = useState('service');
  const [isHovered, setIsHovered] = useState(false);

  const handleApply = () => {
    if (activeType === 'service') {
      navigate("/FranchiseApplication");
    } else {
      navigate("/ChargingStationApplication");
    }
  };

  const features = {
    service: [
      { icon: <FaTools />, text: "Complete workshop setup support", desc: "Full assistance in setting up your service center" },
      { icon: <FaCertificate />, text: "Technical training certification", desc: "Professional certification program for your team" },
      { icon: <FaShieldAlt />, text: "Genuine parts supply chain", desc: "Direct access to authentic EV components" }
    ],
    charging: [
      { icon: <FaChargingStation />, text: "Complete station setup", desc: "End-to-end charging infrastructure setup" },
      { icon: <FaTools />, text: "Smart charging management", desc: "Advanced monitoring and control systems" },
      { icon: <FaShieldAlt />, text: "24/7 technical support", desc: "Round-the-clock expert assistance" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden relative py-8 sm:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3b82f620_0%,transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#22c55e20_0%,transparent_50%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header Section - Reduced vertical spacing */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-2 px-4 py-1.5 bg-gradient-to-r from-blue-50/80 to-green-50/80 rounded-full"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 font-semibold text-sm sm:text-base">
              Business Opportunities
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Network</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Choose your path to success with our industry-leading franchise opportunities
          </p>
        </div>

        {/* Toggle Switch - Reduced margin */}
        <div className="flex justify-center mb-8">
          <div className="relative inline-flex items-center p-1 rounded-full bg-gray-100/80 backdrop-blur-sm shadow-inner">
            <div
              className={`absolute inset-y-1 w-[50%] rounded-full transition-transform duration-300 ease-in-out ${
                activeType === 'service' ? 'translate-x-0 bg-blue-600' : 'translate-x-full bg-green-600'
              }`}
            />
            <button
              onClick={() => setActiveType('service')}
              className={`relative z-10 px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                activeType === 'service' ? 'text-white' : 'text-gray-600'
              }`}
            >
              Service Center
            </button>
            <button
              onClick={() => setActiveType('charging')}
              className={`relative z-10 px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                activeType === 'charging' ? 'text-white' : 'text-gray-600'
              }`}
            >
              Charging
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="group"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <div className={`relative bg-white rounded-3xl border shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden
                ${activeType === 'service' ? 'border-blue-100' : 'border-green-100'}`}
              >
                {/* Glass Morphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/30 to-transparent backdrop-blur-sm"></div>
                
                {/* Content Container - Adjusted padding */}
                <div className="relative p-5 sm:p-8">
                  {/* Header - Improved responsive layout */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <motion.div 
                      className={`h-16 w-16 sm:h-20 sm:w-20 rounded-2xl flex items-center justify-center shadow-lg ${
                        activeType === 'service' 
                        ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                        : 'bg-gradient-to-br from-green-500 to-green-600'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {activeType === 'service' ? (
                        <FaTools className="text-3xl sm:text-4xl text-white" />
                      ) : (
                        <FaChargingStation className="text-3xl sm:text-4xl text-white" />
                      )}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                        {activeType === 'service' ? 'Service Center Franchise' : 'Charging Station Franchise'}
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg">
                        {activeType === 'service' 
                          ? 'Launch your professional EV service center with our complete support system'
                          : 'Build the future of mobility with our cutting-edge charging solutions'}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid - Improved responsive grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    {features[activeType].map((feature, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 sm:p-5 rounded-xl bg-gray-50/50 border border-gray-100 hover:shadow-md transition-all duration-300"
                      >
                        <div className={`text-xl sm:text-2xl mb-3 ${
                          activeType === 'service' ? 'text-blue-600' : 'text-green-600'
                        }`}>
                          {feature.icon}
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2">{feature.text}</h4>
                        <p className="text-gray-600 text-sm">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button - Adjusted padding */}
                  <motion.button 
                    onClick={handleApply}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg shadow-lg text-white
                      flex items-center justify-center gap-3 ${
                        activeType === 'service'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-blue-200'
                        : 'bg-gradient-to-r from-green-600 to-green-700 hover:shadow-green-200'
                      }`}
                  >
                    Start Your Journey
                    <motion.span animate={{ x: isHovered ? 5 : 0 }}>
                      <FaArrowRight className="text-base sm:text-lg" />
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FranchiseSection;

