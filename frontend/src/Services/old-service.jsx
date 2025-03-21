import React, { useState } from "react";
import img1 from "../images/charger-installation-service.png";
import img2 from "../images/washing-service.png";
import img3 from "../images/charger-installation-service.png";

const EVChargerCard = ({ title, price, services, image }) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceToggle = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white border-2 border-gray-300 border-opacity-20 px-4 sm:px-6 overflow-hidden">
      <span className="bg-gradient-to-r from-green-400 to-green-600 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full shadow-md mt-4 sm:mt-5 mb-2 inline-block">
        Prime Service
      </span>

      <div className="relative h-40 sm:h-48 bg-gray-200">
        <img
          src={image}
          alt="EV Charger"
          className="absolute inset-0 z-20 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-transparent bg-opacity-50 flex z-50 flex-col justify-center px-3 sm:px-5 mb-15">
          <h2 className="text-lg sm:text-xl font-semibold w-full sm:w-[12vw] py-1 sm:py-2 max-w-xs text-gray-800 break-words">
            {title}
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1">₹ {price}</p>
        </div>
      </div>

      <div className="p-1">
        <div className="flex justify-between items-center">
          <h3 className="text-base sm:text-lg font-semibold mb-2">Professional & Efficient.</h3>
          <button className="p-0 mb-2" aria-label="Save to wishlist">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
        </div>

        <p className="text-gray-600 text-xs sm:text-sm mb-4">
          Professional installation and maintenance services for all types of EV chargers.
        </p>

        <div className="mb-3 pl-2 sm:pl-4">
          {services.map((service) => (
            <label key={service} className="flex items-center text-semibold gap-2 cursor-pointer mb-1">
              <input
                type="checkbox"
                className="h-3 w-3 rounded border-gray-500"
                checked={selectedServices.includes(service)}
                onChange={() => handleServiceToggle(service)}
                aria-label={`Select ${service}`}
              />
              <span className="text-xs sm:text-sm text-gray-700">{service}</span>
            </label>
          ))}
        </div>

        <div className="flex justify-center mb-4 items-center mt-4 sm:mt-6">
          <button className="px-4 sm:px-6 py-2 border border-black rounded text-sm sm:text-base hover:bg-gray-100 transition" aria-label="Schedule service">
            Schedule Service
          </button>
        </div>
      </div>
    </div>
  );
};

const EVChargerCardsList = () => {
  const chargerData = [
    {
      title: "Home EV Charger Installation",
      price: "9,999",
      services: ["Level 1 & 2 charger installation", "Regular maintenance", "Technical support"],
      image: img1
    },
    {
      title: "Commercial EV Charger Setup",
      price: "19,999",
      services: ["Fast charger installation", "Site assessment", "24/7 support"],
      image: img2
    },
    {
      title: "Fleet Charging Solutions",
      price: "29,999",
      services: ["Bulk installation", "Custom maintenance plans", "Dedicated support"],
      image: img3
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6">
      {chargerData.map((charger, index) => (
        <EVChargerCard key={index} {...charger} />
      ))}
    </div>
  );
};

export default EVChargerCardsList;