import React, { useState } from "react";
import { X, Maximize2, Minimize2 } from "lucide-react";

const FAQModal = ({ isOpen, onClose }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Function to track scroll position
  const handleScroll = (e) => {
    const position = e.target.scrollTop;
    setScrollPosition(position);
  };

  // Toggle full-screen mode
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-white-500 bg-opacity-30 backdrop-blur-md flex items-center justify-center z-50 ${
        isFullScreen ? "p-0" : "p-4"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg flex flex-col ${
          isFullScreen
            ? "w-full h-full"
            : "w-[90%] md:w-[60%] lg:w-[50%] h-[90vh]"
        } p-2 pl-3 pr-3 animate-slide-up md:animate-none`}
      >
        {/* Header */}
        <div className="flex justify-between items-center ml-2 mb-2">
          <h2 className="text-lg font-semibold text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleFullScreen}
              className="text-gray-500 hover:text-gray-700 border-2 border-gray-300 p-1 rounded-sm transition-colors duration-200"
              aria-label={isFullScreen ? "Minimize" : "Maximize"}
            >
              {isFullScreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 border-2 border-gray-300 p-1 rounded-sm transition-colors duration-200"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div
          className="flex-1 overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
          onScroll={handleScroll}
        >
          <p className="text-sm text-gray-700 mb-6 italic">
            Got questions? We’ve got answers! Explore our FAQs below for all the
            juicy details about SAMKU EV POWERING PRIVATE LIMITED.
          </p>

          {/* General Questions */}
          <h3 className="text-md font-medium text-gray-800 mb-4">
            General Questions
          </h3>
          <div className="space-y-6 mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-blue-600 mb-2">
                What services do you offer?
              </h4>
              <p className="text-sm text-gray-800">
                We’re your one-stop EV shop! From{" "}
                <span className="font-semibold text-blue-500">
                  diagnostics
                </span>{" "}
                and{" "}
                <span className="font-semibold text-blue-500">
                  battery maintenance
                </span>{" "}
                to{" "}
                <span className="font-semibold text-blue-500">
                  charger installation
                </span>{" "}
                and{" "}
                <span className="font-semibold text-blue-500">
                  roadside assistance 
                </span>
                 -we’ve got it all, plus more! Think tyre services, EV washing,
                and performance upgrades!
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-green-600 mb-2">
                Where are you located?
              </h4>
              <p className="text-sm text-gray-800">
                Catch us at{" "}
                <span className="font-semibold text-green-500">
                  Vighnaharta Services Industrial Complex
                </span>
                , Charholi Khurd Road, Pune, Maharashtra, India - 412105. Your
                EVs deserve the best spot!
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-purple-600 mb-2">
                What are your business hours?
              </h4>
              <p className="text-sm text-gray-800">
                We’re here for you{" "}
                <span className="font-semibold text-purple-500">
                  Monday-Friday: 8:00 AM - 6:00 PM
                </span>
                ,{" "}
                <span className="font-semibold text-purple-500">
                  Saturday: 9:00 AM - 5:00 PM
                </span>
                . Sundays? We’re charging up for the week ahead!
              </p>
            </div>
          </div>

          {/* Service-Related Questions */}
          <h3 className="text-md font-medium text-gray-800 mb-4">
            Service-Related Questions
          </h3>
          <div className="space-y-6 mb-6">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-orange-600 mb-2">
                How do I book a service?
              </h4>
              <p className="text-sm text-gray-800">
                Super easy! Hit up our website or reach out at{" "}
                <span className="font-semibold text-orange-500">
                  +91 9561137963
                </span>{" "}
                or{" "}
                <span className="font-semibold text-orange-500">
                  samkuevservices@gmail.com
                </span>
                . We’ll get your EV rolling in no time!
              </p>
            </div>
            <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-pink-600 mb-2">
                What information do you collect?
              </h4>
              <p className="text-sm text-gray-800">
                Just the essentials: your{" "}
                <span className="font-semibold text-pink-500">name</span>,{" "}
                <span className="font-semibold text-pink-500">
                  phone number
                </span>
                ,{" "}
                <span className="font-semibold text-pink-500">email</span>,{" "}
                <span className="font-semibold text-pink-500">
                  service profile
                </span>
                , and vehicle details like{" "}
                <span className="font-semibold text-pink-500">make</span>,{" "}
                <span className="font-semibold text-pink-500">model</span>, and{" "}
                <span className="font-semibold text-pink-500">
                  RTO registration
                </span>
                . All safe with us!
              </p>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-teal-600 mb-2">
                Do you service all EV brands?
              </h4>
              <p className="text-sm text-gray-800">
                Absolutely! We’re EV brand-agnostic - every{" "}
                <span className="font-semibold text-teal-500">model</span> and{" "}
                <span className="font-semibold text-teal-500">make</span> gets
                the VIP treatment here!
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <h3 className="text-md font-medium text-gray-800 mb-4">Contact Us</h3>
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6">
            <p className="text-sm text-gray-800 mb-2">
              Still curious? Reach out to us anytime at:
            </p>
            <p className="text-sm text-gray-800 font-medium">
              Email:{" "}
              <a
                href="mailto:samkuevservices@gmail.com"
                className="text-yellow-500 hover:underline font-semibold"
              >
                samkuevservices@gmail.com
              </a>
              <br />
              Phone:{" "}
              <span className="text-yellow-500 font-semibold">
                +91 9561137963
              </span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 pt-4 border-t border-gray-400 border-opacity-50 pb-2">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 hover:cursor-pointer transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQModal;

//