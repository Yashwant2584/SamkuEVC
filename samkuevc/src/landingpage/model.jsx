import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
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
  },
  {
    id: 2,
    name: "Station Canopy Model",
    image: model2,
  },
  {
    id: 3,
    name: "Station Canopy Model",
    image: model3, 
  }
];

const Button = ({ children, className, onClick }) => (
  <button 
    onClick={onClick}
    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-white font-medium transition-all duration-200 ${className}`}
  >
    {children}
  </button>
);

// Custom arrow components with improved positioning
const PrevArrow = () => (
  <div 
    className="swiper-navigation-prev absolute left-3 md:left-5 top-1/2 transform -translate-y-1/2 z-10 w-7 h-7 md:w-9 md:h-9 bg-white bg-opacity-70 rounded-full shadow-md flex items-center justify-center cursor-pointer"
    style={{ backdropFilter: 'blur(3px)' }}
  >
    <div className="w-2 h-2 md:w-2.5 md:h-2.5 border-t-2 border-l-2 border-blue-800 transform -rotate-45 ml-0.5"></div>
  </div>
);

const NextArrow = () => (
  <div 
    className="swiper-navigation-next absolute right-3 md:right-5 top-1/2 transform -translate-y-1/2 z-10 w-7 h-7 md:w-9 md:h-9 bg-white bg-opacity-70 rounded-full shadow-md flex items-center justify-center cursor-pointer"
    style={{ backdropFilter: 'blur(3px)' }}
  >
    <div className="w-2 h-2 md:w-2.5 md:h-2.5 border-t-2 border-r-2 border-blue-800 transform rotate-45 mr-0.5"></div>
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
    <div className="pt-20 pb-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-10"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-blue-800">Our Franchise <span className="text-green-600">Models</span></h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-500 mt-3 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Explore our collection of high-performance EV charging stations
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          {/* {models.map((model, index) => (
            <div key={model.id} className={`block sm:hidden text-center mb-3 ${activeIndex === index ? 'block' : 'hidden'}`}>
              <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 text-lg">
                {model.name}
              </h3>
            </div>
          ))} */}
          
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
              delay: 4500, // Slightly faster autoplay (was 5000)
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination, EffectFade, Autoplay]}
            onSlideChange={handleSlideChange}
            className="mySwiper rounded-xl overflow-hidden shadow-lg"
          >
            {models.map((model) => (
              <SwiperSlide key={model.id}>
                <div className="bg-white">
                  <div className="relative overflow-hidden w-full">
                    <img 
                      src={model.image} 
                      alt={model.name} 
                      className="w-full h-56 sm:h-72 md:h-96 lg:h-[32rem] object-cover" 
                    />
                    
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
                    
                    {/* Model name with gradient styling - only visible on non-mobile */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 hidden sm:block">
                      <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 text-base sm:text-xl">
                        {model.name}
                      </h3>
                    </div>
                    
                    {/* Buttons positioned higher than before */}
                    <div className="absolute bottom-8 sm:bottom-10 inset-x-0 z-10">
                      <div className="flex justify-center space-x-3">
                        <Button 
                          className="bg-blue-700 hover:bg-blue-600 shadow-md text-xs sm:text-sm"
                          onClick={() => handleInterested()}
                        >
                          I'm Interested
                        </Button>
                        <Button 
                          className="bg-green-600 hover:bg-green-500 shadow-md text-xs sm:text-sm"
                          onClick={() => navigate("/stationcanopymodel")}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        
        <div className="mt-4 text-center text-gray-500 text-xs">
          <p>Swipe or use arrows to navigate</p>
        </div>
      </div>
    </div>
  );
};

export default SliderPage;