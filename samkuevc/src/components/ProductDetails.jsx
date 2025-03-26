import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Battery, Zap, Check, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { chargers } from '../data/chargers';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const charger = chargers.find((c) => c.id === id);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 300);

    // Find related products from the same category
    if (charger) {
      const related = chargers
        .filter(c => c.id !== id && c.category === charger.category)
        .slice(0, 3);
      setRelatedProducts(related);
    }

    return () => clearTimeout(timer);
  }, [id, charger]);

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

  // Mock multiple images for the product
  const productImages = charger ? [
    charger.image,
    // Use the same image for demo purposes
    charger.image.replace('?w=800', '?w=801'),
    charger.image.replace('?w=800', '?w=802'),
  ] : [];

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
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/products"
            className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2 font-medium"
          >
            <ArrowLeft size={20} />
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-24 transition-opacity duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <ArrowLeft size={18} />
            Back to products
          </Link>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={handlePrevious}
              className="p-2 border rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Previous product"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 border rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Next product"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Product Images */}
            <div className="bg-gray-100">
              <div className="relative">
                <img
                  src={productImages[activeImageIndex]}
                  alt={charger.name}
                  className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-contain p-4"
                />
                
                {/* Image Navigation */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeImageIndex ? 'bg-blue-600 scale-110' : 'bg-gray-300'
                      }`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button 
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Add to favorites"
                  >
                    <Heart size={20} className="text-gray-600" />
                  </button>
                  <button 
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Share product"
                  >
                    <Share2 size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>
              
              {/* Thumbnail Navigation */}
              <div className="flex justify-center gap-2 p-4 border-t">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`border-2 rounded-md overflow-hidden transition-all ${
                      index === activeImageIndex ? 'border-blue-600' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${index + 1}`} 
                      className="w-16 h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="p-6 md:p-8 flex flex-col">
              <div className="flex flex-col md:gap-1">
                <div className="flex items-center">
                  <span className="text-sm text-blue-600 font-medium">
                    {charger.category}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{charger.name}</h1>
                <p className="text-lg text-gray-600 mb-6">{charger.description}</p>
              </div>
              
              <div className="space-y-6 flex-grow">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div className="flex items-center gap-3">
                    <Zap className="text-blue-600" size={22} />
                    <div>
                      <h3 className="font-semibold text-sm text-gray-500">Power Output</h3>
                      <p className="font-medium">{charger.power}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Battery className="text-blue-600" size={22} />
                    <div>
                      <h3 className="font-semibold text-sm text-gray-500">Compatibility</h3>
                      <p className="font-medium">{charger.compatibility.join(", ")}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-x-2 mb-6">
                    {charger.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Price</span>
                    <span className="text-3xl font-bold text-blue-600">{charger.price}</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 sm:flex-none bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors">
                      Contact Sales
                    </button>
                    <button className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <Link 
                  key={product.id} 
                  to={`/product/${product.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                    <p className="text-blue-600 font-bold">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails; 