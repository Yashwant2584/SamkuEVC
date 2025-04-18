import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from '../landingpage/Navbar';

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: null,
    photo: null,
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Full name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.position) tempErrors.position = "Please select a position";
    if (!formData.experience) tempErrors.experience = "Please select experience level";
    if (!formData.resume) tempErrors.resume = "Resume is required";
    else if (formData.resume.size > 2000000) tempErrors.resume = "Resume must be less than 2MB";
    else if (!formData.resume.name.match(/\.(pdf|doc|docx)$/)) {
      tempErrors.resume = "Resume must be PDF, DOC, or DOCX";
    }
    if (formData.photo) {
      if (formData.photo.size > 1000000) tempErrors.photo = "Photo must be less than 1MB";
      else if (!formData.photo.name.match(/\.(jpg|jpeg|png)$/)) {
        tempErrors.photo = "Photo must be JPG, JPEG, or PNG";
      }
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Application submitted successfully!");
    }
  };

  const inputClasses = "w-full px-4 py-2 rounded-lg border border-gray-300 outline-none hover:ring-2 hover:ring-blue-100 hover:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Careers at SAMKU</h1>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">We Are Hiring!</h3>
              <p className="text-gray-600">
                Join our innovative team at SAMKU EV and drive the future of electric vehicles! We seek passionate professionals to deliver exceptional EV services.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1 animate-pulse">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 animate-pulse">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter your 10-digit phone number"
                  maxLength={10}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 animate-pulse">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Applying for Position <span className="text-red-500">*</span></label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select a position</option>
                  <option value="EV Technician">EV Technician</option>
                  <option value="Service Advisor">Service Advisor</option>
                  <option value="Charging Station Manager">Charging Station Manager</option>
                  <option value="Customer Support">Customer Support</option>
                </select>
                {errors.position && <p className="text-red-500 text-xs mt-1 animate-pulse">{errors.position}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience <span className="text-red-500">*</span></label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
                {errors.experience && <p className="text-red-500 text-xs mt-1 animate-pulse">{errors.experience}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume (PDF/DOC/DOCX, max 2MB) <span className="text-red-500">*</span></label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  className={inputClasses}
                />
                {errors.resume && <p className="text-red-500 text-xs mt-1 animate-pulse">{errors.resume}</p>}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Submit Application</span>
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Careers;