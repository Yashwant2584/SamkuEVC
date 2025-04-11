import React from "react";
import Navbar from '../landingpage/Navbar';


const Refund = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Refund Policy</h1>
          
          <p className="text-gray-700 mb-6">
            At <strong>SAMKU EV</strong>, we strive to ensure complete customer satisfaction with our EV products and solutions. This Refund Policy outlines the terms and conditions under which refunds may be processed for our products and services.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Eligibility</h2>
          <p className="text-gray-700 mb-6">
            Refunds may be considered under the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Product defects or manufacturing issues</li>
            <li>Non-delivery of ordered products</li>
            <li>Significant deviation from product specifications</li>
            <li>Service cancellation before commencement</li>
            <li>Force majeure events preventing service delivery</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Process</h2>
          <p className="text-gray-700 mb-2">
            To request a refund, please follow these steps:
          </p>
          <ol className="list-decimal pl-6 mb-6 text-gray-700">
            <li>Contact our customer support team within 7 days of product delivery or service completion</li>
            <li>Provide your order details and reason for refund request</li>
            <li>Submit any relevant documentation or evidence supporting your claim</li>
            <li>Our team will review your request within 5 business days</li>
            <li>If approved, refund will be processed to the original payment method within 10 business days</li>
          </ol>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Non-Refundable Situations</h2>
          <p className="text-gray-700 mb-6">
            Refunds will not be provided in the following cases:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Change of mind after product delivery</li>
            <li>Normal wear and tear of products</li>
            <li>Damage caused by improper use or maintenance</li>
            <li>Services already rendered or partially completed</li>
            <li>Customized or made-to-order products</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Limitations</h2>
          <p className="text-gray-700 mb-6">
            Please note the following limitations:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Refund amount may be subject to deduction of shipping and handling charges</li>
            <li>Original packaging and accessories must be returned in good condition</li>
            <li>Refund processing time may vary based on payment method and bank processing times</li>
            <li>International orders may be subject to additional terms and conditions</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            For any questions or concerns regarding our refund policy, please contact our customer support team:
          </p>
          <p className="text-gray-700 mb-6 font-medium">
            <strong>Email:</strong> <a href="mailto:samkuevservices@gmail.com" className="text-blue-500 hover:underline">
              samkuevservices@gmail.com
            </a>
            <br />
            <strong>Phone:</strong> +91 1234567890
          </p>
          
          <p className="text-sm text-gray-500 italic">
            Note: This refund policy is subject to change without prior notice. Please check this page periodically for updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Refund;