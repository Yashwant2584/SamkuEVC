import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { APPLICATION_ENDPOINTS } from '../../config';

const Enquiry = () => {
  const location = useLocation();
  const productData = location.state?.product;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: productData?.name || '',
    productCategory: productData?.category || '',
    powerOutput: productData?.power || '',
    ratedCurrent: productData?.ratedCurrent || '',
    productPrice: productData?.price || '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
    if (!formData.phone) tempErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) tempErrors.phone = 'Phone number must be 10 digits';
    if (!formData.product) tempErrors.product = 'Product is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Create a simple object instead of FormData to ensure field names match exactly
        const response = await fetch(APPLICATION_ENDPOINTS.SUBMIT_ENQUIRY, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            product: formData.product,
            productCategory: formData.productCategory,
            powerOutput: formData.powerOutput,
            ratedCurrent: formData.ratedCurrent,
            productPrice: formData.productPrice,
            message: formData.message
          })
        });
  
        // Check if response is JSON
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Server returned non-JSON response');
        }

        const result = await response.json();
        
        if (response.ok) {
          console.log('Form submitted:', result);
          setSubmitSuccess(true);
          // Reset form after a short delay
          setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              phone: '',
              product: productData?.name || '',
              productCategory: productData?.category || '',
              powerOutput: productData?.power || '',
              ratedCurrent: productData?.ratedCurrent || '',
              productPrice: productData?.price || '',
              message: '',
            });
            setSubmitSuccess(false);
          }, 2000);
        } else {
          throw new Error(result.error || 'Submission failed');
        }
      } catch (error) {
        console.error('Submission error:', error);
        alert(`Error submitting enquiry: ${error.message}`);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-blue-800">Product <span className="text-green-600">Enquiry</span></h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            We'd love to hear from you! Fill out the form below to get started with our EV charging solutions.
          </p>
        </motion.div>
        
        {/* Enquiry Form Card */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-blue-600 hover:shadow-xl transition duration-300 mb-12"
        >
          <div className="p-8 md:p-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-800">Get in Touch</h2>
            </div>
            
            {submitSuccess ? (
              <motion.div 
                className="text-center py-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-4">
                  <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-blue-800 mb-2">Thank You!</h2>
                <p className="text-gray-600 text-lg">Your enquiry has been submitted successfully. Our team will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      } shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 py-3 px-4`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 py-3 px-4`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      } shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 py-3 px-4`}
                      placeholder="10-digit phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                      Product Interest
                    </label>
                    <input
                      type="text"
                      id="product"
                      name="product"
                      value={formData.product}
                      readOnly
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 py-3 px-4 bg-gray-50"
                    />
                  </div>
                </div>

                {/* Additional Product Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700 mb-2">
                      Product Category
                    </label>
                    <input
                      type="text"
                      id="productCategory"
                      name="productCategory"
                      value={formData.productCategory}
                      readOnly
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 py-3 px-4 bg-gray-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="powerOutput" className="block text-sm font-medium text-gray-700 mb-2">
                      Power Output
                    </label>
                    <input
                      type="text"
                      id="powerOutput"
                      name="powerOutput"
                      value={formData.powerOutput}
                      readOnly
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 py-3 px-4 bg-gray-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="ratedCurrent" className="block text-sm font-medium text-gray-700 mb-2">
                      Rated Current
                    </label>
                    <input
                      type="text"
                      id="ratedCurrent"
                      name="ratedCurrent"
                      value={formData.ratedCurrent}
                      readOnly
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 py-3 px-4 bg-gray-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700 mb-2">
                      Product Price
                    </label>
                    <input
                      type="text"
                      id="productPrice"
                      name="productPrice"
                      value={formData.productPrice}
                      readOnly
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 py-3 px-4 bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`block w-full rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    } shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 py-3 px-4`}
                    placeholder="Please provide any specific requirements or questions..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="pt-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center py-3 px-6 border border-transparent rounded-lg shadow-lg text-base font-medium text-white bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
        
        {/* Rest of the component remains the same */}
        {/* Additional Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Why Choose Us card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
            className="border-t-4 border-blue-600 bg-white p-6 rounded-xl shadow-md transition duration-300 transform origin-center"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800">Why Choose Us</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 text-green-600 mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>High-quality EV charging solutions</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 text-green-600 mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Expert installation and service</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 text-green-600 mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Comprehensive warranty coverage</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 text-green-600 mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>24/7 customer support</span>
              </li>
            </ul>
          </motion.div>
          
          {/* What to Expect card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
            className="border-t-4 border-green-600 bg-white p-6 rounded-xl shadow-md transition duration-300 transform origin-center"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-700">What to Expect</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 text-blue-600 mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Response within 24 hours</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 text-blue-600 mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Personalized consultation</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 text-blue-600 mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Detailed product information</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 text-blue-600 mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>No-pressure sales approach</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="bg-white p-8 rounded-2xl shadow-lg overflow-hidden border-b-4 border-green-600 text-center"
        >
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Need immediate assistance?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our team is available during business hours to answer your questions directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span><strong>Phone:</strong> +91 9561137963</span>
            </div>
            <div className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span><strong>Email:</strong> samkuevservices@gmail.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Enquiry;