import React, { useState } from "react";
import { X } from "lucide-react";

const TermsAndConditionsModal = ({ isOpen, onClose }) => {
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
          <h2 className="text-lg font-semibold">Terms and Conditions</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 border-2 border-gray-300 p-1 rounded-sm">
            <X size={18} />
          </button>
        </div>
        
        {/* Scrollable Content Area */}
        <div 
          className="flex-1 overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
          onScroll={handleScroll}
        >
          <h3 className="text-md font-medium text-gray-800 mb-2">Welcome to SAMKU Service</h3>
          <p className="text-sm text-gray-700 mb-4">
            Welcome to SAMKU Service, your trusted electric vehicle service centre. We are committed to providing exceptional service to ensure your electric vehicle is running smoothly and efficiently. Please review the following terms and conditions:
          </p>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">Customer Instructions</h3>
          <ul className="list-decimal pl-6 mb-4 text-sm text-gray-700">
            <li className="mb-2">
              <strong>Scheduling an Appointment:</strong> To schedule an appointment, please call us or book online. We recommend scheduling in advance to ensure prompt service.
            </li>
            <li className="mb-2">
              <strong>Arrival Time:</strong> Please arrive at least 10 minutes before your scheduled appointment time to allow for check-in and paperwork.
            </li>
            <li className="mb-2">
              <strong>Vehicle Check-In:</strong> Our service advisors will greet you and ask about your vehicle's performance. Please provide detailed information to help diagnose issues.
            </li>
            <li className="mb-2">
              <strong>Service Process:</strong> Our technicians will inspect your vehicle and provide an estimate. We will obtain your approval before performing any work.
            </li>
            <li className="mb-2">
              <strong>Service Time:</strong> Service duration varies by type. We'll provide an estimated completion time at drop-off.
            </li>
            <li className="mb-2">
              <strong>Loaner Vehicles:</strong> Available for extended services. Please request in advance if needed.
            </li>
            <li className="mb-2">
              <strong>Payment:</strong> Due upon vehicle pickup. We accept all major credit cards and cash.
            </li>
            <li className="mb-2">
              <strong>Follow-Up:</strong> We'll follow up after service to ensure your satisfaction.
            </li>
            <li className="mb-2">
              <strong>Charging:</strong> Charging stations are available. Please inform us if you need charging services.
            </li>
            <li className="mb-2">
              <strong>Warranty:</strong> We provide warranty repairs according to manufacturer guidelines.
            </li>
            <li className="mb-2">
              <strong>Communication:</strong> We maintain clear communication throughout the service process.
            </li>
          </ul>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">Contact Information</h3>
          <p className="text-sm text-gray-700 mb-4">
            For any questions about our terms and conditions, contact us at:
          </p>
          <p className="text-sm text-gray-700 mb-4 font-medium">
            SAMKU EV POWERING PVT. LTD.<br />
            Email: <a href="mailto:samkuevservices@gmail.com" className="text-blue-500 hover:underline">
              samkuevservices@gmail.com
            </a><br />
            Phone: +91 9561137963
          </p>
          
          <p className="text-sm text-gray-700 mb-4">
            By using our services, you agree to these terms and conditions. We reserve the right to modify these terms at any time.
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

export default TermsAndConditionsModal;