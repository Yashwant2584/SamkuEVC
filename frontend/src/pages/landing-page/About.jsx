import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom"

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.05] transition-transform duration-300">
                <div className="w-[660px] h-[370px]">
                  <iframe
                    src="https://www.youtube.com/embed/y3WEOx3arRw?autoplay=1&mute=1&rel=0&controls=1&modestbranding=1"
                    title="Electric Vehicle Service Center Video"
                    className="w-full h-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            </div>

          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">
              Leading the Charge in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                EV Innovation
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Samku Service, we're more than just a service center. We're pioneers in the electric vehicle revolution, committed to providing cutting-edge solutions that make EV ownership simpler, more affordable, and more enjoyable.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our team of certified experts combines deep technical knowledge with a passion for sustainable technology, ensuring that your vehicle receives the specialized care it deserves.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/about')}
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold py-4 px-8 rounded-full flex items-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              About Our Mission <FaArrowRight className="ml-2 animate-pulse" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

// omkar