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
                description: 'SAMKU EV is revolutionizing the electric vehicle industry with innovative OEM and ODM solutions. Specializing in high-performance EV components and custom vehicle designs, SAMKU EV delivers top-quality batteries, drivetrains, and fully integrated systems. ',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z'
              },
              {
                title: 'DC EV Charging',
                description: 'SAMKU EV offers high-performance DC fast chargers designed for rapid, efficient, and reliable charging. Perfect for commercial and public spaces, these chargers minimize downtime by powering electric vehicles quickly, using cutting-edge technology and high safety standards.',
                icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
              },
              {
                title: 'AC EV Charging',
                description: 'SAMKU EV provides innovative AC EV charging solutions for home and public use, offering reliable, cost-effective, and safe charging. With a focus on sustainability, SAMKU EVs high-quality stations ensure efficient overnight charging and seamless integration.',
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
            
            {/* Enterprise Grade Charging Title */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-green-700 inline-block relative">
                Enterprise-Grade Charging
                <div className="h-1 w-1/2 bg-blue-500 absolute bottom-0 left-1/4 -mb-1 rounded-full"></div>
              </h3>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Comprehensive charging solutions designed for business needs and public infrastructure.
              </p>
            </div>
            
            {/* Enterprise Feature Cards - New Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: 'High-Power DC Fast Charging',
                  description: 'Rapid charging stations delivering up to 350kW of power, reducing charging times to minutes instead of hours. Ideal for public spaces and high-traffic areas.',
                  icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
                  color: 'blue'
                },
                {
                  title: 'Multi-Point Charging Systems',
                  description: 'Efficient charging hubs that can simultaneously power multiple vehicles from a single power source. Perfect for parking garages and fleet depots.',
                  icon: 'M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5',
                  color: 'green'
                },
                {
                  title: 'Smart Load Management',
                  description: 'Intelligent power distribution systems that optimize electricity usage, preventing grid overload while ensuring all vehicles receive optimal charging rates.',
                  icon: 'M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5',
                  color: 'blue'
                },
                {
                  title: 'Remote Monitoring',
                  description: 'Advanced cloud-based systems that provide real-time monitoring, diagnostics, and reporting for your entire charging infrastructure from anywhere.',
                  icon: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25',
                  color: 'green'
                },
                {
                  title: 'Payment Integration',
                  description: 'Seamless payment processing solutions that support multiple payment methods, including credit cards, mobile payments, and RFID cards for user convenience.',
                  icon: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z',
                  color: 'blue'
                },
                {
                  title: 'Fleet Management Integration',
                  description: 'Custom solutions that integrate with your fleet management software, providing comprehensive data on vehicle charging status, energy usage, and operational costs.',
                  icon: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12',
                  color: 'green'
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * index + 0.3, duration: 0.6 }}
                  className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 ${feature.color === 'blue' ? 'border-blue-600' : 'border-green-600'} flex flex-col h-full`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full ${feature.color === 'blue' ? 'bg-blue-100' : 'bg-green-100'} flex items-center justify-center mr-4 flex-shrink-0`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${feature.color === 'blue' ? 'text-blue-600' : 'text-green-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                      </svg>
                    </div>
                    <h3 className={`text-lg font-bold ${feature.color === 'blue' ? 'text-blue-800' : 'text-green-700'}`}>{feature.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mt-2 flex-grow">{feature.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className={`text-sm font-medium ${feature.color === 'blue' ? 'text-blue-600 hover:text-blue-800' : 'text-green-600 hover:text-green-800'} flex items-center`}>
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-gradient-to-r from-blue-800 to-green-600 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto text-white mb-12"
            >
              <h3 className="text-2xl font-bold mb-4">Complete Enterprise Solutions</h3>
              <p className="mb-6">
                Our commercial charging solutions combine powerful hardware with intelligent software to create a complete charging ecosystem for your business. Contact our team for a customized solution tailored to your specific requirements.
              </p>
              <button className="bg-white text-blue-800 px-6 py-2 rounded-full font-bold hover:bg-blue-50 transition duration-300 shadow-lg">
                Request a Consultation
              </button>
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