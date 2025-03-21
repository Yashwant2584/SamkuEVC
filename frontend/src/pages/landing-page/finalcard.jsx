import React, { useState } from "react";
import img1 from "../images/charger-installation-service.png"

const EVChargerCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    "Level 1 & 2 charger installation",
    "Regular maintenance checks",
    "Expert technical support"
  ];

  const handleServiceToggle = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white border-2 border-gray-300 border-opacity-20 px-6 overflow-hidden">

      <span className="bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md mt-5 mb-2 inline-block">
        Prime Service
      </span>


      {/* Header Section with Background Image */}
      <div className="relative h-48 bg-gray-200">
        <img
          src={img1}
          alt="EV Charger"
          className="absolute inset-0 z-20 w-full h-full object-cover"
        />
        {/* Overlay with Title and Price */}
        <div className="absolute inset-0 bg-transparent bg-opacity-50 flex z-50 flex-col justify-center px-5 mb-15">
        <h2 className="text-xl font-semibold w-[20vw] py-2 max-w-sm text-gray-800 break-words">
          EV Charger Installation & Maintenance
        </h2>

          <p className="text-4xl font-bold text-gray-900 mt-1">₹ 9,999</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="p-1">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold mb-2">Professional & Efficient.</h3>
          <button className="p-0 mb-2" aria-label="Save to wishlist">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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

        <p className="text-gray-600 text-sm mb-4">
          Professional installation and maintenance services for all types of EV chargers.
        </p>

        {/* Services List */}
        <div className="mb-3 pl-4">
          {services.map((service) => (
            <label key={service} className="flex items-center text-semibold gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="h-3 w-3 rounded border-gray-500"
                checked={selectedServices.includes(service)}
                onChange={() => handleServiceToggle(service)}
                aria-label={`Select ${service}`}
              />
              <span className="text-gray-700">{service}</span>
            </label>
          ))}
        </div>


        {/* Action Buttons */}
        <div className="flex justify-center mb-4 items-center mt-6">
          <button
            className="px-6 py-2 border border-black rounded hover:bg-gray-100 transition"
            aria-label="Schedule service"
          >
            Schedule Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default EVChargerCard;
