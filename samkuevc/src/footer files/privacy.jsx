import React from "react";
import Navbar from '../landingpage/Navbar';


const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-25">
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-sm italic text-gray-700 mb-2">
            [In terms of Rule 4 of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011]
          </p>
          
          <p className="text-sm font-semibold text-gray-700 mb-4">
            Effective Date: 20.03.2025
          </p>
          
          <p className="text-gray-700 mb-6">
            This Privacy Policy outlines the policies and procedures followed by <strong>SAMKU EV</strong> (hereinafter referred to as "we," "us," or "our") regarding the collection, use, storage, and protection of personal data or information provided by users visiting our website, making product enquiries, or using our EV solutions.
          </p>
          
          <p className="text-gray-700 mb-6">
            We are committed to protecting your privacy and ensuring transparency while complying with applicable Indian laws, including the <strong>Information Technology Act, 2000</strong> and the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong> ("IT Rules"). By interacting with our website, submitting a query, or availing our EV services and solutions, you agree to the terms set forth in this Privacy Policy.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Definitions</h2>
          <p className="text-gray-700 mb-6">
            <strong>(a) Service Profile</strong> – Refers to the date and time of service, type of service or product purchased/enquired, parts or accessories involved, payment method, and amount of payment.
            <br />
            <strong>(b) Enquiry Data</strong> – Information shared by the user through the website for product or service-related enquiries.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-2">
            We may collect the following personal and product-related information through our website, email, or service interactions:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Name of the user</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Enquiry message or description of interest</li>
            <li>Service profile (as defined above)</li>
            <li>Vehicle make / Company name</li>
            <li>Vehicle model</li>
            <li>Vehicle RTO Registration number</li>
            <li>User's preferences and feedback</li>
            <li>IP address and browser information (for website analytics)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Purpose of Collection</h2>
          <p className="text-gray-700 mb-2">
            We collect and use this information for the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>To respond to enquiries and provide accurate information about our products and services</li>
            <li>To facilitate service appointments or product purchases</li>
            <li>To improve user experience on our website</li>
            <li>To provide customer support and resolve issues</li>
            <li>To personalize recommendations and communication</li>
            <li>To comply with legal and regulatory obligations</li>
            <li>To manage internal operations such as analytics, security checks, and quality control</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Consent</h2>
          <p className="text-gray-700 mb-6">
            By voluntarily submitting your information via our website or other communication channels, you consent to the collection, storage, and processing of your personal data in accordance with this Privacy Policy. You may withdraw your consent at any time by contacting us (see Section 8 – Contact Us). Please note that withdrawal of consent may limit our ability to provide services or respond to certain enquiries.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Retention</h2>
          <p className="text-gray-700 mb-6">
            We retain your personal data for as long as necessary to fulfill the purposes for which it was collected or as required under applicable laws. We take reasonable steps to ensure your data is stored securely and deleted once it is no longer needed.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
          <p className="text-gray-700 mb-6">
            We implement industry-standard security practices and procedures to safeguard your personal information from unauthorized access, misuse, or disclosure. This includes physical, technical, and administrative controls.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Disclosure</h2>
          <p className="text-gray-700 mb-6">
            We do not sell or rent your personal information to third parties. However, we may share information with trusted vendors or partners solely for the purpose of delivering our services, under strict confidentiality agreements.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-2">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Access your personal data</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw your consent</li>
            <li>Lodge a complaint with a data protection authority (as applicable)</li>
          </ul>
          <p className="text-gray-700 mb-6">
            To exercise these rights, please contact us using the details below.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions, concerns, or requests related to this Privacy Policy or the use of your personal data, please contact our Grievance Officer:
          </p>
          <p className="text-gray-700 mb-6 font-medium">
            <strong>Grievance Officer</strong><br />
            <strong>Email:</strong> <a href="mailto:samkuevservices@gmail.com" className="text-blue-500 hover:underline">
              samkuevservices@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;