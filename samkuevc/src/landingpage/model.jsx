import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import model1 from "../images/model1.jpeg";
import model2 from "../images/model2.jpeg";
import model3 from "../images/model3.jpeg";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const models = [
  {
    id: 1,
    name: "Station Canopy Model",
    image: model1,
    features: "EFT Tested, Emisions Tested, ESD Tested, HV Tested, Surge Tested, Insulation Tested, Voltage Dips Tested",
    description: "Reliable and efficient EV canopy model, rigorously tested for safety and performance, ensuring optimal urban driving experience."
  },
  {
    id: 2,
    name: "Station Canopy Model",
    image: model2,
    features: "EFT Tested, Emisions Tested, ESD Tested, HV Tested, Surge Tested, Insulation Tested, Voltage Dips Tested",
    description:"Reliable and efficient EV canopy model, rigorously tested for safety and performance, ensuring optimal urban driving experience."
  },
  {
    id: 3,
    name: "Station Canopy Model",
    image: model3, 
    features: "EFT Tested, Emisions Tested, ESD Tested, HV Tested, Surge Tested, Insulation Tested, Voltage Dips Tested",
    description: "Reliable and efficient EV canopy model, rigorously tested for safety and performance, ensuring optimal urban driving experience."
  }
];

const Button = ({ children, className, onClick }) => (
  <button 
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 ${className}`}
  >
    {children}
  </button>
);

const Card = ({ children, active }) => (
  <div className={`p-6 text-center bg-white rounded-2xl shadow-lg transition-all duration-500 ${active ? 'scale-105' : 'scale-100'}`}>
    {children}
  </div>
);

const CardTitle = ({ children }) => (
  <h2 className="text-2xl font-bold text-blue-800">{children}</h2>
);

const CardDescription = ({ children }) => (
  <p className="text-gray-700 mt-2 leading-relaxed">{children}</p>
);

const FeatureBadge = ({ children }) => (
  <span className="inline-block bg-white-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-800 mr-2 mb-2">
    {children}
  </span>
);

// Custom arrow components
const PrevArrow = () => (
  <div 
    className="swiper-navigation-prev absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-white bg-opacity-80 rounded-full shadow-md flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-opacity-100 hover:scale-110"
    style={{ backdropFilter: 'blur(2px)' }}
  >
    <div className="w-2 h-2 md:w-3 md:h-3 border-t-2 border-l-2 border-blue-800 transform -rotate-45 ml-1"></div>
  </div>
);

const NextArrow = () => (
  <div 
    className="swiper-navigation-next absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-white bg-opacity-80 rounded-full shadow-md flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-opacity-100 hover:scale-110"
    style={{ backdropFilter: 'blur(2px)' }}
  >
    <div className="w-2 h-2 md:w-3 md:h-3 border-t-2 border-r-2 border-blue-800 transform rotate-45 mr-1"></div>
  </div>
);

const SliderPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const navigate = useNavigate();
  
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  
  const handleInterested = () => {
    navigate("/FranchiseApplication");
  };

  // Handle custom navigation
  useEffect(() => {
    const prevButton = document.querySelector('.swiper-navigation-prev');
    const nextButton = document.querySelector('.swiper-navigation-next');
    
    if (prevButton && swiperInstance) {
      prevButton.addEventListener('click', () => {
        swiperInstance.slidePrev();
      });
    }
    
    if (nextButton && swiperInstance) {
      nextButton.addEventListener('click', () => {
        swiperInstance.slideNext();
      });
    }
    
    return () => {
      if (prevButton && swiperInstance) {
        prevButton.removeEventListener('click', () => {
          swiperInstance.slidePrev();
        });
      }
      
      if (nextButton && swiperInstance) {
        nextButton.removeEventListener('click', () => {
          swiperInstance.slideNext();
        });
      }
    };
  }, [swiperInstance]);
  
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl font-bold text-blue-800">Our Franchise <span className="text-green-600">Models</span></h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mt-3 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Explore our collection of high-performance EV charging stations
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          {/* Custom navigation arrows */}
          <PrevArrow />
          <NextArrow />
          
          <Swiper 
            onSwiper={setSwiperInstance}
            pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
            effect={"fade"}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination, EffectFade, Autoplay]}
            onSlideChange={handleSlideChange}
            className="mySwiper rounded-2xl overflow-hidden shadow-lg"
          >
            {models.map((model, index) => (
              <SwiperSlide key={model.id}>
                <div className="grid md:grid-cols-2 gap-6 bg-white p-6">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={model.image} 
                      alt={model.name} 
                      className="w-full h-50 md:h-80 object-cover rounded-xl transition-transform duration-700 hover:scale-110" 
                    />
                    <div className="absolute top-4 left-4 bg-blue-100 px-3 py-1 rounded-full shadow-md">
                      <span className="font-semibold text-blue-800">{model.name}</span>
                    </div>
                  </div>
                  
                  <Card active={index === activeIndex}>
                    <CardTitle>{model.name}</CardTitle>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto my-3 rounded-full"></div>
                    <CardDescription>{model.description}</CardDescription>
                    
                    <div className="mt-5 mb-6 flex flex-wrap">
                      {model.features.split(', ').map((feature, idx) => (
                        <FeatureBadge key={idx}>{feature}</FeatureBadge>
                      ))}
                    </div>
                    
                    <div className="flex justify-center gap-4 mt-6">
                      <Button 
                        className="bg-blue-800 hover:bg-blue-700 shadow-md"
                        onClick={() => handleInterested()}
                      >
                        I'm Interested
                      </Button>
                      <Button 
                        className="bg-green-600 hover:bg-green-700 shadow-md"
                        onClick={() => navigate("/contact")}
                      >
                        Learn More
                      </Button>
                    </div>
                  </Card>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Swipe or use arrows to navigate • Auto-slides every 5 seconds</p>
        </div>
      </div>
    </div>
  );
};

export default SliderPage;