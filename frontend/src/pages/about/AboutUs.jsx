import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTools, FaBolt, FaLeaf, FaUsers, 
  FaCertificate, FaMapMarkedAlt, FaWrench,
  FaHandshake, FaRocket, FaLightbulb,
  FaPlay, FaPause, FaClock, FaAward
} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


const AboutUs = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const navigate = useNavigate();


  const handleServiceNavigation = () => {
    navigate("/services");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const iconFloat = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const services = [
    {
      icon: <FaBolt className="text-blue-600 text-2xl" />,
      title: "Advanced Battery Diagnostics",
      description: "State-of-the-art battery analysis and performance optimization using industry-leading diagnostic tools",
      features: ["Health Monitoring", "Capacity Testing", "Thermal Management"]
    },
    {
      icon: <FaTools className="text-blue-600 text-2xl" />,
      title: "Preventive Maintenance",
      description: "Comprehensive maintenance programs designed to maximize vehicle performance and longevity",
      features: ["System Inspection", "Software Updates", "Performance Tuning"]
    },
    {
      icon: <FaLeaf className="text-blue-600 text-2xl" />,
      title: "Sustainable Solutions",
      description: "Eco-friendly charging infrastructure and energy management systems for optimal efficiency",
      features: ["Smart Charging", "Energy Analysis", "Grid Integration"]
    }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50/10"
      >
        {/* Background effects - made more responsive */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,#3b82f610_0%,transparent_50%)] pointer-events-none scale-150 sm:scale-100"></div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_left,#22c55e08_0%,transparent_50%)] pointer-events-none scale-150 sm:scale-100"></div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,#6366f105_0%,transparent_50%)] pointer-events-none scale-150 sm:scale-100"></div>

        {/* Hero section - enhanced animations */}
        <section className="relative pt-8 sm:pt-12 pb-4 sm:pb-6 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 tracking-tight text-gray-900"
              >
                About{" "}
                <motion.span
                  className="text-blue-600"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  SAMKU
                </motion.span>{" "}
                SERVICE
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-2"
              >
                Setting new standards in electric vehicle maintenance with
                advanced diagnostics and expert service
              </motion.p>
            </div>
          </div>
        </section>

        {/* Enhanced Video Section */}
        <section className="py-4 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-900"
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/y3WEOx3arRw?si=loNly2GL54JQNFsw&autoplay=1&mute=0&playbackRate=2&controls=1"
                  title="SAMKU SERVICE Company Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; playbackRate"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services section - enhanced animations */}
        <section className="pt-6 sm:pt-8 pb-8 sm:pb-12 relative overflow-hidden bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4 text-gray-900"
                >
                  Professional Services
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-200 border-t-4 border-blue-600"
                    >
                      <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                        <motion.div
                          className="bg-blue-50 p-3 rounded-lg"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.4 }}
                        >
                          {service.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                            {service.description}
                          </p>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center text-sm text-gray-700"
                              >
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats section - enhanced animations */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {[
                  { value: "1000+", label: "Clients Served", icon: FaUsers },
                  {
                    value: "50+",
                    label: "Service Centers",
                    icon: FaMapMarkedAlt,
                  },
                  { value: "24/7", label: "Expert Support", icon: FaClock },
                  {
                    value: "100%",
                    label: "Client Satisfaction",
                    icon: FaAward,
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-3 sm:p-4 lg:p-6"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-blue-600 rounded-lg flex items-center justify-center text-white"
                    >
                      <stat.icon className="text-lg sm:text-xl" />
                    </motion.div>
                    <motion.h3
                      whileInView={{ scale: [0.9, 1.1, 1] }}
                      transition={{ duration: 0.4 }}
                      className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1"
                    >
                      {stat.value}
                    </motion.h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA section - enhanced animations */}
        <section className="py-12 sm:py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto relative"
            >
              <div className="text-center px-4">
                <motion.h2
                  whileInView={{ scale: [0.9, 1] }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white"
                >
                  Experience Premium EV Service
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8"
                >
                  Schedule your service appointment with our certified
                  technicians
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleServiceNavigation}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg text-base sm:text-lg font-medium hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
                >
                  Schedule Service
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutUs;
