import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Battery, Zap, Check, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { chargers } from '../data/chargers';

const ProductDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedPower, setSelectedPower] = useState(null);
  const [selectedRatedCurrent, setSelectedRatedCurrent] = useState(null);
  const [availableRatedCurrents, setAvailableRatedCurrents] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();
  const [displayImages, setDisplayImages] = useState([]);
  const [currentPrice, setCurrentPrice] = useState('');

  const charger = chargers.find((c) => c.id === id);

  // Define the mapping between power options and their available rated currents
  const powerToRatedCurrentMap = {
    '24V': ['3A', '5A'],
    '36V': ['5A', '8A', '10A'],
    '48V': ['8A', '10A'],
    '60V': ['6A', '8A', '10A'],
    '72V': ['6A', '8A', '10A', '12A'],
    '3.3kW': ['16A'],
    '7.4kW': ['32A'],
    '11kW': ['32A'],
    '22kW': ['32A'],
    '60kW': ['80A'],
    '120kW': ['150A'],
    '180kW': ['300A'],
  };
 
  const updateImagesBasedOnPower = (power) => {
    if (!charger) return;
    
    // If we have powerImages mapping in our data
    if (charger.powerImages && charger.powerImages[power]) {
      const powerImageData = charger.powerImages[power];
      // Combine the main image with additional images
      setDisplayImages([
        powerImageData.main,
        ...(powerImageData.additional || [])
      ]);
    } else {
      // Fallback to the current behavior if no power-specific images
      setDisplayImages([...charger.image]);
    }
  };

  const updatePriceBasedOnSelection = (power, ratedCurrent) => {
    if (!charger) return;
    
    // Check if we have price data for this specific combination
    if (charger.combinedPrices && charger.combinedPrices[power] && charger.combinedPrices[power][ratedCurrent]) {
      setCurrentPrice(charger.combinedPrices[power][ratedCurrent]);
    } 
    // If no combined price, fallback to power-based price
    else if (charger.powerPrices && charger.powerPrices[power]) {
      setCurrentPrice(charger.powerPrices[power]);
    } 
    // Default fallback
    else {
      setCurrentPrice(charger.price);
    }
  };

  const handlePowerChange = (e) => {
    const newPower = e.target.value;
    setSelectedPower(newPower);
    
    // Update available rated currents based on selected power
    const availableOptions = powerToRatedCurrentMap[newPower] || charger.ratedCurrent;
    setAvailableRatedCurrents(availableOptions);
    
    // Select the first available rated current by default
    const newRatedCurrent = availableOptions[0];
    setSelectedRatedCurrent(newRatedCurrent);
    
    // Update images and price
    updateImagesBasedOnPower(newPower);
    updatePriceBasedOnSelection(newPower, newRatedCurrent);
  };

  const handleRatedCurrentChange = (e) => {
    const newRatedCurrent = e.target.value;
    setSelectedRatedCurrent(newRatedCurrent);
    
    // Update price based on the new rated current
    updatePriceBasedOnSelection(selectedPower, newRatedCurrent);
  };

  const handleEnquireClick = () => {
    navigate('/enquiry', { 
      state: { 
        product: {
          name: charger.name,
          category: charger.category,
          power: selectedPower,
          ratedCurrent: selectedRatedCurrent,
          price: currentPrice,
        },
      }
    });
  };

  const handleContactSalesClick = () => {
    navigate('/contact');
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 300);

    if (charger) {
      const related = chargers
        .filter(c => c.id !== id && c.category === charger.category)
        .slice(0, 3);
      setRelatedProducts(related);
      
      // Initialize selected values
      const initialPower = charger.powerOptions[0];
      setSelectedPower(initialPower);
      
      // Set available rated currents based on the initial power
      const initialAvailableRatedCurrents = powerToRatedCurrentMap[initialPower] || charger.ratedCurrent;
      setAvailableRatedCurrents(initialAvailableRatedCurrents);
      
      // Set the initial rated current to the first available option
      const initialRatedCurrent = initialAvailableRatedCurrents[0];
      setSelectedRatedCurrent(initialRatedCurrent);
      
      // Initialize display images based on the initial power selection
      updateImagesBasedOnPower(initialPower);

      // Initialize price based on initial selections
      updatePriceBasedOnSelection(initialPower, initialRatedCurrent);
      
      setActiveImageIndex(0); // Ensure the first image is shown on load
    }

    return () => clearTimeout(timer);
  }, [id]);

  const handlePrevious = () => {
    navigate(`/product/${getPreviousProductId()}`);
  };

  const handleNext = () => {
    navigate(`/product/${getNextProductId()}`);
  };

  const getPreviousProductId = () => {
    const currentIndex = chargers.findIndex(c => c.id === id);
    return currentIndex > 0 ? chargers[currentIndex - 1].id : chargers[chargers.length - 1].id;
  };

  const getNextProductId = () => {
    const currentIndex = chargers.findIndex(c => c.id === id);
    return currentIndex < chargers.length - 1 ? chargers[currentIndex + 1].id : chargers[0].id;
  };

  const getColorStyle = (color) => {
    const colorMap = {
      green: '#22c55e',
      orange: '#f97316',
      pink: '#ec4899',
      blue: '#3b82f6',
      yellow: '#f59e0b',
      red: '#ef4444',
      black: '#000000',
      white: '#ffffff',
      gray: '#9ca3af',
    };
    return { backgroundColor: colorMap[color.toLowerCase()] || '#gray-500' };
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!charger) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2 font-medium">
            <ArrowLeft size={20} /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-24 transition-opacity duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <Link to="/products" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
            <ArrowLeft size={18} /> Back to Products
          </Link>
          <div className="flex items-center gap-2">
            <button onClick={handlePrevious} className="p-2 border rounded-full hover:bg-gray-100 transition-colors" aria-label="Previous product">
              <ChevronLeft size={18} />
            </button>
            <button onClick={handleNext} className="p-2 border rounded-full hover:bg-gray-100 transition-colors" aria-label="Next product">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-gray-100">
              <div className="relative">
                <img
                  src={displayImages[activeImageIndex]}
                  alt={`${charger.name} - Image ${activeImageIndex + 1}`}
                  className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-contain p-4"
                />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {displayImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${index === activeImageIndex ? 'bg-blue-600 scale-110' : 'bg-gray-300'}`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors" aria-label="Add to favorites">
                    <Heart size={20} className="text-gray-600" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors" aria-label="Share product">
                    <Share2 size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="flex justify-center gap-2 p-4 border-t">
                {displayImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`border-2 rounded-md overflow-hidden transition-all ${index === activeImageIndex ? 'border-blue-600' : 'border-transparent'}`}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-16 h-16 object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col">
              <div className="flex flex-col gap-2">
                <span className="text-sm text-blue-600 font-medium">{charger.category}</span>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{charger.name}</h1>
                <p className="text-lg text-gray-600">{charger.description}</p>
              </div>

              <div className="space-y-6 flex-grow mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Zap className="text-blue-600 flex-shrink-0" size={22} />
                    <div className="w-full">
                      <h3 className="font-semibold text-sm text-gray-500">Power Output</h3>
                      {charger.powerOptions.length > 1 ? (
                        <select
                          value={selectedPower}
                          onChange={handlePowerChange}
                          className="mt-1 block w-full rounded-lg border border-gray-200 bg-white py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-200 appearance-none"
                        >
                          {charger.powerOptions.map((power, index) => (
                            <option key={index} value={power}>{power}</option>
                          ))}
                        </select>
                      ) : (
                        <p className="mt-1 font-medium text-gray-700">{charger.powerOptions[0]}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Battery className="text-blue-600 flex-shrink-0" size={22} />
                    <div className="w-full">
                      <h3 className="font-semibold text-sm text-gray-500">Rated Current</h3>
                      {availableRatedCurrents.length > 1 ? (
                        <select
                          value={selectedRatedCurrent}
                          onChange={handleRatedCurrentChange}
                          className="mt-1 block w-full rounded-lg border border-gray-200 bg-white py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-200 appearance-none"
                        >
                          {availableRatedCurrents.map((current, index) => (
                            <option key={index} value={current}>{current}</option>
                          ))}
                        </select>
                      ) : (
                        <p className="mt-1 font-medium text-gray-700">{availableRatedCurrents[0]}</p>
                      )}
                    </div>
                  </div>

                  {charger.colours && charger.colours.length > 0 && (
                    <div className="flex items-start gap-3">
                      <Battery className="text-blue-600 flex-shrink-0" size={22} />
                      <div className="w-full">
                        <h3 className="font-semibold text-sm text-gray-500">Colours</h3>
                        <div className="mt-1 flex gap-2">
                          {charger.colours.map((colour, index) => (
                            <span
                              key={index}
                              className="w-4 h-4 rounded-full"
                              style={getColorStyle(colour)}
                              title={colour}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">Key Features</h3>
                  <ul className="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                    {charger.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors"
                  >
                    {showDetails ? 'Hide Details' : 'View More Details'}
                    <svg
                      className={`w-4 h-4 transform transition-transform ${showDetails ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {showDetails && (
                    <div className="mt-2 transition-all duration-300">
                      <p className="text-sm text-gray-600 leading-relaxed">{charger.detailedDescription}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-auto pt-6 border-t">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Price</span>
                    <span className="text-3xl font-bold text-blue-600">{currentPrice}</span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={handleContactSalesClick}
                      className="flex-1 sm:flex-none bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm"
                    >
                      Contact Sales
                    </button>
                    <button
                      onClick={handleEnquireClick}
                      className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-sm"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={product.image[0] || 'https://via.placeholder.com/800x500?text=No+Image'}
                      alt={`${product.name} - Cover`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-1 text-gray-800">{product.name}</h3>
                    <p className="text-blue-600 font-bold">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%234B5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-position: right 0.75rem center;
          background-repeat: no-repeat;
          background-size: 1em;
          padding-right: 2.5rem;
        }
      `}</style>
    </div>
  );
};

export default ProductDetails;