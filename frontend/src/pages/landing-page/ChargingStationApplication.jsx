import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../../images/logo.png';
import { Upload, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChargingStationApplication = () => {
  const navigate = useNavigate();
  // Keep all existing state and handler functions exactly the same
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
      gstNumber: '',
      investmentCapacity: '',
      preferredLocation: '',
      propertySize: '',
      companyName: '',
    },
    technicalInfo: {
      electricalInfrastructure: '',
      gridConnectivity: '',
      powerAvailability: '',
      certifications: '',
    },
    financialInfo: {
      expectedInvestment: '',
      fundingSource: '',
      timelineToStart: '',
    },
    additionalInfo: {
      whyJoinUs: '',
      additionalComments: '',
      references: '',
    }
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [errors, setErrors] = useState({});

  // Update the input classes to include outline-none to remove default focus border
  const inputClasses = "w-full px-4 py-2 rounded-lg border border-gray-300 outline-none hover:ring-2 hover:ring-green-100 hover:border-green-500 focus:ring-2 focus:ring-green-100 focus:border-green-500 transition-all";
  const textareaClasses = "w-full px-4 py-2 rounded-lg border border-gray-300 outline-none hover:ring-2 hover:ring-green-100 hover:border-green-500 focus:ring-2 focus:ring-green-100 focus:border-green-500 transition-all resize-none";


  // Keep all existing handler functions exactly the same
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
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Personal info validation
    if (!formData.personalInfo.fullName.trim()) 
      newErrors['personalInfo.fullName'] = 'Full name is required';
    if (!formData.personalInfo.email.trim())
      newErrors['personalInfo.email'] = 'Email is required';
    else if (!formData.personalInfo.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors['personalInfo.email'] = 'Valid email is required';
    if (!formData.personalInfo.phone.trim())
      newErrors['personalInfo.phone'] = 'Phone number is required';
    else if (!formData.personalInfo.phone.match(/^\d{10}$/))
      newErrors['personalInfo.phone'] = 'Valid 10-digit phone number is required';
    if (!formData.personalInfo.address.trim())
      newErrors['personalInfo.address'] = 'Address is required';
    if (!formData.personalInfo.city.trim())
      newErrors['personalInfo.city'] = 'City is required';
    if (!formData.personalInfo.state.trim())
      newErrors['personalInfo.state'] = 'State is required';
    if (!formData.personalInfo.pincode.match(/^\d{6}$/))
      newErrors['personalInfo.pincode'] = 'Valid 6-digit pincode is required';

    // Photo Validation
    if (!formData.personalInfo.photo) {
      newErrors['personalInfo.photo'] = 'Photo is required';
    }

    // Business info validation
    if (!formData.businessInfo.investmentCapacity.trim())
      newErrors['businessInfo.investmentCapacity'] = 'Investment capacity is required';
    if (!formData.businessInfo.propertySize.trim())
      newErrors['businessInfo.propertySize'] = 'Property size is required';
    if (!formData.businessInfo.businessExperience.trim())
      newErrors['businessInfo.businessExperience'] = 'Business experience is required';
    if (!formData.technicalInfo.electricalInfrastructure.trim())
      newErrors['technicalInfo.electricalInfrastructure'] = 'Electrical infrastructure details are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const formDataToSubmit = {
          ...formData,
          personalInfo: {
            ...formData.personalInfo,
            photo: formData.personalInfo.photo ? photoPreview : null
          }
        };
        console.log('Form submitted:', formDataToSubmit);
        alert('Application submitted successfully!');
      } catch (error) {
        console.error('Submission error:', error);
        alert('Error submitting application. Please try again.');
      }
    } else {
      const firstError = Object.values(errors)[0];
      alert(firstError || 'Please fill all required fields correctly.');
    }
  };

  // Add media queries for responsiveness
  const styles = `
  @media (max-width: 768px) {
    .field-grid {
      display: block; // Stack fields vertically
    }
    .field-group {
      margin-bottom: 20px;
      width: 100%; // Ensure full width on mobile
      display: flex;
      flex-direction: column; // Stack fields vertically
    }
    .signature-grid {
      grid-template-columns: 1fr;
    }
    .signature-box {
      margin-bottom: 20px;
    }
    .footer {
      font-size: 10pt;
    }
    .text-sm {
      font-size: 14px; // Increase text size for better readability
    }
    .px-6, .px-8 {
      padding-left: 1rem; // Increase padding for buttons
      padding-right: 1rem;
    }
    .py-3 {
      padding-top: 0.75rem; // Increase padding for buttons
      padding-bottom: 0.75rem;
    }
    .section {
      margin-bottom: 30px; // Add margin between sections
    }
    .grid {
      display: flex;
      flex-direction: column; // Stack all grid items vertically on mobile
    }
  }
  `;

  // Add the styles to the document head
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }, []);

  const handlePrint = useCallback(() => {
    if (formRef.current) {
      const printWindow = window.open('', '_blank');
      const applicationId = `${new Date().getFullYear()}${String(Date.now()).slice(-8)}`;
      printWindow.document.write(`
       <!DOCTYPE html>
        <html>
          <head>
            <title>SAMKU EVC - Charging Station Application</title>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
              
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              
              :root {
                --page-width: 210mm;
                --page-height: 297mm;
                --margin: 20mm;
              }
              
              @page {
                size: A4;
                margin: 0;
              }
              
              body { 
                font-family: 'Inter', sans-serif;
                font-size: 12pt;
                line-height: 1.6;
                color: #1f2937;
                background: white;
              }
              
              .page {
                width: var(--page-width);
                min-height: var(--page-height);
                padding: var(--margin);
                margin: 0 auto;
                position: relative;
                page-break-after: always;
              }
              
              .print-header {
                text-align: center;
                margin-bottom: 30px;
                padding-bottom: 15px;
                border-bottom: 2px solid #2D6A4F;
              }
              
              .print-header img {
                height: 60px;
                margin-bottom: 15px;
              }
              
              .print-header h1 {
                font-size: 24pt;
                font-weight: 700;
                margin: 0;
              }
              
              .section {
                margin-bottom: 20px;
                break-inside: avoid;
              }
              
              .section-title {
                font-size: 14pt;
                font-weight: 600;
                margin-bottom: 15px;
                padding-bottom: 5px;
                border-bottom: 1px solid #e5e7eb;
                color: #2D6A4F;
              }
              
              .personal-info-container {
                display: grid;
                grid-template-columns: 65% 35%;
                gap: 15px;
              }
              
              .personal-info-fields .field-group:last-child {
                grid-column: 1 / -1;
              }
              
              .field-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
              }
              
              .field-group {
                margin-bottom: 10px;
              }
              
              .field-label {
                font-weight: 500;
                font-size: 10pt;
                color: #4b5563;
              }
              
              .field-value {
                margin-top: 3px;
                padding: 5px;
                background: #f9fafb;
                border: 1px solid #e5e7eb;
                min-height: 24px;
              }
              
              .photo-container {
                text-align: center;
                padding-top: 10px;
              }
              
              .photo-container img {
                width: 35mm;
                height: 45mm;
                object-fit: cover;
                border: 1px solid #e5e7eb;
              }
              
              .photo-label {
                margin-top: 5px;
                font-size: 8pt;
                color: #6b7280;
              }
              
              .declaration {
                margin-top: 30px;
                padding: 15px;
                background: #f8fafc;
                border: 1px solid #e5e7eb;
              }
              
              .signature-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 50px;
                margin-top: 40px;
              }
              
              .signature-box {
                text-align: center;
              }
              
              .signature-line {
                border-bottom: 1px solid #000;
                margin-bottom: 5px;
                height: 40px;
              }
              
              .footer {
                position: absolute;
                bottom: var(--margin);
                left: var(--margin);
                right: var(--margin);
                text-align: center;
                font-size: 8pt;
                color: #6b7280;
                padding-top: 10px;
                border-top: 1px solid #e5e7eb;
              }
              
              .application-id {
                position: absolute;
                top: var(--margin);
                right: var(--margin);
                text-align: right;
                font-size: 10pt;
              }
              
              @media print {
                body {
                  width: 210mm;
                  height: 297mm;
                }
                .page {
                  margin: 0;
                  border: none;
                  width: 210mm;
                  min-height: 297mm;
                }
              }
            </style>
          </head>
          <body>
            <div class="page">
              <div class="application-id">
                <div>Application ID: ${applicationId}</div>
                <div>Date: ${new Date().toLocaleDateString()}</div>
              </div>
              
              <div class="print-header">
                <img src="${logo}" alt="SAMKU SERVICE Logo" />
                <h1>Charging Station Application Form</h1>
                <p>Authorized Charging Station Franchise Application</p>
              </div>

              <div class="section">
                <div class="section-title">Personal Information</div>
                <div class="personal-info-container">
                  <div class="personal-info-fields">
                    <div class="field-group">
                      <div class="field-label">Full Name</div>
                      <div class="field-value">${formData.personalInfo.fullName || '___________________'}</div>
                    </div>
                    <div class="field-group">
                      <div class="field-label">Phone</div>
                      <div class="field-value">${formData.personalInfo.phone || '___________________'}</div>
                    </div>
                    <div class="field-group">
                      <div class="field-label">Email</div>
                      <div class="field-value">${formData.personalInfo.email || '___________________'}</div>
                    </div>
                    <div class="field-group">
                      <div class="field-label">Address</div>
                      <div class="field-value">
                        ${formData.personalInfo.address || '___________________'}<br>
                        ${formData.personalInfo.city || '___________'}, 
                        ${formData.personalInfo.state || '___________'} - 
                        ${formData.personalInfo.pincode || '______'}
                      </div>
                    </div>
                  </div>
                  <div class="photo-container">
                    ${photoPreview ? `
                      <img src="${photoPreview}" alt="Applicant Photo" />
                      <div class="photo-label">Applicant Photo</div>
                    ` : `
                      <div style="width: 35mm; height: 45mm; border: 1px dashed #e5e7eb; display: flex; align-items: center; justify-content: center;">
                        <span style="color: #9ca3af;">Photo</span>
                      </div>
                      <div class="photo-label">Applicant Photo</div>
                    `}
                  </div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">Business Information</div>
                <div class="field-grid">
                  <div class="field-group">
                    <div class="field-label">Company Name</div>
                    <div class="field-value">${formData.businessInfo.companyName || '___________________'}</div>
                  </div>
                  <div class="field-group">
                    <div class="field-label">GST Number</div>
                    <div class="field-value">${formData.businessInfo.gstNumber || '___________________'}</div>
                  </div>
                  <div class="field-group">
                    <div class="field-label">Investment Capacity</div>
                    <div class="field-value">${formData.businessInfo.investmentCapacity || '___________________'}</div>
                  </div>
                  <div class="field-group">
                    <div class="field-label">Property Size</div>
                    <div class="field-value">${formData.businessInfo.propertySize ? `${formData.businessInfo.propertySize} sq. ft.` : '___________________'}</div>
                  </div>
                </div>
                <div class="field-group">
                  <div class="field-label">Business Experience</div>
                  <div class="field-value">${formData.businessInfo.businessExperience || '___________________'}</div>
                </div>
              </div>
            </div>

            <div class="page">
              <div class="section">
                <div class="section-title">Technical Information</div>
                <div class="field-group">
                  <div class="field-label">Electrical Infrastructure</div>
                  <div class="field-value">${formData.technicalInfo.electricalInfrastructure || '___________________'}</div>
                </div>
                <div class="field-group">
                  <div class="field-label">Grid Connectivity</div>
                  <div class="field-value">${formData.technicalInfo.gridConnectivity || '___________________'}</div>
                </div>
                <div class="grid grid-cols-2 gap-6">
                  <div class="field-group">
                    <div class="field-label">Power Availability</div>
                    <div class="field-value">${formData.technicalInfo.powerAvailability ? `${formData.technicalInfo.powerAvailability} kVA` : '___________________'}</div>
                  </div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">Additional Information</div>
                <div class="field-group">
                  <div class="field-label">Reason for Joining</div>
                  <div class="field-value">${formData.additionalInfo.whyJoinUs || '___________________'}</div>
                </div>
                ${formData.additionalInfo.additionalComments ? `
                  <div class="field-group">
                    <div class="field-label">Additional Comments</div>
                    <div class="field-value">${formData.additionalInfo.additionalComments || '___________________'}</div>
                  </div>
                ` : ''}
                ${formData.additionalInfo.references ? `
                  <div class="field-group">
                    <div class="field-label">References</div>
                    <div class="field-value">${formData.additionalInfo.references || '___________________'}</div>
                  </div>
                ` : ''}
              </div>

              <div class="declaration">
                <div class="declaration-text">
                  <strong>Declaration:</strong><br>
                  I hereby declare that all the information provided in this application form is true and correct to the best of my knowledge. 
                  I understand that any false or misleading information may result in the rejection of my application or termination of any subsequent agreement.
                  I authorize SAMKU EVC to verify all the information provided herein.
                </div>

                <div class="signature-grid">
                  <div class="signature-box">
                    <div class="signature-line"></div>
                    <div class="signature-label">Applicant's Signature</div>
                    <div class="signature-label">Date: ${new Date().toLocaleDateString()}</div>
                  </div>
                  <div class="signature-box">
                    <div class="signature-line"></div>
                    <div class="signature-label">For Samku EVC</div>
                    <div class="signature-label">Date: ${new Date().toLocaleDateString()}</div>
                  </div>
                </div>
              </div>

              <div class="footer">
                <strong>SAMKU EVC</strong> - Charging Station Application Form<br>
                Application ID: ${applicationId} | Generated on ${new Date().toLocaleString()}<br>
                This document is confidential and intended solely for SAMKU EVC evaluation purposes.
              </div>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      setTimeout(() => {
        printWindow.print();
      }, 500);
    }
  }, [formRef, formData, photoPreview, logo]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={formRef} className="bg-white shadow-2xl rounded-2xl p-8 relative">
          {/* Close button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header - Enhanced styling */}
          <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-6">
            <div className="flex items-center space-x-6">
              <img src={logo} alt="SAMKU SERVICE Logo" className="h-14 object-contain" />
              <div>
                <h1 className="text-xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
                  Charging Station Franchise Application
                </h1>
                <p className="text-sm text-gray-600 mt-1">Join our growing network of EV charging stations</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Personal Information Section */}
              <section className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <div className="flex items-center space-x-2 text-green-700 mb-6"> 
                  <h2 className="text-xl font-semibold">Personal Information</h2>
                </div>
                
                {/* Update input fields with new classes */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5 col-span-1">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.personalInfo.fullName}
                        onChange={(e) => handleInputChange('personalInfo', 'fullName', e.target.value.replace(/[^a-zA-Z\s]/g, ''))} // Allow only letters and spaces
                        className={inputClasses}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        id="email"
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
                        onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value.replace(/[^0-9]/g, ''))} // Allow only digits
                        className={inputClasses}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  {/* Photo upload section - Enhanced styling */}
                  <div className="flex flex-col items-center justify-start md:mt-10"> {/* Added md:mt-10 for desktop */}
                    <div className="w-36 h-36 relative group">
                      {photoPreview ? (
                        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                          <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <button
                              type="button"
                              onClick={() => {
                                setPhotoPreview(null);
                                handleInputChange('personalInfo', 'photo', null);
                              }}
                              className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors transform hover:scale-110"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <label className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                          <Upload className="w-10 h-10 text-gray-400" />
                          <span className="mt-2 text-sm font-medium text-gray-600">Upload Photo</span>
                          <span className="text-xs text-gray-400 mt-1">Max 2MB</span>
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
                </div>

                
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">Address *</label>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 rounded-md focus:outline-none flex items-center"
                      onClick={() => {/* Add your location getting logic here */}}
                    >
                      <svg
                        className="w-5 h-5 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Locate
                    </button>
                    <textarea
                      required
                      value={formData.personalInfo.address}
                      onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
                      className={`${textareaClasses}  rounded-md flex-1`}
                      rows="2"
                      placeholder="Enter your complete address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.personalInfo.city}
                      onChange={(e) => handleInputChange('personalInfo', 'city', e.target.value.replace(/[^a-zA-Z\s]/g, ''))} // Allow only letters and spaces
                      className={inputClasses}
                      placeholder="Enter your city"
                    />
                  </div>


                  <div>
                    <label className="block text-sm font-medium text-gray-700">State *</label>
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
                    <label className="block text-sm font-medium text-gray-700">Pincode *</label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={formData.personalInfo.pincode}
                      onChange={(e) => handleInputChange('personalInfo', 'pincode', e.target.value.replace(/[^0-9]/g, ''))} // Only allow numbers
                      className={inputClasses}
                      placeholder="Enter your pincode"
                    />
                  </div> 
                </div>
             </section>

              {/* Business Information */}
              <section className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold text-green-700 mb-4">Business Information</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">GST Number</label>
                        <input
                          type="text"
                          maxLength={15}
                          className={inputClasses}
                          value={formData.businessInfo.gstNumber}
                          onChange={(e) => {
                            // Only allow letters and digits, convert to uppercase, and limit to 15 characters
                            const alphanumericOnly = e.target.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 15);
                            handleInputChange('businessInfo', 'gstNumber', alphanumericOnly);
                          }}
                          style={{textTransform: 'uppercase'}}
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
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name </label>
                    <textarea
                      className={textareaClasses}
                      rows="1"
                      value={formData.businessInfo.companyName}
                      onChange={(e) => handleInputChange('businessInfo', 'companyName', e.target.value)}
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Experience *</label>
                    <textarea
                      required
                      className={textareaClasses}
                      rows="1"
                      value={formData.businessInfo.businessExperience}
                      onChange={(e) => handleInputChange('businessInfo', 'businessExperience', e.target.value)}
                      placeholder="Enter your business experience"
                    />
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Technical Information */}
              <section className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold text-green-700 mb-4">Technical Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Electrical Infrastructure Details *</label>
                    <textarea
                      required
                      className={textareaClasses}
                      rows="2"
                      value={formData.technicalInfo.electricalInfrastructure}
                      onChange={(e) => handleInputChange('technicalInfo', 'electricalInfrastructure', e.target.value)}
                      placeholder="Enter your electrical infrastructure details"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Grid Connectivity Status *</label>
                    <div className="flex space-x-4 mt-1">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="gridConnectivity"
                          value="Yes"
                          checked={formData.technicalInfo.gridConnectivity === "Yes"}
                          onChange={(e) => handleInputChange('technicalInfo', 'gridConnectivity', e.target.value)}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="gridConnectivity"
                          value="No"
                          checked={formData.technicalInfo.gridConnectivity === "No"}
                          onChange={(e) => handleInputChange('technicalInfo', 'gridConnectivity', e.target.value)}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {formData.technicalInfo.gridConnectivity === "Yes" && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Power Availability (kVA) *</label>
                        <input
                          type="number"
                          required
                          className={inputClasses}
                          value={formData.technicalInfo.powerAvailability}
                          onChange={(e) => handleInputChange('technicalInfo', 'powerAvailability', e.target.value)}
                          onInput={(e) => {
                          // Remove any non-numeric characters and prevent letter input
                          e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                          placeholder="Enter your power availability"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Property Size (sq. ft.) *</label>
                      <input
                        type="text" 
                        required
                        maxLength={6}
                        className={inputClasses}
                        value={formData.businessInfo.propertySize}
                        onChange={(e) => handleInputChange('businessInfo', 'propertySize', e.target.value)}
                        onInput={(e) => {
                          // Remove any non-numeric characters and prevent letter input
                          e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        placeholder="Enter your property size"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Additional Information */}
              <section className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold text-green-700 mb-4">Additional Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Why do you want to join SAMKU EVC? </label>
                    <textarea
                      className={textareaClasses}
                      rows="2"
                      value={formData.additionalInfo.whyJoinUs}
                      onChange={(e) => handleInputChange('additionalInfo', 'whyJoinUs', e.target.value)}
                      placeholder="Enter your reason for joining SAMKU EVC"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Comments</label>
                    <textarea
                      className={textareaClasses}
                      rows="2"
                      value={formData.additionalInfo.additionalComments}
                      onChange={(e) => handleInputChange('additionalInfo', 'additionalComments', e.target.value)}
                      placeholder="Enter your additional comments"
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

            {/* Form Actions - Enhanced styling */}
            <div className="col-span-2 flex justify-end space-x-4 pt-8 border-t border-gray-100">
              <motion.button
                type="button"
                onClick={handlePrint}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Print Form</span>
              </motion.button>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-colors flex items-center justify-center space-x-2 shadow-sm font-medium"
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

export default ChargingStationApplication;