import React, { useState , useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import cardsData from "../data/cardsData";
// import ServicesSidebar from "../data/sidebar.jsx";
import ServicesHeader from "../components/serviceHeader.jsx";
import ServiceSchedulingModal from "../components/ServiceSchedulingModal.jsx";
import { useCart } from '../CartContext.jsx';

const EVChargerCard = ({ id, title, subtitle, description, price, services, image, showPrimeTag, rating  = true , scheduleImages , customQuestions }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { itemCart, setItemCart , savedServices, saveService, removeFromSaved  } = useCart();

  const serviceData = {
    id : id,
    title: title,
    price: price,
    services: services,
    scheduleImages: scheduleImages || [image] ,// Use scheduleImages if available, otherwise use the main image
    customQuestions : customQuestions,
  };

  
  // Check if this service is already saved
  useEffect(() => {
    const isAlreadySaved = savedServices.some(service => service.id === id);
    setIsSaved(isAlreadySaved);
  }, [savedServices, id]);

  const handleServiceToggle = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };
  const handleScheduleClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const toggleSaveToWatchlist = () => {
    const newSavedState = !isSaved;
    setIsSaved(newSavedState);
    
    if (newSavedState) {
      setItemCart(prevCount => prevCount + 1); // Increment when saving
    } else {
      setItemCart(prevCount => prevCount - 1); // Decrement when unsaving
    }
  };

  return (
    <div className="bg-white border-2 border-gray-300 border-opacity-20 overflow-hidden rounded-xl md:px-6 h-full flex flex-col">
        <div className="h-0 md:h-[30px] md:mt-5 mb-0 md:mb-2"> {/* Container height 0 on mobile */}
            {showPrimeTag && (
                <span className="hidden md:inline-block bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md w-fit">
                    Prime Service
                </span>
            )}
        </div>

      <div className="relative h-28 md:h-48 bg-gray-200 rounded-lg">
        <img
          src={image}
          alt="EV Charger"
          className="absolute inset-0 z-20 w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-transparent bg-opacity-50 flex z-40 flex-col justify-center px-2 md:px-5">
          <h2 className="text-sm md:text-xl font-semibold w-[100px] md:w-[12vw] py-1 md:py-2 max-w-xs text-gray-800 break-words">
            {title}
          </h2>
          {/*<p className="text-lg md:text-4xl font-bold text-gray-900 mt-1">₹ {price}</p>*/}
        </div>
      </div>

      <div className="hidden md:block p-1">
          <div className="flex justify-between items-center">
            <h3 className="text-lg  font-semibold mb-2 w-full sm:w-1/2 ">{subtitle}</h3>
            <div className="flex items-center gap-4">
              {/* Rating display */}
              <div className="flex items-center mb-2">
              <span className="ml-1 text-gray-700 font-medium">{rating}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                
              </div>
              {/* Wishlist button */}
              <button className="p-0 mb-2 hover:cursor-pointer" aria-label="Save to wishlist"   onClick={(e) => {
                    e.preventDefault(); // Prevent any default behavior
                    toggleSaveToWatchlist();
                  }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill={isSaved ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            {description}
          </p>

        <div className="mb-3 pl-4">
          <ul className="list-disc list-inside text-gray-700">
            {services.map((service) => (
              <li key={service} className="text-semibold">{service}</li>
            ))}
          </ul>
        </div>


        <div className="flex justify-center mb-4 items-center mt-6">
          <button className="px-6 py-2 border border-black rounded hover:bg-gray-100 hover:cursor-pointer transition" 
          aria-label="Schedule service"
          onClick={handleScheduleClick}>
            Schedule Service
          </button>
        </div>
      </div>

      <div className="md:hidden p-2 pr-3">
          {/* Rating and Subtitle Row */}
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold">{subtitle}</h3>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <span className="ml-1 text-xs text-gray-700 font-medium">{rating}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 mt-3">
            <button 
              className="flex-none px-4 py-1 text-xs border border-black rounded hover:bg-gray-100 hover:cursor-pointer transition"
              aria-label="Schedule service"
              onClick={handleScheduleClick}
            >
              Schedule
            </button>
            <button 
              className="flex-none px-2 py-1 text-xs border border-black rounded hover:bg-gray-100 transition flex items-center gap-1 hover:cursor-pointer"
              aria-label="Add to watchlist"
              onClick={(e) => {
                e.preventDefault(); // Prevent any default behavior
                toggleSaveToWatchlist();
              }}
  >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill={isSaved ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
              <span>Save</span>
            </button>
          </div>
        </div>
        {/* Add the modal here */}
      <ServiceSchedulingModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onNext={() => {}} // You can expand this for step navigation if needed
        selectedService={serviceData} // Pass the service data to the modal
      />
    </div>
  );
};


const EVChargerCardsList = () => {
  const [showPrimeOnly, setShowPrimeOnly] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    rating: null,
    availability: null,
    priceRange: null,
    categories: [],
    serviceTypes: []
  });
  

   // Process card data to ensure it has all required fields for the modal
   const processedCardsData = cardsData.map(card => {
    // Ensure scheduleImages exists, use multiple images if available or create array from single image
    const scheduleImages = card.scheduleImages || 
                          (card.images ? card.images : [card.image]);
    
    return {
      ...card,
      scheduleImages: scheduleImages
    };
  });

  const filteredData = processedCardsData.filter(card => {
    if (showPrimeOnly && !card.isPrime) return false;
    
    // Rating filter
    if (filters.rating && card.rating < filters.rating) return false;
    
    // Price Range filter
    if (filters.priceRange) {
      const cardPrice = parseFloat(card.price.replace(/,/g, ''));
      if (cardPrice < filters.priceRange[0] || cardPrice > filters.priceRange[1]) {
        return false;
      }
    }
    
    // Categories filter
    if (filters.categories?.length > 0) {
      if (!filters.categories.includes(card.category)) {
        return false;
      }
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100" id="service-sec">
      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-gray-600"
          >
            {/* <Menu size={24} /> */}
          </button>
          <h1 className="text-lg font-semibold">EV Services</h1>
          <div className="flex gap-2">
            {/* Mobile Rating Dropdown */}
            <button
              className="p-2 rounded-md bg-gray-100 text-gray-700"
              onClick={() => setFilters(prev => ({ ...prev, showRatingFilter: !prev.showRatingFilter }))}
            >
              ⭐
            </button>
            {/* Mobile Availability Toggle */}
            <button
              className={`p-2 rounded-md ${
                filters.availability === 'now' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => setFilters(prev => ({
                ...prev,
                availability: prev.availability === 'now' ? null : 'now'
              }))}
            >
              📅
            </button>
          </div>
        </div>
        
        {/* Mobile Filters Panel */}
        {filters.showRatingFilter && (
          <div className="px-4 py-2 bg-white border-t">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {[5, 4, 3].map((rating) => (
                <button
                  key={rating}
                  className={`px-3 py-1.5 rounded-md text-sm whitespace-nowrap ${
                    filters.rating === rating
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => setFilters(prev => ({
                    ...prev,
                    rating: prev.rating === rating ? null : rating
                  }))}
                >
                  {rating}+ Stars
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Services Header (Desktop) */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 pt-3">
        <ServicesHeader filters={filters} setFilters={setFilters} />
      </div>

      <div className="max-w-7xl mx-auto px-1 py-2">
        <div className="flex gap-6">
          {/* Desktop Sidebar */}
          {/* <div className="hidden md:block">
            <ServicesSidebar
              filters={filters}
              setFilters={setFilters}
              isMobile={false}
            />
          </div> */}

          {/* Mobile Sidebar */}
          {/* {isSidebarOpen && (
            <>
              <div 
                  className="fixed inset-0 backdrop-blur-sm bg-transperent bg-opacity-20 z-40"
                  onClick={() => setIsSidebarOpen(false)}
                />

              <ServicesSidebar
                filters={filters}
                setFilters={setFilters}
                isMobile={true}
                onClose={() => setIsSidebarOpen(false)}
              />
            </>
          )} */}

          {/* Main Content */}
          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-2 py-2 gap-4 p-4">
              {filteredData.map((charger, index) => (
                <EVChargerCard 
                  key={index} 
                  {...charger} 
                  showPrimeTag={charger.isPrime}  // Use the isPrime value from the data
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EVChargerCardsList;