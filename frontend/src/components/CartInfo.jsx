import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaTrashAlt, FaShoppingCart } from "react-icons/fa";
import { useCart } from '../CartContext.jsx';
import cardsData from "../data/cardsData";

const CartInfo = () => {
  const [activeTab, setActiveTab] = useState("saved");
  const { itemCart } = useCart();
  const navigate = useNavigate();


  const bookedServices = [
    {
      id: 3,
      title: "EV Charger Repair",
      subtitle: "Expert Diagnostics",
      description: "Professional diagnostic and repair services for EV chargers.",
      price: "7,499",
      rating: "4.5",
      appointmentDate: "March 15, 2025",
      appointmentTime: "10:00 AM - 12:00 PM",
      status: "Confirmed",
      image: cardsData[2].image // Replace with actual path
    }
  ];

  // Function to go back to previous page
  const handleGoBack = () => {
    navigate(-1);
  };

  // Function to remove from saved services
  const handleRemoveSaved = (id) => {
    // You'd implement this with your context/state management
    console.log(`Removing saved service with id: ${id}`);
  };

  // Function to cancel a booking
  const handleCancelBooking = (id) => {
    // You'd implement this with your context/state management
    console.log(`Canceling booking with id: ${id}`);
  };

  // Function to schedule a saved service
  const handleScheduleSaved = (id) => {
    // You'd implement this to navigate to scheduling component
    console.log(`Scheduling service with id: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleGoBack}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Go back"
            >
              <FaArrowLeft className="text-gray-700" />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">My Services</h1>
          </div>
          <div className="flex items-center">
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto mt-6 px-4">
        <div className="border-b border-gray-200">
          <div className="flex space-x-8">
            <button
              className={`py-4 px-1 border-b-2 font-medium text-lg transition-colors ${
                activeTab === "saved"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("saved")}
            >
              Saved Services
              {cardsData.length > 0 && (
                <span className="ml-2 bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">
                  {cardsData.length}
                </span>
              )}
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-lg transition-colors ${
                activeTab === "booked"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("booked")}
            >
              Booked Services
              {bookedServices.length > 0 && (
                <span className="ml-2 bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">
                  {bookedServices.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto mt-6 px-4 pb-16">
        {activeTab === "saved" && (
          <div className="space-y-4">
            {cardsData.length === 0 ? (
              <div className="text-center py-16">
                <FaShoppingCart className="mx-auto text-5xl text-gray-300 mb-4" />
                <h3 className="text-xl font-medium text-gray-700">No saved services</h3>
                <p className="mt-2 text-gray-500">Save services you're interested in for later</p>
              </div>
            ) : (
              cardsData.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0 h-48 md:h-auto md:w-112 relative">
                      <img
                        src={service.image || "/api/placeholder/240/180"}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
                        <span className="flex items-center">
                          <span className="text-sm font-medium ml-1 mr-1">{service.rating}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start">
                        <div >
                          <h2 className="text-xl font-bold text-gray-900 w-full max-sm:w-[80%]">{service.title}</h2>
                          <p className="text-md text-gray-600 mt-1">{service.subtitle}</p>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 w-full">₹ {service.price}</div>
                      </div>
                      
                      <p className="mt-4 text-gray-600">{service.description}</p>
                      
                      <div className="mt-6 flex justify-between items-center ">
                        <button
                          onClick={() => handleRemoveSaved(service.id)}
                          className="flex items-center text-red-600 hover:text-red-800 transition-colors"
                        >
                          <FaTrashAlt className="mr-2" />
                          Remove
                        </button>
                        <button
                          onClick={() => handleScheduleSaved(service.id)}
                          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm transition-colors"
                        >
                          Schedule Service
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === "booked" && (
          <div className="space-y-4">
            {bookedServices.length === 0 ? (
              <div className="text-center py-16">
                <FaCalendarAlt className="mx-auto text-5xl text-gray-300 mb-4" />
                <h3 className="text-xl font-medium text-gray-700">No booked services</h3>
                <p className="mt-2 text-gray-500">Your scheduled services will appear here</p>
              </div>
            ) : (
              bookedServices.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0 h-48 md:h-auto md:w-112 relative">
                      <img
                        src={service.image || "/api/placeholder/240/180"}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
                        <span className="flex items-center">
                          <span className="text-sm font-medium ml-1 mr-1">{service.rating}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className={`absolute bottom-0 w-full py-2 text-center text-white text-sm font-medium ${service.status === 'Confirmed' ? 'bg-green-600' : service.status === 'Pending' ? 'bg-yellow-600' : 'bg-blue-600'}`}>
                        {service.status}
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-xl font-bold text-gray-900">{service.title}</h2>
                          <p className="text-md text-gray-600 mt-1">{service.subtitle}</p>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">₹ {service.price}</div>
                      </div>
                      
                      <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center text-gray-700 mb-2">
                          <FaCalendarAlt className="mr-2 text-blue-600" />
                          <span className="font-medium">Appointment:</span>
                          <span className="ml-2">{service.appointmentDate}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span className="font-medium">Time:</span>
                          <span className="ml-2">{service.appointmentTime}</span>
                        </div>
                      </div>
                      
                      <p className="mt-4 text-gray-600">{service.description}</p>
                      
                      <div className="mt-6 flex justify-between items-center">
                        <button
                          onClick={() => handleCancelBooking(service.id)}
                          className="flex items-center text-red-600 hover:text-red-800 transition-colors"
                        >
                          <FaTrashAlt className="mr-2" />
                          Cancel Booking
                        </button>
                        <button
                          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm transition-colors"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartInfo;