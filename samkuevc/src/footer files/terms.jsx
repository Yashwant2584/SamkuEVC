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
          <h3 className="text-md font-medium text-gray-800 mb-2">Welcome to SAMKU EV</h3>
          <p className="text-sm text-gray-700 mb-4">
            Thank you for visiting the official website of <strong>SAMKU EV</strong>, your trusted destination for electric vehicle products, accessories, and tailored EV solutions. These Terms and Conditions govern your use of our website, product purchases, and engagement with our EV solutions. By accessing or using our website and services, you agree to be bound by these terms.
          </p>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">1. Product Orders and EV Solution Enquiries</h3>
          <ul className="list-disc pl-6 mb-4 text-sm text-gray-700">
            <li className="mb-2">
              <strong>Product Orders:</strong> All orders placed through our website are subject to product availability and confirmation of the order price. We reserve the right to cancel or refuse any order.
            </li>
            <li className="mb-2">
              <strong>EV Solution Enquiries:</strong> For custom EV solutions (e.g., diagnostics, performance upgrades, battery support), customers are required to submit accurate details through our enquiry form. Final scope and pricing will be discussed before engagement.
            </li>
          </ul>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">2. Pricing and Payments</h3>
          <ul className="list-disc pl-6 mb-4 text-sm text-gray-700">
            <li className="mb-2">All prices are listed in INR (₹) and are subject to applicable taxes.</li>
            <li className="mb-2">Payments for products and EV solutions must be completed through the approved payment gateways provided on our website.</li>
            <li className="mb-2">Full payment is required prior to product shipment or initiation of any EV solution.</li>
          </ul>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">3. Shipping and Delivery</h3>
          <ul className="list-disc pl-6 mb-4 text-sm text-gray-700">
            <li className="mb-2">Delivery timelines for EV products will be shared at the time of order confirmation.</li>
            <li className="mb-2">Shipping is handled via reliable third-party logistics partners. Delays due to unforeseen circumstances (e.g., weather, strikes) are not under SAMKU EV's control.</li>
          </ul>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">4. Cancellations and Refunds</h3>
          <ul className="list-disc pl-6 mb-4 text-sm text-gray-700">
            <li className="mb-2">Customers may request a cancellation within <strong>[number of hours/days]</strong> of placing an order, provided the order has not been dispatched or the EV solution has not commenced.</li>
            <li className="mb-2">For refund eligibility and process, please refer to our Refund Policy.</li>
          </ul>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">5. Warranty and Returns</h3>
          <ul className="list-disc pl-6 mb-4 text-sm text-gray-700">
            <li className="mb-2">Most EV products come with manufacturer warranties. Please check individual product listings for details.</li>
            <li className="mb-2">Custom EV solutions (e.g., performance tuning or installations) may have limited warranties, subject to prior agreement.</li>
            <li className="mb-2">Return requests must be made within <strong>[number of days]</strong> of receiving the product and are subject to inspection and approval.</li>
          </ul>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">6. User Conduct</h3>
          <p className="text-sm text-gray-700 mb-2">By using our website, you agree:</p>
          <ul className="list-disc pl-6 mb-4 text-sm text-gray-700">
            <li className="mb-2">Not to misuse, damage, or interfere with the website's functionality.</li>
            <li className="mb-2">Not to use false information or impersonate others when submitting forms or making purchases.</li>
            <li className="mb-2">To comply with all applicable laws and regulations during transactions.</li>
          </ul>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">7. Intellectual Property</h3>
          <p className="text-sm text-gray-700 mb-4">
            All content on the SAMKU EV website—including logos, images, product details, and solution descriptions—is the intellectual property of SAMKU EV and may not be reused, replicated, or distributed without written permission.
          </p>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">8. Privacy</h3>
          <p className="text-sm text-gray-700 mb-4">
            Your privacy is important to us. We handle all personal information in accordance with our Privacy Policy, which outlines how data is collected, used, and protected.
          </p>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">9. Limitation of Liability</h3>
          <p className="text-sm text-gray-700 mb-4">
            SAMKU EV will not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our products or solutions. Liability is limited to the value of the product or solution purchased.
          </p>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">10. Modifications</h3>
          <p className="text-sm text-gray-700 mb-4">
            SAMKU EV reserves the right to update these Terms and Conditions at any time. Changes will be effective immediately upon being posted on the website. Users are encouraged to review the terms periodically.
          </p>
          
          <h3 className="text-md font-medium text-gray-800 mb-2">11. Contact Information</h3>
          <p className="text-sm text-gray-700 mb-4">
            For any questions, clarifications, or concerns regarding these terms, please contact us:
          </p>
          <p className="text-sm text-gray-700 mb-4 font-medium">
            <strong>SAMKU EV</strong><br />
            Email: <a href="mailto:samkuevservices@gmail.com" className="text-blue-500 hover:underline">
              samkuevservices@gmail.com
            </a><br />
            Phone: +91 9561137963
          </p>
          
          <p className="text-sm text-gray-700 mb-4">
            By accessing or using our website and offerings, you agree to be bound by these Terms and Conditions. We appreciate your trust in SAMKU EV.
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