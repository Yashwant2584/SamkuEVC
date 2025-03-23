import React from 'react';
import { motion } from 'framer-motion';

const EVSolutions = () => {
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
          <h1 className="text-5xl font-bold mb-4 text-blue-800">EV <span className="text-green-600">Solutions</span></h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Advanced charging solutions for homes, businesses, and public spaces.
          </p>
        </motion.div>

        {/* New Cards Section - Horizontal Layout */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'OEM & ODM',
                description: 'SAMKU EV is a forward-thinking company revolutionizing the electric vehicle industry with tailored OEM and ODM solutions. With a commitment to innovation and sustainability, SAMKU EV manufactures high-performance EV components and designs custom electric vehicles that perfectly meet the needs of their clients. Whether you’re looking for top-tier parts like batteries and drivetrains or fully integrated vehicle systems, SAMKU EV ensures exceptional quality, cutting-edge technology, and seamless integration. Partnering with SAMKU EV means accessing the future of electric mobility with reliable, efficient, and eco-friendly solutions that drive progress in the automotive world.',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z'
              },
              {
                title: 'DC EV Charging',
                description: 'SAMKU EV delivers advanced DC EV charging solutions designed for fast, efficient, and high-performance charging. With a focus on meeting the increasing demand for rapid vehicle charging, SAMKU EV provides state-of-the-art DC fast chargers that can charge electric vehicles in a fraction of the time compared to traditional AC chargers. Ideal for commercial and public spaces, these DC chargers offer quick, reliable, and safe charging for all types of electric vehicles, ensuring minimal downtime for drivers. Built with cutting-edge technology and high safety standards, SAMKU EV’s DC charging stations are the perfect solution for locations that require fast, high-power charging to support a growing EV fleet, helping to accelerate the transition to a sustainable, eco-friendly future.',
                icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
              },
              {
                title: 'AC EV Charging',
                description: 'SAMKU EV offers cutting-edge AC EV charging solutions designed to meet the growing demand for reliable and efficient electric vehicle charging. With a focus on innovation and sustainability, SAMKU EV provides high-quality AC charging stations that enable seamless, cost-effective, and safe charging for both home and public use. These AC chargers are perfect for everyday charging needs, offering an easy and efficient way to charge electric vehicles overnight or during extended parking times. SAMKU EV ensures that its charging stations are built with the latest technology and standards, making them a trusted choice for anyone looking to power their EV in a convenient and eco-friendly manner.',
                icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
              }
            ].map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index * 50 - 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index + 0.3, duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-blue-600"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">{card.title}</h3>
                </div>
                <p className="text-gray-700 text-sm">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-20">
          {/* Home Chargers Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-800 inline-block relative">
                Home Charging Solutions
                <div className="h-1 w-full bg-green-500 absolute bottom-0 left-0 -mb-1 rounded-full"></div>
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Convenient and reliable charging solutions for your home.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  power: '1.2 kW', 
                  description: 'Perfect for overnight charging with standard outlets. Easy to install and portable.',
                  icon: 'M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z' 
                },
                { 
                  power: '7 kW', 
                  description: 'Ideal for daily home use. Charges most electric vehicles overnight with efficient power delivery.',
                  icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' 
                },
                { 
                  power: '11/22 kW', 
                  description: 'Fast home charging solution. Perfect for households with multiple EVs or for quick top-ups.',
                  icon: 'M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3' 
                }
              ].map((charger, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index + 0.3, duration: 0.6 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-blue-600"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={charger.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-800">{charger.power} Charger</h3>
                  </div>
                  <p className="text-gray-700">{charger.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Commercial Chargers Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-800 inline-block relative">
                Commercial Solutions
                <div className="h-1 w-full bg-green-500 absolute bottom-0 left-0 -mb-1 rounded-full"></div>
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Scalable charging infrastructure for businesses and public spaces.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-lg max-w-4xl mx-auto border-t-4 border-green-600 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-700">Enterprise-Grade Charging</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our commercial charging solutions are designed to meet the demands of businesses,
                fleet operators, and public charging stations. We offer scalable and reliable
                charging infrastructure that can be customized to your specific needs, ensuring
                optimal performance and return on investment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>High-power DC fast charging stations</span>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Multi-point charging systems</span>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Smart load management</span>
                  </li>
                </ul>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Remote monitoring and management</span>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Payment integration solutions</span>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Fleet management integration</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </section>

          {/* Accessories Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-800 inline-block relative">
                Connectors & Accessories
                <div className="h-1 w-full bg-green-500 absolute bottom-0 left-0 -mb-1 rounded-full"></div>
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Complete your charging setup with our range of high-quality accessories.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-blue-600 hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800">Charging Sockets</h3>
                </div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-800 block mb-1">Type 2 Sockets</span>
                      <p>Standard European connector for AC charging up to 43 kW.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-800 block mb-1">CCS Connectors</span>
                      <p>Combined Charging System for fast DC charging up to 350 kW.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-800 block mb-1">CHAdeMO Connectors</span>
                      <p>Fast charging standard popular among Japanese manufacturers.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-800 block mb-1">Standard AC Sockets</span>
                      <p>Compatible with regular household plugs for convenient charging.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-green-600 hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-700">Essential Accessories</h3>
                </div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-green-700 block mb-1">Charging Cables</span>
                      <p>High-quality cables in various lengths for all connector types.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-green-700 block mb-1">Cable Management Systems</span>
                      <p>Keep your charging area tidy with our cable organization solutions.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-green-700 block mb-1">Protection Equipment</span>
                      <p>Surge protectors and weatherproofing for outdoor installations.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-green-700 block mb-1">Mounting Solutions</span>
                      <p>Wall mounts, pedestals, and custom mounting options for all installations.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </section>
          
          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-800 to-green-600 p-10 rounded-2xl text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Ready to Power Your Electric Future?</h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Contact our team today to discuss your EV charging requirements and discover how our solutions can meet your needs.
              </p>
              <button className="bg-white text-blue-800 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition duration-300 shadow-lg">
                Get in Touch
              </button>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default EVSolutions;