import React, { useState } from "react";
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
    className={`px-4 py-2 rounded-lg text-white transition-all duration-300 transform hover:scale-105 ${className}`}
  >
    {children}
  </button>
);


const Card = ({ children, active }) => (
  <div className={`p-6 text-center  bg-white rounded-xl transition-all duration-500 ${active ? 'scale-105' : 'scale-100'}`}>
    {children}
  </div>
);

const CardTitle = ({ children }) => (
  <h2 className="text-2xl font-bold text-gray-800">{children}</h2>
);

const CardDescription = ({ children }) => (
  <p className="text-gray-600 mt-2">{children}</p>
);

const FeatureBadge = ({ children }) => (
  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    {children}
  </span>
);

const SliderPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  
  const handleInterested = () => {
    navigate("/FranchiseApplication");
  };
  

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl text-gray-800">Our Franchise Models</h1>
        <p className="text-gray-600 mt-2">Explore our collection of high-performance vehicles</p>
      </div>
      
      <Swiper 
        navigation={true}
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
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        onSlideChange={handleSlideChange}
        className="mySwiper rounded-xl overflow-hidden "
      >
        {models.map((model, index) => (
          <SwiperSlide key={model.id}>
            <div className="grid md:grid-cols-2 gap-6 bg-gradient-to-r from-gray-50 to-gray-100 p-6">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={model.image} 
                  alt={model.name} 
                  className="w-full h-50 md:h-80 object-cover rounded-xl transition-transform duration-700 hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-md">
                  <span className="font-semibold text-gray-800">{model.name}</span>
                </div>
              </div>
              
              <Card active={index === activeIndex}>
                <CardTitle>{model.name}</CardTitle>
                <div className="w-16 h-1 bg-blue-500 mx-auto my-3 rounded-full"></div>
                <CardDescription>{model.description}</CardDescription>
                
                <div className="mt-4 mb-6">
                  {model.features.split(', ').map((feature, idx) => (
                    <FeatureBadge key={idx}>{feature}</FeatureBadge>
                  ))}
                </div>
                
                <div className="flex justify-center gap-4 mt-6">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 shadow-md"
                    onClick={() => handleInterested()}
                  >
                    I'm Interested
                  </Button>
                </div>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>Swipe or use arrows to navigate • Auto-slides every 5 seconds</p>
      </div>
    </div>
  );
};

export default SliderPage;