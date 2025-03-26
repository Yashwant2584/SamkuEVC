import React, { useState } from "react";
import { X } from "lucide-react";

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Function to track scroll position
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
          <h2 className="text-lg font-semibold">Privacy Policy</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 border-2 border-gray-300 p-1 rounded-sm">
            <X size={18} />
          </button>
        </div>
        
        {/* Scrollable Content Area */}
        <div 
            className="flex-1 overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
            onScroll={handleScroll}
            >
            <p className="text-sm text-gray-700 mb-4">
                [In terms of Rule 4 of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011]
            </p>
            
            <p className="text-sm text-gray-700 mb-4">
                This Privacy Policy effective from 20.03.2025 outlines the policies and procedures followed by SAMKU EV POWERING PRIVATE LIMITED (hereinafter referred to as "we," "us," or "our") regarding the collection, use, storage, and protection of personal data or information provided by the users of our electric vehicle servicing solutions. We are committed to protecting your privacy and complying with applicable Indian laws, including the Information Technology Act, 2000, (hereinafter referred to as "Act") and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ("IT Rules"), concerning the collection and processing of personal information. By using our EV servicing solutions, you agree to the terms and practices described in this Privacy Policy.
            </p>
            
            <h3 className="text-md font-medium text-gray-800 mb-2">Definitions</h3>
            <p className="text-sm text-gray-700 mb-4">
                (a) Service Profile - Date and time of service, type of service, parts replaced, payment method, and amount of payment.
            </p>
            
            <h3 className="text-md font-medium text-gray-800 mb-2">Information We Collect</h3>
            <p className="text-sm text-gray-700 mb-2">
                We collect the following personal information from users:
            </p>
            <ul className="list-disc pl-6 mb-4 text-sm text-gray-700">
                <li>Name of the User</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Service profile</li>
                <li>Vehicle make / Company name</li>
                <li>Vehicle model</li>
                <li>Vehicle RTO Registration number</li>
            </ul>
            
            <h3 className="text-md font-medium text-gray-800 mb-2">Purpose of Collection</h3>
            <p className="text-sm text-gray-700 mb-2">
                We collect this information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-sm text-gray-700">
                <li>Facilitating the servicing process and ensuring a seamless user experience</li>
                <li>Communicating with users regarding their service sessions</li>
                <li>Providing customer support and assistance</li>
                <li>Complying with legal obligations and resolving any disputes or grievances</li>
            </ul>
            
            <h3 className="text-md font-medium text-gray-800 mb-2">Consent</h3>
            <p className="text-sm text-gray-700 mb-4">
                By providing your personal information during the EV servicing process, you consent to the collection, use, and processing of your information as described in this Privacy Policy. You have the right to withdraw your consent at any time by contacting us using the information provided in Section 8 (Contact Us).
            </p>
            
            <h3 className="text-md font-medium text-gray-800 mb-2">Contact Us</h3>
            <p className="text-sm text-gray-700 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at:
            </p>
            <p className="text-sm text-gray-700 mb-4 font-medium">
                Grievance officer<br />
                Email: <a href="mailto:samkuevservices@gmail.com" className="text-blue-500 hover:underline">
                samkuevservices@gmail.com
                </a>
            </p>

            </div>
            
            {/* Footer */}
            <div className="flex-shrink-0 pt-4 border-t border-gray-400 border-opacity-50 pb-2">
            <div className="flex justify-between items-center">
                <div>
                <label className="flex items-center text-sm ml-2">
                    <input
                    type="checkbox"
                    className="mr-2 h-4 w-4"
                    />
                    I agree to the Privacy Policy
                </label>
                </div>
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

export default PrivacyPolicyModal;

//.