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
            Got questions? We've got answers! Explore our FAQs below for all the
            juicy details about SAMKU EV.
          </p>

          {/* General Questions */}
          <h3 className="text-md font-medium text-gray-800 mb-4">
            General Questions
          </h3>
          <div className="space-y-6 mb-6">
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
                We're here for you{" "}
                <span className="font-semibold text-purple-500">
                  Monday-Friday: 8:00 AM - 6:00 PM
                </span>
                ,{" "}
                <span className="font-semibold text-purple-500">
                  Saturday: 9:00 AM - 5:00 PM
                </span>
                . Sundays? We're charging up for the week ahead!
              </p>
            </div>
          </div>

          {/* Product & Solutions Questions */}
          <h3 className="text-md font-medium text-gray-800 mb-4">
            Product & Solutions Questions
          </h3>
          <div className="space-y-6 mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-blue-600 mb-2">
                What kind of EV products do you offer?
              </h4>
              <p className="text-sm text-gray-800">
                We bring the <em>power</em> to your drive! From{" "}
                <span className="font-semibold text-blue-500">
                  advanced EV chargers
                </span>{" "}
                (home & commercial) to{" "}
                <span className="font-semibold text-blue-500">
                  high-performance batteries
                </span>{" "}
                and{" "}
                <span className="font-semibold text-blue-500">
                  eco-friendly accessories
                </span>
                —we've got everything to electrify your EV experience!
              </p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-orange-600 mb-2">
                Do you offer EV charging solutions for businesses?
              </h4>
              <p className="text-sm text-gray-800">
                You bet! Whether you run a{" "}
                <span className="font-semibold text-orange-500">fleet</span> or a{" "}
                <span className="font-semibold text-orange-500">
                  commercial property
                </span>
                , our tailored charging infrastructure solutions are built to scale
                with your needs. Think{" "}
                <span className="font-semibold text-orange-500">
                  smart charging
                </span>
                ,{" "}
                <span className="font-semibold text-orange-500">
                  load balancing
                </span>
                , and{" "}
                <span className="font-semibold text-orange-500">
                  seamless installation
                </span>
                —powered by SAMKU EV!
              </p>
            </div>
            <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-pink-600 mb-2">
                Can I buy EV accessories from SAMKU EV?
              </h4>
              <p className="text-sm text-gray-800">
                Absolutely! From{" "}
                <span className="font-semibold text-pink-500">
                  charging cables
                </span>{" "}
                and{" "}
                <span className="font-semibold text-pink-500">adaptors</span> to{" "}
                <span className="font-semibold text-pink-500">
                  performance enhancers
                </span>{" "}
                and{" "}
                <span className="font-semibold text-pink-500">
                  protective gear
                </span>
                —we stock a curated range of accessories to keep your EV stylish and
                functional.
              </p>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-teal-600 mb-2">
                Do you help with EV upgrades?
              </h4>
              <p className="text-sm text-gray-800">
                For sure! We offer{" "}
                <span className="font-semibold text-teal-500">
                  battery upgrades
                </span>
                ,{" "}
                <span className="font-semibold text-teal-500">
                  performance tuning
                </span>
                ,{" "}
                <span className="font-semibold text-teal-500">
                  infotainment installations
                </span>
                , and{" "}
                <span className="font-semibold text-teal-500">
                  software diagnostics
                </span>{" "}
                to take your EV to the next level. Ready to give your ride a glow-up?
              </p>
            </div>
          </div>

          {/* Enquiry & Support Questions */}
          <h3 className="text-md font-medium text-gray-800 mb-4">
            Enquiry & Support Questions
          </h3>
          <div className="space-y-6 mb-6">
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-green-600 mb-2">
                How can I enquire about a product or service?
              </h4>
              <p className="text-sm text-gray-800">
                Easy-peasy! Drop us a message through our{" "}
                <span className="font-semibold text-green-500">
                  contact form
                </span>{" "}
                on the website, ring us at{" "}
                <span className="font-semibold text-green-500">
                  +91 9561137963
                </span>
                , or shoot an email to{" "}
                <span className="font-semibold text-green-500">
                  samkuevservices@gmail.com
                </span>
                . Our support team will zoom right back to you.
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-purple-600 mb-2">
                Can I request a custom solution for my EV needs?
              </h4>
              <p className="text-sm text-gray-800">
                Yes, and we love a challenge! Whether you're looking for a{" "}
                <span className="font-semibold text-purple-500">
                  personalized EV setup
                </span>{" "}
                or a{" "}
                <span className="font-semibold text-purple-500">
                  unique service combo
                </span>
                , our experts will craft a solution that's just right for you.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-blue-600 mb-2">
                How long does it take to get a response after an enquiry?
              </h4>
              <p className="text-sm text-gray-800">
                We're quick on the charge! Expect a response within{" "}
                <span className="font-semibold text-blue-500">24 hours</span>
                —sometimes even faster if we're fully powered up!
              </p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-orange-600 mb-2">
                Do you offer remote consultations or virtual demos?
              </h4>
              <p className="text-sm text-gray-800">
                Totally! We can walk you through our{" "}
                <span className="font-semibold text-orange-500">products</span>,{" "}
                <span className="font-semibold text-orange-500">services</span>,
                and{" "}
                <span className="font-semibold text-orange-500">
                  EV solutions
                </span>{" "}
                via video calls or screen shares—because we believe great service
                should come to you.
              </p>
            </div>
          </div>

          {/* EV Support & Care */}
          <h3 className="text-md font-medium text-gray-800 mb-4">
            EV Support & Care
          </h3>
          <div className="space-y-6 mb-6">
            <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-pink-600 mb-2">
                What kind of EV maintenance plans do you offer?
              </h4>
              <p className="text-sm text-gray-800">
                We've got{" "}
                <span className="font-semibold text-pink-500">
                  tiered service plans
                </span>
                —from{" "}
                <span className="font-semibold text-pink-500">
                  basic checkups
                </span>{" "}
                to{" "}
                <span className="font-semibold text-pink-500">
                  premium all-in-one maintenance packages
                </span>
                . Keep your EV humming without a hiccup!
              </p>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-teal-600 mb-2">
                Do you provide emergency EV support?
              </h4>
              <p className="text-sm text-gray-800">
                Yes, we do! Our{" "}
                <span className="font-semibold text-teal-500">
                  roadside assistance
                </span>{" "}
                is just a call away—whether it's a{" "}
                <span className="font-semibold text-teal-500">battery issue</span>{" "}
                or a{" "}
                <span className="font-semibold text-teal-500">
                  software glitch
                </span>
                , we'll get you moving again.
              </p>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold text-yellow-600 mb-2">
                Is there a warranty on your products and services?
              </h4>
              <p className="text-sm text-gray-800">
                Absolutely. All our products and services come with a{" "}
                <span className="font-semibold text-yellow-500">warranty</span>{" "}
                because we stand behind what we power. Ask us for specifics on your
                purchase!
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <h3 className="text-md font-medium text-gray-800 mb-4">Contact Us</h3>
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-6">
            <p className="text-sm text-gray-800 mb-2">
              Need more info? Hit us up anytime. We're here to drive your EV journey forward—<em>the SAMKU EV way!</em>
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