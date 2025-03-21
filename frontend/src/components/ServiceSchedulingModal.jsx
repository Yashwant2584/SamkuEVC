import React, {useRef, useState , useEffect} from "react";
import { LocateFixed  ,  X} from "lucide-react";
import cardsData from '../data/cardsData';

  const ServiceSchedulingModal = ({ isOpen, onClose, onNext, selectedService }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date(2025, 2)); // February 2025

   // Refs and state for swipe functionality
   const carouselRef = useRef(null);
   const [isDragging, setIsDragging] = useState(false);
   const [startX, setStartX] = useState(0);
   const [currentX, setCurrentX] = useState(0);


  const timeSlots = [
    "10:00am", "11:00am", "12:00pm", "1:00pm",
    "2:00pm", "3:00pm", "4:00pm", "5:00pm"
  ];

  

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };


  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

   // Handle navigation
   const nextImage = () => {
    if (selectedService && selectedService.scheduleImages) {
      setCurrentImage((prev) => (prev === selectedService.scheduleImages.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = () => {
    if (selectedService && selectedService.scheduleImages) {
      setCurrentImage((prev) => (prev === 0 ? selectedService.scheduleImages.length - 1 : prev - 1));
    }
  };



  // Touch event handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };


  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const threshold = 50; // Minimum swipe distance to trigger image change
    const diff = startX - currentX;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swiped left, go to next image
        nextImage();
      } else {
        // Swiped right, go to previous image
        prevImage();
      }
    }
    
    setIsDragging(false);
  };
  // Mouse drag functionality for desktop
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const threshold = 50;
    const diff = startX - currentX;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
    
    setIsDragging(false);
  };


  // Handle mouse leave to prevent stuck state
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Add document-level event listeners for mouse up/move
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };
    
    const handleGlobalMouseMove = (e) => {
      if (isDragging) {
        e.preventDefault();
      }
    };
    
    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('mousemove', handleGlobalMouseMove);
    
    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging]);


  // Calendar helper functions
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const formatMonth = (date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  const isDateSelectable = (day) => {
    if (!day) return false;
    
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Disable past dates and Sundays
    return date >= today && date.getDay() !== 0;
  };

  const handleDateSelect = (day) => {
    if (isDateSelectable(day)) {
      setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
      setSelectedTime(null);
    }
  };

  const isTimeSlotSelectable = (timeSlot) => {
    if (!selectedDate) return false;
    
    const now = new Date();
    const selectedDateCopy = new Date(selectedDate);
    
    // If selected date is in the future, all time slots are available
    if (selectedDateCopy.getDate() !== now.getDate() || 
        selectedDateCopy.getMonth() !== now.getMonth() || 
        selectedDateCopy.getFullYear() !== now.getFullYear()) {
      return true;
    }


    // For today, check if the time slot is in the past
    const timeComponents = timeSlot.match(/(\d+):(\d+)(am|pm)/i);
    if (!timeComponents) return false;
    
    let hour = parseInt(timeComponents[1]);
    const isPM = timeComponents[3].toLowerCase() === 'pm';
    
    // Convert hour to 24-hour format
    if (isPM && hour < 12) hour += 12;
    if (!isPM && hour === 12) hour = 0;
    
    // Create a date object for the time slot
    const timeSlotDate = new Date(selectedDate);
    timeSlotDate.setHours(hour, 0, 0, 0);
    
    // Add a buffer of 30 minutes to the current time (to allow for preparation)
    const bufferedNow = new Date();
    bufferedNow.setMinutes(bufferedNow.getMinutes() + 30);
    
    return timeSlotDate > bufferedNow;
  };

  // Parse time slot string to date object (for comparison)
  const parseTimeSlot = (timeSlot) => {
    const [time, period] = timeSlot.split(/(?=[ap]m)/i);
    const [hours, minutes] = time.split(':').map(num => parseInt(num));
    let hourValue = hours;
    
    // Convert to 24-hour format
    if (period.toLowerCase() === 'pm' && hours < 12) {
      hourValue += 12;
    } else if (period.toLowerCase() === 'am' && hours === 12) {
      hourValue = 0;
    }
    
    return hourValue;
  };


   // Add new state for contact information
   const [contactInfo, setContactInfo] = useState({
    fullName: "",
    phoneNumber: "",
    emailId: "",
    location: ""
  });
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle current location
  const getCurrentLocation = () => {
    setIsLocationLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();
            setContactInfo(prev => ({
              ...prev,
              location: data.display_name
            }));
          } catch (error) {
            console.error("Error fetching location:", error);
          }
          setIsLocationLoading(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLocationLoading(false);
        }
      );
    }
  };

  // Handle location search
  const handleLocationSearch = async (value) => {
    setContactInfo(prev => ({ ...prev, location: value }));
    if (value.length > 2) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${value}&format=json&limit=5`
        );
        const data = await response.json();
        setLocationSuggestions(data.map(item => item.display_name));
        setShowSuggestions(true);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setLocationSuggestions([]);
      setShowSuggestions(false);
    }
  };


const ImageCarousel = () => (
    <div className="relative mb-4">
      <div
        ref={carouselRef}
        className="w-full h-32 md:h-48 lg:h-56 overflow-hidden rounded-lg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {selectedService && selectedService.scheduleImages && (
          <img
            src={selectedService.scheduleImages[currentImage]}
            alt={`${selectedService.title} image ${currentImage + 1}`}
            className="w-full h-full object-cover transition-all duration-300"
            draggable="false"
          />
        )}
      </div>
      <div className="flex justify-center gap-2 mt-2">
        {selectedService && selectedService.scheduleImages && selectedService.scheduleImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full ${
              currentImage === index ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
     
      {/* Add arrow navigation buttons */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md text-gray-800 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition-all duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={prevImage}
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md text-gray-800 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition-all duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={nextImage}
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );

  if (!isOpen || !selectedService) return null;

  if (currentStep === 1) {
    return (
      <div className="fixed inset-0 bg-white-500 bg-opacity-30 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg 
        w-[90%] md:w-[50%] lg:w-[45%] 
        flex flex-col
        p-2 pt-1
        animate-slide-up md:animate-none"
      >
        <div className="flex-none p-1">
        <div className="flex justify-between items-center ml-2 mb-2">
          <h2 className="text-lg font-semibold">{selectedService.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 border-2 border-gray-300 p-1 rounded-sm">
          <X size={18} />

          </button>
        </div>
              
        <ImageCarousel />

          <div className="flex-1 md:max-h-[270px] overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <p className="text-gray-600 mb-4">
              Some essential services are pre-selected. You can modify your selection and the price will update dynamically.
            </p>
            
            {/* Standard services selection */}
            {/* <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Services:
              </label>
              <div className="space-y-2">
                {selectedService.services && selectedService.services.map((service, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      defaultChecked={index === 0} // First service pre-selected
                    />
                    <span className="ml-2 text-sm text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div> */}

            {/* Dynamic custom questions based on selected service */}
            {selectedService.customQuestions && selectedService.customQuestions.map((question, qIndex) => (
              
              <div className="mb-4" key={qIndex}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {question.label}
                </label>
               

                <div className="space-y-2">
                  {question.options.map((option, oIndex) => (
                    <label key={oIndex} className="flex items-center">
                      <input
                        type={question.type}
                        name={question.name || `question-${qIndex}`}
                        className={`h-4 w-4 text-indigo-600 border-gray-300 ${question.type === 'checkbox' ? 'rounded' : ''}`}
                        defaultChecked={option.defaultChecked}
                        disabled={option.disabled}
                        value={option.value}
                      />
                      <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}


            {/* Default vehicle type question - shown if no custom vehicle type question */}
            {/* {!selectedService.customQuestions?.some(q => q.name === 'vehicleType') && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Your Vehicle Type:
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="vehicleType"
                      className="h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">2-Wheeler</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="vehicleType"
                      className="h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">4-Wheeler (Coming-Soon)</span>
                  </label>
                </div>
              </div>
            )} */}

            {/* Default service type question - shown if no custom service type question */}
            {!selectedService.customQuestions?.some(q => q.name === 'serviceType') && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Service Type:
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="serviceType"
                      className="h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Home Service (Additional ₹49 charges)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="serviceType"
                      className="h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Service Center Visit</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        
        {/* Footer */}
        <div className="flex-shrink-0 pt-4 border-t border-gray-400 border-opacity-50 pb-2">
            <div className="flex justify-between items-center">
              <p className="px-4 py-2 text-lg font-bold">₹ {selectedService.price}*</p>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 hover:cursor-pointer"
              >
                Next →
              </button>
            </div>
            <p className="text-gray-500 text-xs ml-2 mt-2">
            Note: This is a base price. Additional services may incur extra charges.
            </p>
        </div>

        </div>
      </div>
    </div>
    );
  }

  if (currentStep === 2) {
    return (
      <div className="fixed inset-0 bg-white-500 bg-opacity-30 backdrop-blur-md flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg 
          w-[90%] md:w-[50%] lg:w-[45%] 
          h-[90vh] 
          flex flex-col
          p-2 
          pl-3 pr-3
          animate-slide-up md:animate-none"
        >
          <div className="flex justify-between items-center ml-2 mb-2">
            <h2 className="text-lg font-semibold">{selectedService.title}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 border-2 border-gray-300 p-1 rounded-sm">
                <X size={18} />
          </button>
          </div>

          <ImageCarousel />

          <div className="flex-1 h-[calc(100vh-100px)] md:max-h-[270px] overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {/* Vehicle Information */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Brand:
              </label>
              <input
                type="text"
                placeholder="eg. Ather"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Model:
              </label>
              <input
                type="text"
                placeholder="eg. 450S"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* Schedule Section */}
          <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Schedule Date & Time</h3>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Calendar */}
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <button onClick={handlePrevMonth} className="p-2 hover:bg-gray-100 rounded">
                      ←
                    </button>
                    <span className="font-medium">{formatMonth(currentDate)}</span>
                    <button onClick={handleNextMonth} className="p-2 hover:bg-gray-100 rounded">
                      →
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    <div className="font-medium">Su</div>
                    <div className="font-medium">Mo</div>
                    <div className="font-medium">Tu</div>
                    <div className="font-medium">We</div>
                    <div className="font-medium">Th</div>
                    <div className="font-medium">Fr</div>
                    <div className="font-medium">Sa</div>

                    {generateCalendar().map((day, index) => (
                      <button
                        key={index}
                        className={`p-2 rounded w-8 h-8 ${
                          !day
                            ? "invisible"
                            : !isDateSelectable(day)
                            ? "text-gray-300 cursor-not-allowed"
                            : selectedDate?.getDate() === day &&
                              selectedDate?.getMonth() === currentDate.getMonth()
                            ? "bg-black text-white"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => handleDateSelect(day)}
                        disabled={!isDateSelectable(day)}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                 {/* Time Slots */}
                 <div className="flex-1">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-2 mt-4">
                    {timeSlots.map((time) => {
                      const isSelectable = isTimeSlotSelectable(time);
                      return (
                        <button
                          key={time}
                          className={`px-4 py-2 border rounded text-sm ${
                            !isSelectable
                              ? "text-gray-300 bg-gray-50 cursor-not-allowed"
                              : selectedTime === time
                              ? "bg-black text-white"
                              : "hover:bg-gray-100"
                          }`}
                          onClick={() => isSelectable && setSelectedTime(time)}
                          disabled={!isSelectable || !selectedDate}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                  {selectedDate && (
                    <p className="text-xs text-gray-500 mt-2 italic">
                      {new Date().toDateString() === selectedDate.toDateString() 
                        ? "Time slots earlier than 30 minutes from now are unavailable" 
                        : "All time slots available for this date"}
                    </p>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="flex-shrink-0 pt-4 border-t border-gray-400 border-opacity-50 pb-2">
            
            <div className="flex justify-between items-center">
                <p className="px-4 py-2 text-lg font-bold">₹ {selectedService.price}*</p>
                <div className="flex items-center gap-4">
                    <button
                      onClick={handlePrevious}
                      className="px-3 py-2  bg-black text-white rounded hover:bg-gray-700 hover:cursor-pointer"
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-3 py-2 bg-black text-white rounded-md hover:bg-gray-700 hover:cursor-pointer"
                      disabled={!selectedDate || !selectedTime}
                    >
                      Next →
                    </button>
                </div>    
            </div>
                <p className="text-gray-500 ml-2 text-xs mt-2">
                Note: This is a base price. Additional services may incur extra charges.
                </p>
          </div>
        </div>
      </div>
    );
  }
  if (currentStep === 3) {
    return (
      <div className="fixed inset-0 bg-white-500 bg-opacity-30 backdrop-blur-md flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg 
          w-[90%] md:w-[50%] lg:w-[45%] 
          h-[90vh] 
          flex flex-col
          p-2 
          pl-3 pr-3
          animate-slide-up md:animate-none"
        >
          <div className="flex justify-between items-center ml-2 mb-2">
            <h2 className="text-lg font-semibold">{selectedService.title}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 border-2 border-gray-300 p-1 rounded-sm">
             <X size={18} />
          </button>
          </div>

          <ImageCarousel />

          {/* Contact Information */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden mb-2">
            <h3 className="text-lg font-medium mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name:
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={contactInfo.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={contactInfo.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Id:
                </label>
                <input
                  type="email"
                  name="emailId"
                  placeholder="Enter your email"
                  value={contactInfo.emailId}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location:
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={getCurrentLocation}
                    className="flex items-center px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                    disabled={isLocationLoading}
                  >
                    <LocateFixed  className="w-5 h-5 mr-1" />
                    Location
                  </button>
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter Your location"
                    value={contactInfo.location}
                    onChange={(e) => handleLocationSearch(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                {/* Location Suggestions */}
                {showSuggestions && locationSuggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {locationSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
                        onClick={() => {
                          setContactInfo(prev => ({ ...prev, location: suggestion }));
                          setShowSuggestions(false);
                        }}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex-shrink-0 pt-4 border-t border-gray-400 border-opacity-50 pb-2">
            
            <div className="flex justify-between items-center">
              
                <p className="px-4 py-2 text-lg font-bold">₹ {selectedService.price}*</p>
                <div className="flex items-center gap-4">
                <button
                  onClick={handlePrevious}
                  className="px-3 py-2 bg-black text-white rounded hover:bg-gray-700 hover:cursor-pointer"
                >
                  ← Previous
                </button>
              
                <button
                  onClick={onClose}
                  className={`px-3 py-2 bg-black text-white rounded-md hover:cursor-pointer
                  `}
  
                >
                  Pay Now
                </button>
              </div>
            </div>
            <p className="text-gray-500 text-xs ml-2 mt-2">
              Note: This is a base price. Additional services may incur extra charges.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ServiceSchedulingModal;