import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBatteryFull, 
  FaTools, 
  FaWrench, 
  FaChargingStation, 
  FaMobile, 
  FaClipboardCheck, 
  FaShieldAlt,
  FaArrowRight
} from 'react-icons/fa';
import ProtectionPlan from "../../images/protection-plan-img.png";

const ServicesSection = () => {
  // Previous services array remains the same
  const services = [
    {
      icon: <FaBatteryFull className="text-4xl text-blue-600" />,
      title: "Battery Health",
      description: "Comprehensive battery diagnostics and maintenance to maximize range and longevity.",
      color: "from-blue-50 to-blue-100",
      hoverBorder: "hover:border-blue-400"
    },
    {
      icon: <FaTools className="text-4xl text-green-600" />,
      title: "EV Maintenance",
      description: "Regular service packages designed specifically for electric vehicle components.",
      color: "from-green-50 to-green-100",
      hoverBorder: "hover:border-green-400"
    },
    {
      icon: <FaWrench className="text-4xl text-amber-600" />,
      title: "Repair Services",
      description: "Expert diagnosis and repair for all electric vehicle systems and components.",
      color: "from-amber-50 to-amber-100",
      hoverBorder: "hover:border-amber-400"
    },
    {
      icon: <FaChargingStation className="text-4xl text-purple-600" />,
      title: "Charging Solutions",
      description: "Home charging installation, maintenance, and optimization services.",
      color: "from-purple-50 to-purple-100",
      hoverBorder: "hover:border-purple-400"
    },
    {
      icon: <FaMobile className="text-4xl text-red-600" />,
      title: "Mobile Service",
      description: "Convenient service at your location for routine maintenance and minor repairs.",
      color: "from-red-50 to-red-100",
      hoverBorder: "hover:border-red-400"
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-teal-600" />,
      title: "Inspections",
      description: "Thorough multi-point inspections to ensure your EV is operating at peak performance.",
      color: "from-teal-50 to-teal-100",
      hoverBorder: "hover:border-teal-400"
    }
  ];

  const featuredService = {
    icon: <FaShieldAlt className="text-5xl text-green-600 mb-4" />,
    title: "SamkuEvc Protection Plan",
    description: "Our comprehensive protection plan provides peace of mind with extended coverage for your electric vehicle.",
    features: [
      "Extended battery warranty coverage",
      "Priority scheduling for all service appointments",
      "Free quarterly health checks and software updates",
      "Roadside assistance for charging emergencies",
      "Discounted rates on all repairs and services"
    ],
    price: "From ₹2499/month",
    ctaText: "Learn More"
  };

  return (
    <section className="py-8 md:py-16 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="text-blue-600">EV Services</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized care for all electric vehicle models delivered by certified EV technicians using the latest technology and equipment.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${service.color} rounded-xl p-4 md:p-8 border border-gray-200 ${service.hoverBorder} 
                transition-all duration-300 hover:shadow-lg group flex flex-col h-full`}
            >
              <div className="mb-4 md:mb-6">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 flex-grow">{service.description}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-sm md:text-base text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-300"
              >
                View Details <FaArrowRight className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
        
        {/* Featured Service with Desktop Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden bg-white"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-10"></div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 border border-green-200 rounded-2xl overflow-hidden shadow-xl">
  {/* Left side with details */}
  <div className="p-6 md:p-12 bg-white">
    {featuredService.icon}
    <h3 className="text-xl md:text-3xl font-bold mb-4">{featuredService.title}</h3>
    <p className="text-base md:text-lg text-gray-600 mb-6">{featuredService.description}</p>
    
    <ul className="space-y-3 mb-6 md:mb-8">
      {featuredService.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
            <div className="w-2 h-2 rounded-full bg-green-600"></div>
          </div>
          <span className="text-sm md:text-base text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
    
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <span className="font-semibold text-lg md:text-xl text-green-600">{featuredService.price}</span>
      <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300">
        {featuredService.ctaText}
      </button>
    </div>
  </div>
  
  {/* Right side with image - Visible on desktop */}
  <div className="relative w-full h-full min-h-[200px] lg:min-h-full">
    <div className="absolute inset-0 w-full h-full">
      <img 
        src={ProtectionPlan} 
        alt="SamkuEvc Protection Plan" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-transparent lg:from-transparent"></div>
    </div>
  </div>
</div>
        </motion.div>
        
        {/* CTA Section */}
        <div className="mt-8 md:mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-6">Ready to experience premium EV service?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 w-full sm:w-auto">
              Schedule Service
            </button>
            <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300 w-full sm:w-auto">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;