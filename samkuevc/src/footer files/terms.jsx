import React from "react";
import Navbar from '../landingpage/Navbar';


const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-25">
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          
          <p className="text-gray-700 mb-6">
            Welcome to <strong>SAMKU EV</strong>. By accessing or using our website, products, and services, you agree to be bound by these Terms of Service. Please read them carefully before proceeding.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-6">
            By accessing or using our website, products, or services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use of Services</h2>
          <p className="text-gray-700 mb-2">
            You agree to use our services only for lawful purposes and in accordance with these Terms. You shall not:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon the rights of others</li>
            <li>Interfere with or disrupt our services</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use our services for any fraudulent or malicious purposes</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Intellectual Property</h2>
          <p className="text-gray-700 mb-6">
            All content, trademarks, logos, and other intellectual property on our website and services are the property of SAMKU EV or our licensors. You may not use, reproduce, or distribute any content without our express written permission.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Product and Service Information</h2>
          <p className="text-gray-700 mb-6">
            We strive to provide accurate information about our products and services. However, we do not warrant that all information is complete, current, or error-free. Product specifications and availability are subject to change without notice.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-700 mb-6">
            To the maximum extent permitted by law, SAMKU EV shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Changes to Terms</h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the modified terms.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Governing Law</h2>
          <p className="text-gray-700 mb-6">
            These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <p className="text-gray-700 mb-6 font-medium">
            <strong>Email:</strong> <a href="mailto:samkuevservices@gmail.com" className="text-blue-500 hover:underline">
              samkuevservices@gmail.com
            </a>
            <br />
            <strong>Phone:</strong> +91 1234567890
          </p>
          
          <p className="text-sm text-gray-500 italic">
            Last updated: March 20, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;