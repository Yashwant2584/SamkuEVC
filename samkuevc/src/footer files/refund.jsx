import React, { useState } from "react";
import { X } from "lucide-react";

const RefundPolicyModal = ({ isOpen, onClose }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const handleScroll = (e) => {
    const position = e.target.scrollTop;
    setScrollPosition(position);
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white-500 bg-opacity-30 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg 
        w-[90%] md:w-[60%] lg:w-[50%] 
        h-[90vh] 
        flex flex-col
        p-2 
        pl-3 pr-3
        animate-slide-up md:animate-none"
      >
        {/* Header */}
        <div className="flex justify-between items-center ml-2 mb-2">
          <h2 className="text-lg font-semibold">Refund Policy</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 border-2 border-gray-300 p-1 rounded-sm">
            <X size={18} />
          </button>
        </div>
        
        {/* Scrollable Content Area */}
        <div 
          className="flex-1 overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
          onScroll={handleScroll}
        >
          <h3 className="text-md font-medium text-gray-800 mb-2">Refund Policy for EV Products and Solutions</h3>
          <p className="text-sm text-gray-700 mb-4">
            At <strong>SAMKU EV</strong>, we are dedicated to delivering high-quality electric vehicle products, accessories, and cutting-edge <strong>EV solutions</strong>. This Refund Policy outlines the terms and conditions for refunds related to purchases made through our website or directly via our official representatives.
            Please read this policy carefully before purchasing any EV product or opting for our EV solutions.
          </p>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">Refund Eligibility</h3>
          <ul className="list-disc pl-6 mb-4 text-sm text-gray-700">
            <li>The EV product received is defective, damaged during delivery, or not as described on our platform.</li>
            <li>The EV solution provided does not meet the promised specifications or expectations as agreed during the enquiry or purchase process.</li>
            <li>A cancellation request is raised <strong>within [number of days]</strong> of purchase, provided the EV product has not been dispatched or the EV solution has not been initiated.</li>
            <li>For digital or consultation-based EV solutions, refunds are only applicable if the solution has not been activated or utilized in any form.</li>
          </ul>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">Refund Process</h3>
          <ol className="list-decimal pl-6 mb-4 text-sm text-gray-700">
            <li>Contact our support team within <strong>[number of days]</strong> of the purchase or delivery date.</li>
            <li>Share your order ID, date of purchase, detailed reason for the refund, and any necessary proof (such as images of the product or delivery slip).</li>
            <li>Our team will assess the request and respond with a resolution within a reasonable timeframe.</li>
            <li>If approved, the refund will be processed to the original payment method within <strong>7–10 business days</strong>.</li>
          </ol>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">Non-Refundable Situations</h3>
          <ul className="list-disc pl-6 mb-4 text-sm text-gray-700">
            <li>EV products that are used, tampered with, damaged due to mishandling, or altered post-delivery.</li>
            <li>EV solutions that have been fully or partially implemented according to agreed terms.</li>
            <li>Orders canceled after dispatch of the product or after the EV solution work has begun.</li>
            <li>Any EV product or solution purchased from unauthorized third-party vendors.</li>
            <li>Custom-built solutions or specially configured EV packages designed specifically for individual clients or businesses.</li>
          </ul>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">Limitations</h3>
          <ul className="list-disc pl-6 mb-4 text-sm text-gray-700">
            <li>This Refund Policy is applicable <strong>only for direct purchases</strong> made through SAMKU EV's official website or authorized communication channels.</li>
            <li>Charges levied by third-party platforms, marketplaces, or external payment providers are <strong>not covered</strong> under this policy.</li>
            <li>SAMKU EV reserves the right to amend this policy at any time. All updates will be effective immediately upon being published on our website.</li>
          </ul>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">Contact Information</h3>
          <p className="text-sm text-gray-700 mb-4">
            If you have any questions about this policy or need assistance with a refund:
          </p>
          <p className="text-sm text-gray-700 mb-4 font-medium">
            <strong>Grievance Officer</strong><br />
            📧 <strong>Email:</strong> <a href="mailto:samkuevservices@gmail.com" className="text-blue-500 hover:underline">
            samkuevservices@gmail.com
            </a>
          </p>
        </div>
        
        {/* Footer */}
        <div className="flex-shrink-0 pt-4 border-t border-gray-400 border-opacity-50 pb-2">
          <div className="flex justify-end items-center">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 hover:cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyModal;