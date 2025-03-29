import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
          <h1 className="text-5xl font-bold mb-4 text-blue-800">About <span className="text-green-600">SamkuEVC</span></h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Powering the future of sustainable transportation through innovative EV charging solutions.
          </p>
        </motion.div>
        
        {/* Company Description - Moved outside of card */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <div className="text-gray-700 space-y-4 leading-relaxed">
            <p>
              SAMKU EV is an electric vehicle charging station Manufacturer Company based in Pune, India. The company was founded in 2016 with a mission to promote sustainable transportation by providing reliable and affordable electric vehicle charging solutions.
            </p>
            <p>
              SAMKU EV offers a range of electric vehicle charging stations for both residential and commercial applications. The company's charging stations are designed to be user-friendly and compatible with all types of electric vehicles, including cars, motorcycles, and scooters.
            </p>
            <p>
              In addition to manufacturing electric vehicle charging stations, including AC and DC fast chargers, SAMKU EV also has the capability to customize solutions to meet the specific needs of its customers. The company provides installation, maintenance, and support services to ensure that its customers have a seamless and hassle-free charging experience.
            </p>
            <p>
              The company is committed to using high-quality materials and advanced technology in its products, and to providing excellent customer service. SAMKU EV is dedicated to promoting sustainable transportation and reducing carbon emissions through the widespread adoption of electric vehicles.
            </p>
            <p>
              Overall, SAMKU EV is a reliable and innovative electric vehicle charging station Manufacturer Company that is making a significant contribution to the growth of the electric vehicle industry in India and beyond.
            </p>
          </div>
        </motion.section>
        
        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 inline-block relative">
              Our Purpose
              <div className="h-1 w-full bg-green-500 absolute bottom-0 left-0 -mb-1 rounded-full"></div>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition duration-300 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-800">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                Mission To develop high-quality, reliable, and eco-friendly EV charging solutions
                that meet the diverse needs of individuals, businesses, and communities, thereby promoting sustainable
                transportation and reducing carbon footprint.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-600 hover:shadow-xl transition duration-300 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-green-700">Our Vision</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To be a global leader in innovative and eco-friendly EV charging solutions, making EV 
                  charging accessible and convenient while significantly contributing to a greener world.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Values & Expertise */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 inline-block relative">
              Our Principles
              <div className="h-1 w-full bg-green-500 absolute bottom-0 left-0 -mb-1 rounded-full"></div>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border-b-4 border-blue-600"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-blue-800">Our Core Values</h2>
              </div>
              <ul className="space-y-6 text-gray-700">
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-800 block mb-1">Sustainability</span>
                    <p>Dedicated to promoting sustainable transportation through efficient and eco-friendly charging solutions.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-800 block mb-1">Customer Satisfaction</span>
                    <p>Committed to providing reliable, accessible, and user friendly charging solutions that exceeds customer expectations.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-800 block mb-1">Innovation</span>
                    <p>Striving to push the boundaries of EV charging industry with continuous innovation in products and technologies.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border-b-4 border-green-600"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-green-700">Our Expertise</h2>
              </div>
              <ul className="space-y-6 text-gray-700">
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-green-700 block mb-1">Research</span>
                    <p>Continuous investment in R&D to develop cutting-edge charging technologies that meet evolving industry standards and user needs.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-green-700 block mb-1">Quality</span>
                    <p>Rigorous testing and quality control processes ensure our products meet the highest safety and performance standards.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-green-700 block mb-1">Support</span>
                    <p>Dedicated customer support and maintenance services to ensure optimal performance of our charging solutions.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Team Section 
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 inline-block relative">
              Our Leadership Team
              <div className="h-1 w-full bg-green-500 absolute bottom-0 left-0 -mb-1 rounded-full"></div>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Meet the passionate experts leading the charge towards sustainable mobility.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: 'John Doe',
                position: 'CEO',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
                bio: "Visionary leader with 15+ years of experience in sustainable energy solutions."
              },
              {
                name: 'Jane Smith',
                position: 'Technical Director',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
                bio: "Expert in EV technology with a passion for creating efficient charging systems."
              },
              {
                name: 'Mike Johnson',
                position: 'Head of Operations',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
                bio: "Operations specialist focused on delivering exceptional customer experiences."
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * index + 1.3, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-30 group-hover:opacity-50 transition duration-300"></div>
                </div>
                <div className="p-6 border-t-4 border-green-500">
                  <h3 className="text-xl font-bold text-blue-800 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section >*/}
        
      </div>
    </div>
  );
};

export default About;