import React from "react";
import Navbar from '../landingpage/Navbar';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-gray-600 mb-8 italic">
            Got questions? We've got answers! Explore our FAQs below for all the juicy details about SAMKU EV.
          </p>

          {/* General Questions */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">General Questions</h2>
          <div className="space-y-6 mb-8">
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-green-600 mb-3">Where are you located?</h3>
              <p className="text-gray-800">
                Catch us at{" "}
                <span className="font-semibold text-green-500">
                  Vighnaharta Services Industrial Complex
                </span>
                , Charholi Khurd Road, Pune, Maharashtra, India - 412105. Your
                EVs deserve the best spot!
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-600 mb-3">What are your business hours?</h3>
              <p className="text-gray-800">
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Product & Solutions Questions</h2>
          <div className="space-y-6 mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-600 mb-3">What kind of EV products do you offer?</h3>
              <p className="text-gray-800">
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
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-orange-600 mb-3">Do you offer EV charging solutions for businesses?</h3>
              <p className="text-gray-800">
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
            <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-pink-600 mb-3">Can I buy EV accessories from SAMKU EV?</h3>
              <p className="text-gray-800">
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
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-teal-600 mb-3">Do you help with EV upgrades?</h3>
              <p className="text-gray-800">
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Enquiry & Support Questions</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-green-600 mb-3">How can I enquire about a product or service?</h3>
              <p className="text-gray-800">
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
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-600 mb-3">Can I request a custom solution for my EV needs?</h3>
              <p className="text-gray-800">
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
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-600 mb-3">How long does it take to get a response after an enquiry?</h3>
              <p className="text-gray-800">
                We're quick on the charge! Expect a response within{" "}
                <span className="font-semibold text-blue-500">24 hours</span>
                —sometimes even faster if we're fully powered up!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;