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
          <h3 className="text-md font-medium text-gray-800 mb-2">Refund Policy for EV Charging and Vehicle Services</h3>
          <p className="text-sm text-gray-700 mb-4">
            At SAMKU EV POWERING PVT. LTD., we strive to provide high-quality electric vehicle charging services and EV-related solutions. This refund policy outlines the terms and conditions for refunds related to our EV charging stations and vehicle services. Please read this policy carefully before using our services.
          </p>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">Refund Eligibility</h3>
          <ul className="list-disc pl-6 mb-4 text-sm text-gray-700">
            <li>Refunds will be provided for charging sessions that failed due to technical issues on our end.</li>
            <li>Refunds are available if a charging station was inaccessible due to malfunction or unavailability.</li>
            <li>Refunds will not be issued for charging sessions interrupted due to external factors such as power outages or network disruptions.</li>
            <li>For EV vehicle services, refunds are applicable only if the service was not provided as per the agreed terms.</li>
            <li>Refunds for EV vehicle repairs or maintenance are only eligible if the service was not performed as promised or if there was a defect in the service provided.</li>
          </ul>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">Refund Process</h3>
          <ul className="list-disc pl-6 mb-4 text-sm text-gray-700">
            <li>To request a refund, you must contact our customer support team within **[number of days]** days from the service date.</li>
            <li>Provide details of the issue, including the date, time, location, and supporting documentation.</li>
            <li>Our customer support team will review your request and determine eligibility within a reasonable timeframe.</li>
            <li>If approved, refunds will be processed through the original payment method.</li>
          </ul>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">Non-Refundable Situations</h3>
          <ul className="list-disc pl-6 mb-4 text-sm text-gray-700">
            <li>Refunds will not be provided for successfully completed charging sessions.</li>
            <li>Service fees for vehicle repairs, diagnostics, and routine maintenance are non-refundable once the service has been performed.</li>
            <li>No refunds will be issued for scheduled maintenance work that caused temporary unavailability of charging stations or services.</li>
          </ul>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">Limitations</h3>
          <ul className="list-disc pl-6 mb-4 text-sm text-gray-700">
            <li>This refund policy applies only to fees paid directly to SAMKU EV POWERING PVT. LTD.</li>
            <li>Third-party fees or charges incurred through external payment providers are not covered.</li>
            <li>We reserve the right to modify this refund policy at any time, effective immediately upon update.</li>
          </ul>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">Contact Information</h3>
          <p className="text-sm text-gray-700 mb-4">
            If you have any questions about our refund policy, please contact our support team at:
          </p>
          <p className="text-sm text-gray-700 mb-4 font-medium">
                Grievance officer<br />
                Email: <a href="mailto:samkuevservices@gmail.com" className="text-blue-500 hover:underline">
                samkuevservices@gmail.com
                </a>
          </p>
          
          <p className="text-sm text-gray-700 mb-4">
            By using our charging stations and EV services, you agree to this refund policy.
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

//.