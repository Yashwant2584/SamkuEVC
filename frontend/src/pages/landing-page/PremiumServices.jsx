import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../../images/service_card_coverimages/charger-installation-service.png";
import img2 from "../../images/service_card_coverimages/washing-service.png";
import img3 from "../../images/service_card_coverimages/battery-services.png";
import img4 from "../../images/service_card_coverimages/software-service.png";

const ServiceCard = ({ title, image, backgroundColor }) => {
  const navigate = useNavigate();
  // cartinfo navigation funcion
  const handleCartNavigation = () => {
    navigate("/services");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };
  

  return (
    <div className={`${backgroundColor} rounded-lg overflow-hidden shadow-md h-full`}>
      <div className="relative h-48 sm:h-56 md:h-64">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 z-20 w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-transparent bg-opacity-50 flex flex-col justify-between p-4 sm:p-6 z-40">
          <h3 className="text-lg sm:text-xl md:text-2xl font-mono mt-3 sm:mt-5 max-w-full sm:max-w-[200px] leading-tight">
            {title}
          </h3>
          
          <button
            onClick={handleCartNavigation}
            className="inline-flex items-center rounded-sm bg-white border-2 border-black px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base hover:bg-black hover:text-white transition-colors w-fit"
          >
            Schedule Service
            <svg
              className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const PremiumService = () => {
  const navigate = useNavigate();
  // cartinfo navigation funcion
  const handleCartNavigation = () => {
    navigate("/services");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const services = [
    {
      title: "EV Charger Installation & Maintenance",
      backgroundColor: "bg-blue-100",
      image: img1
    },
    {
      title: "EV Washing & Detailing",
      backgroundColor: "bg-yellow-100",
      image: img2
    },
    {
      title: "Routine Maintenance Services",
      backgroundColor: "bg-red-100",
      image: img4
    },
    {
      title: "Battery Services",
      backgroundColor: "bg-blue-100",
      image: img3
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12" id="services-section">
      <div className="text-center mb-8 sm:mb-12 mt-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">Our Services</h2>
        <p className="text-base sm:text-lg text-gray-600">
          Premium care for your electric vehicle
        </p>
      </div>

      {/* Desktop and tablet grid */}
      <div className="hidden sm:grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
          />
        ))}
      </div>

      {/* Mobile Grid - Improved version */}
      <div className="grid grid-cols-2 xs:grid-cols-2 gap-4 sm:hidden mb-8">
  {services.map((service, index) => (
    <div key={index} className={`${service.backgroundColor} rounded-lg overflow-hidden shadow-md`}>
      <div className="flex flex-col h-full">
        {/* Image container with fixed height and overlay content */}
        <div className="relative h-32 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-between p-2 bg-transperent bg-opacity-50 text-white">
            {/* Title with break-words */}
            <h3 className="text-xs font-semibold mt-2 ml-2 break-words text-black w-[80px]  overflow-hidden line-clamp-3 ">
              {service.title}
            </h3>
            
            {/* Schedule button */}
            <button
              onClick={handleCartNavigation}
              className="inline-flex items-center justify-center bg-white text-black px-2 py-1 text-xs font-medium rounded-sm hover:bg-black hover:text-white transition-colors w-[55%] mb-2 mt-1"
            >
              Schedule
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
      <div className="text-center">
        <button
          onClick={() => navigate('/services')}
          className="inline-flex items-center border-2 border-black px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base hover:bg-black hover:text-white transition-colors"
        >
          View All Services
          <svg
            className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PremiumService;