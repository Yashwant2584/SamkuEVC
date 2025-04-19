import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Battery, Zap, Check, Heart, Share2, ChevronLeft, ChevronRight, Copy, X } from 'lucide-react';
import { chargers } from '../data/chargers';

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
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
  const [categoryPath, setCategoryPath] = useState('/products');
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

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
    '11kW': ['16A'],
    '22kW': ['32A'],
    '30kW': ['80A'],
    '60kW': ['80A', '150A'],
    '120kW': ['200A'],
    '180kW': ['300A'],
    '240kW': ['250A']
  };
 
  // Get category slug from URL path or product category
  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    if (pathSegments.length >= 3 && pathSegments[1] === 'products') {
      setCategoryPath(`/products/${pathSegments[2]}`);
    } else if (charger && charger.category) {
      const categorySlug = charger.category.toLowerCase().replace(/\s+/g, '-');
      setCategoryPath(`/products/${categorySlug}`);
    }
    
    // Set share URL to current page URL
    setShareUrl(window.location.href);
  }, [location.pathname, charger]);

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

  // Share functionality
  const handleShareClick = () => {
    if (navigator.share) {
      // Use Web Share API if available
      navigator.share({
        title: `${charger.name} - ${charger.category}`,
        text: `Check out the ${charger.name} - ${selectedPower} ${selectedRatedCurrent}`,
        url: window.location.href
      })
      .catch(error => {
        console.log('Error sharing:', error);
        // Fallback to modal if share fails
        setShowShareModal(true);
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      setShowShareModal(true);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const shareToSocialMedia = (platform) => {
    const url = encodeURIComponent(shareUrl);
    const text = encodeURIComponent(`Check out the ${charger.name} - ${selectedPower} ${selectedRatedCurrent}`);
    
    let shareUrl;
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
    setShowShareModal(false);
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
    if (!charger || !charger.category) return;
    
    const categoryProducts = chargers.filter(c => c.category === charger.category);
    const currentIndex = categoryProducts.findIndex(c => c.id === id);
    if (currentIndex === -1) return;
    
    const prevProduct = currentIndex > 0 
      ? categoryProducts[currentIndex - 1] 
      : categoryProducts[categoryProducts.length - 1];
    
    navigate(`${categoryPath}/${prevProduct.id}`);
  };

  const handleNext = () => {
    if (!charger || !charger.category) return;
    
    const categoryProducts = chargers.filter(c => c.category === charger.category);
    const currentIndex = categoryProducts.findIndex(c => c.id === id);
    if (currentIndex === -1) return;
    
    const nextProduct = currentIndex < categoryProducts.length - 1 
      ? categoryProducts[currentIndex + 1] 
      : categoryProducts[0];
    
    navigate(`${categoryPath}/${nextProduct.id}`);
  };

  const formatCategoryName = (pathName) => {
    if (!pathName || !pathName.includes('/')) return 'Products';
    
    const categorySlug = pathName.split('/').pop();
    return categorySlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
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
          <Link to={categoryPath} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
            <ArrowLeft size={18} /> Back to {formatCategoryName(categoryPath)}
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
                  <button 
                    onClick={handleShareClick}
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors" 
                    aria-label="Share product"
                  >
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
                  to={`${categoryPath}/${product.id}`}
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

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowShareModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-xl font-bold mb-4">Share this Product</h3>
            
            <div className="mb-6">
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg mb-2">
                <span className="text-sm text-gray-600 truncate pr-2">{shareUrl}</span>
                <button 
                  onClick={handleCopyLink}
                  className="text-blue-600 hover:text-blue-700 p-1 rounded-md hover:bg-blue-50 transition-colors"
                  aria-label="Copy link"
                >
                  {copySuccess ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                </button>
              </div>
              {copySuccess && (
                <p className="text-xs text-green-600">Link copied to clipboard!</p>
              )}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button 
                onClick={() => shareToSocialMedia('facebook')}
                className="flex flex-col items-center justify-center gap-1 p-3 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <span className="text-xs font-medium">Facebook</span>
              </button>
              <button 
                onClick={() => shareToSocialMedia('twitter')}
                className="flex flex-col items-center justify-center gap-1 p-3 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                <span className="text-xs font-medium">Twitter</span>
              </button>
              <button 
                onClick={() => shareToSocialMedia('linkedin')}
                className="flex flex-col items-center justify-center gap-1 p-3 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-xs font-medium">LinkedIn</span>
              </button>
              <button 
                onClick={() => shareToSocialMedia('whatsapp')}
                className="flex flex-col items-center justify-center gap-1 p-3 bg-green-100 hover:bg-green-200 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-xs font-medium">WhatsApp</span>
              </button>
            </div>
            
            <button 
              onClick={() => setShowShareModal(false)}
              className="w-full mt-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

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