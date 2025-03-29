import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../images/logo.png';
import { Upload, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FranchiseApplication = () => {
  const navigate = useNavigate();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      photo: null,
    },
    businessInfo: {
      businessExperience: '',
      companyName: '',
      gstNumber: '',
      investmentCapacity: '',
      preferredLocation: '',
      propertySize: '',
    },
    technicalInfo: {
      technicalBackground: '',
      automobileExperience: '',
      evKnowledge: '',
      certifications: '',
    },
    financialInfo: {
      expectedInvestment: '',
      fundingSource: '',
      timelineToStart: '',
    },
    additionalInfo: {
      whyJoinUs: '',
      references: '',
    }
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [errors, setErrors] = useState({});

  // Enhanced responsive classes
  const inputClasses = "w-full px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all text-sm md:text-base";
  const textareaClasses = "w-full px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all resize-none text-sm md:text-base";

  // Comprehensive responsive styles
  const styles = `
    /* Base styles */
    * {
      box-sizing: border-box;
    }

    /* Mobile-first approach */
    @media (max-width: 640px) {
      .container {
        padding: 1rem;
      }
      
      .form-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .section {
        padding: 1rem;
        margin-bottom: 1rem;
      }

      .section-title {
        font-size: 1.125rem;
        margin-bottom: 1rem;
      }

      .field-grid {
        grid-template-columns: 1fr;
        gap: 0.75rem;
      }

      .input-group {
        margin-bottom: 1rem;
      }

      .photo-container {
        margin: 1rem auto;
        width: 100%;
        max-width: 150px;
      }

      .buttons-container {
        flex-direction: column;
        gap: 0.75rem;
      }

      .button {
        width: 100%;
        padding: 0.75rem;
        font-size: 0.875rem;
      }

      .header-logo {
        height: 2.5rem;
      }

      .header-title {
        font-size: 1.25rem;
      }

      .header-subtitle {
        font-size: 0.75rem;
      }
    }

    /* Tablet and above */
    @media (min-width: 641px) and (max-width: 1024px) {
      .container {
        padding: 1.5rem;
      }

      .form-grid {
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }

      .section {
        padding: 1.5rem;
      }

      .button {
        padding: 0.75rem 1.5rem;
      }
    }

    /* Desktop */
    @media (min-width: 1025px) {
      .form-grid {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }

      .section {
        padding: 2rem;
      }
    }
  `;

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
    if (errors[`${section}.${field}`]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[`${section}.${field}`];
        return newErrors;
      });
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('Photo size should not exceed 2MB');
        return;
      }
      handleInputChange('personalInfo', 'photo', file);
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handlePrint = useCallback(() => {
    if (formRef.current) {
      const printWindow = window.open('', '_blank');
      const applicationId = `${new Date().getFullYear()}${String(Date.now()).slice(-8)}`;
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SAMKU SERVICE - Franchise Application</title>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
              
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              
              body {
                font-family: 'Inter', sans-serif;
                font-size: 12pt;
                line-height: 1.6;
                color: #1f2937;
              }
              
              .page {
                width: 210mm;
                min-height: 297mm;
                padding: 20mm;
                margin: 0 auto;
                position: relative;
                page-break-after: always;
              }
              
              .print-header {
                text-align: center;
                margin-bottom: 2rem;
                padding-bottom: 1rem;
                border-bottom: 2px solid #2563eb;
              }
              
              .print-header img {
                height: 60px;
                margin-bottom: 1rem;
              }
              
              .section {
                margin-bottom: 1.5rem;
              }
              
              .section-title {
                font-size: 14pt;
                font-weight: 600;
                margin-bottom: 1rem;
                color: #2563eb;
              }
              
              .field-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
              }
              
              .field-group {
                margin-bottom: 0.75rem;
              }
              
              .field-label {
                font-weight: 500;
                font-size: 10pt;
                color: #4b5563;
              }
              
              .field-value {
                margin-top: 0.25rem;
                padding: 0.5rem;
                background: #f9fafb;
                border: 1px solid #e5e7eb;
                min-height: 24px;
              }
              
              .photo-container img {
                width: 35mm;
                height: 45mm;
                object-fit: cover;
                border: 1px solid #e5e7eb;
              }
              
              .footer {
                position: absolute;
                bottom: 20mm;
                left: 20mm;
                right: 20mm;
                text-align: center;
                font-size: 8pt;
                color: #6b7280;
              }
            </style>
          </head>
          <body>
            <div class="page">
              <div class="application-id">Application ID: ${applicationId}</div>
              <div class="print-header">
                <img src="${logo}" alt="SAMKU SERVICE Logo" />
                <h1>Franchise Application Form</h1>
              </div>
              <!-- Rest of the print content remains similar -->
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      setTimeout(() => printWindow.print(), 500);
    }
  }, [formData, photoPreview]);

  const validateForm = () => {
    const newErrors = {};
    // Validation logic remains the same
    if (!formData.personalInfo.fullName.trim()) newErrors['personalInfo.fullName'] = 'Full name is required';
    if (!formData.personalInfo.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors['personalInfo.email'] = 'Valid email is required';
    if (!formData.personalInfo.phone.match(/^\d{10}$/)) newErrors['personalInfo.phone'] = 'Valid 10-digit phone number is required';
    if (!formData.personalInfo.address.trim()) newErrors['personalInfo.address'] = 'Address is required';
    if (!formData.personalInfo.city.trim()) newErrors['personalInfo.city'] = 'City is required';
    if (!formData.personalInfo.state.trim()) newErrors['personalInfo.state'] = 'State is required';
    if (!formData.personalInfo.pincode.match(/^\d{6}$/)) newErrors['personalInfo.pincode'] = 'Valid 6-digit pincode is required';
    if (!formData.businessInfo.investmentCapacity.trim()) newErrors['businessInfo.investmentCapacity'] = 'Investment capacity is required';
    if (!formData.businessInfo.propertySize.trim()) newErrors['businessInfo.propertySize'] = 'Property size is required';
    if (!formData.personalInfo.photo) newErrors['personalInfo.photo'] = 'Photo is required';
    if (!formData.technicalInfo.technicalBackground.trim()) newErrors['technicalInfo.technicalBackground'] = 'Technical background is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const formDataToSubmit = new FormData();
        Object.keys(formData).forEach(section => {
          Object.keys(formData[section]).forEach(field => {
            formDataToSubmit.append(`${section}.${field}`, formData[section][field]);
          });
        });

        const response = await fetch('http://localhost:5000/api/franchise-application', {
          method: 'POST',
          body: formDataToSubmit,
        });

        const result = await response.json();
        if (response.ok) {
          alert('Application submitted successfully!');
          setFormData({
            personalInfo: { fullName: '', email: '', phone: '', address: '', city: '', state: '', pincode: '', photo: null },
            businessInfo: { businessExperience: '', companyName: '', gstNumber: '', investmentCapacity: '', preferredLocation: '', propertySize: '' },
            technicalInfo: { technicalBackground: '', automobileExperience: '', evKnowledge: '', certifications: '' },
            financialInfo: { expectedInvestment: '', fundingSource: '', timelineToStart: '' },
            additionalInfo: { whyJoinUs: '', references: '' }
          });
          setPhotoPreview(null);
        } else {
          throw new Error(result.error || 'Submission failed');
        }
      } catch (error) {
        console.error('Submission error:', error);
        alert('Error submitting application. Please try again.');
      }
    } else {
      alert('Please fill all required fields correctly.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-4 px-2  sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto container">
        <div ref={formRef} className="bg-white shadow-2xl rounded-2xl relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors z-10"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="p-4 sm:p-6 mt-15 lg:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 border-b border-gray-100 pb-4">
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                <img src={logo} alt="SAMKU SERVICE Logo" className="h-10 sm:h-14 header-logo object-contain" />
                <div className="text-center sm:text-left">
                  <h1 className="text-lg sm:text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 header-title">
                    Service Center Franchise Application
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 header-subtitle">Join our growing network of service centers</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="form-grid">
              <div className="space-y-6">
                <section className="bg-gray-50 rounded-xl shadow-sm section">
                  <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-4 section-title">Personal Information</h2>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 space-y-4 input-group">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.personalInfo.fullName}
                            onChange={(e) => handleInputChange('personalInfo', 'fullName', e.target.value.replace(/[^a-zA-Z\s]/g, ''))}
                            className={inputClasses}
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                          <input
                            type="email"
                            required
                            value={formData.personalInfo.email}
                            onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                            className={inputClasses}
                            placeholder="Enter your email"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            value={formData.personalInfo.phone}
                            onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value.replace(/[^0-9]/g, ''))}
                            className={inputClasses}
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                      <div className="photo-container">
                        {photoPreview ? (
                          <div className="relative w-full h-36 rounded-lg overflow-hidden shadow-md">
                            <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                            <button
                              type="button"
                              onClick={() => {
                                setPhotoPreview(null);
                                handleInputChange('personalInfo', 'photo', null);
                              }}
                              className="absolute top-2 right-2 p-1 bg-red-500 rounded-full text-white hover:bg-red-600"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
                            <Upload className="w-8 h-8 text-gray-400" />
                            <span className="mt-2 text-xs sm:text-sm font-medium text-gray-600">Upload Photo *</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handlePhotoChange}
                              className="hidden"
                              required
                            />
                          </label>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                      <textarea
                        required
                        value={formData.personalInfo.address}
                        onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
                        className={textareaClasses}
                        rows="2"
                        placeholder="Enter your complete address"
                      />
                    </div>
                    <div className="field-grid">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                        <input
                          type="text"
                          required
                          value={formData.personalInfo.city}
                          onChange={(e) => handleInputChange('personalInfo', 'city', e.target.value.replace(/[^a-zA-Z\s]/g, ''))}
                          className={inputClasses}
                          placeholder="Enter your city"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                        <input
                          type="text"
                          required
                          value={formData.personalInfo.state}
                          onChange={(e) => handleInputChange('personalInfo', 'state', e.target.value.replace(/[^a-zA-Z\s]/g, ''))}
                          className={inputClasses}
                          placeholder="Enter your state"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
                        <input
                          type="text"
                          required
                          maxLength={6}
                          value={formData.personalInfo.pincode}
                          onChange={(e) => handleInputChange('personalInfo', 'pincode', e.target.value.replace(/[^0-9]/g, ''))}
                          className={inputClasses}
                          placeholder="Enter your pincode"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-gray-50 rounded-xl shadow-sm section">
                  <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-4 section-title">Technical Background</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Technical Background *</label>
                      <textarea
                        required
                        className={textareaClasses}
                        rows="2"
                        value={formData.technicalInfo.technicalBackground}
                        onChange={(e) => handleInputChange('technicalInfo', 'technicalBackground', e.target.value)}
                        placeholder="Enter your technical background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">EV Knowledge</label>
                      <textarea
                        className={textareaClasses}
                        rows="2"
                        value={formData.technicalInfo.evKnowledge}
                        onChange={(e) => handleInputChange('technicalInfo', 'evKnowledge', e.target.value)}
                        placeholder="Enter your EV knowledge"
                      />
                    </div>
                  </div>
                </section>
              </div>

              <div className="space-y-6">
                <section className="bg-gray-50 rounded-xl shadow-sm section">
                  <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-4 section-title">Business Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Business Experience *</label>
                      <textarea
                        required
                        className={textareaClasses}
                        rows="2"
                        value={formData.businessInfo.businessExperience}
                        onChange={(e) => handleInputChange('businessInfo', 'businessExperience', e.target.value)}
                        placeholder="Enter your business experience"
                      />
                    </div>
                    <div className="field-grid">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                        <input
                          type="text"
                          required
                          className={inputClasses}
                          value={formData.businessInfo.companyName}
                          onChange={(e) => handleInputChange('businessInfo', 'companyName', e.target.value)}
                          placeholder="Enter your company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">GST Number *</label>
                        <input
                          type="text"
                          required
                          maxLength={15}
                          className={inputClasses}
                          value={formData.businessInfo.gstNumber}
                          onChange={(e) => handleInputChange('businessInfo', 'gstNumber', e.target.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase())}
                          placeholder="Enter your GST number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Investment Capacity *</label>
                        <select
                          required
                          className={inputClasses}
                          value={formData.businessInfo.investmentCapacity}
                          onChange={(e) => handleInputChange('businessInfo', 'investmentCapacity', e.target.value)}
                        >
                          <option value="">Select Investment Capacity</option>
                          <option value="1L to 5L">1L to 5L</option>
                          <option value="5L to 15L">5L to 15L</option>
                          <option value="15L to 30L">15L to 30L</option>
                          <option value="30L to 50L">30L to 50L</option>
                          <option value="50L +">50L Above</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Property Size (sq. ft.) *</label>
                        <input
                          type="text"
                          required
                          maxLength={6}
                          className={inputClasses}
                          value={formData.businessInfo.propertySize}
                          onChange={(e) => handleInputChange('businessInfo', 'propertySize', e.target.value.replace(/[^0-9]/g, ''))}
                          placeholder="Enter property size"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Location *</label>
                        <input
                          type="text"
                          required
                          className={inputClasses}
                          value={formData.businessInfo.preferredLocation}
                          onChange={(e) => handleInputChange('businessInfo', 'preferredLocation', e.target.value)}
                          placeholder="Enter preferred location"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-gray-50 rounded-xl shadow-sm section">
                  <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-4 section-title">Additional Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Why join SAMKU SERVICE?</label>
                      <textarea
                        className={textareaClasses}
                        rows="2"
                        value={formData.additionalInfo.whyJoinUs}
                        onChange={(e) => handleInputChange('additionalInfo', 'whyJoinUs', e.target.value)}
                        placeholder="Enter your reason"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">References</label>
                      <textarea
                        className={textareaClasses}
                        rows="2"
                        value={formData.additionalInfo.references}
                        onChange={(e) => handleInputChange('additionalInfo', 'references', e.target.value)}
                        placeholder="Enter your references"
                      />
                    </div>
                  </div>
                </section>
              </div>

              <div className="col-span-1 sm:col-span-2 mt-6">
                <div className="buttons-container flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
                  <motion.button
                    type="button"
                    onClick={handlePrint}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="button bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-sm"
                  >
                    Print Form
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="button bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors shadow-sm"
                  >
                    Submit Application
                  </motion.button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseApplication;