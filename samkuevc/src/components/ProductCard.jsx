import React from 'react';
import { ArrowRight, Battery, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ charger }) => {
  // Create URL path based on category
  const getCategoryPath = (category) => {
    if (!category) return '/products';
    
    // Convert category name to URL slug
    const slug = category.toLowerCase().replace(/\s+/g, '-');
    return `/products/${slug}`;
  };

  // Build product detail URL
  const productDetailUrl = `${getCategoryPath(charger.category)}/${charger.id}`;

  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl h-full flex flex-col"
    >
      <Link to={productDetailUrl} className="block relative overflow-hidden h-48">
        <img
          src={charger.image[0] || 'https://via.placeholder.com/800x500?text=No+Image'}
          alt={charger.name}
          className="w-full h-full object-cover" // Removed transition-transform and scale classes
          loading="lazy"
        />
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 m-2 rounded">
          {charger.power}
        </div>
      </Link>
      
      <div className="p-4 sm:p-5 flex-grow flex flex-col">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 line-clamp-1">{charger.name}</h3>
        <p className="text-gray-600 mb-3 text-sm sm:text-base line-clamp-2">{charger.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            {charger.compatibility && charger.compatibility.slice(0, 2).map((item, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center">
                <Battery className="h-3 w-3 mr-1" />
                {item}
              </span>
            ))}
            <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full flex items-center">
              <Zap className="h-3 w-3 mr-1" />
              {charger.power}
            </span>
          </div>
          
          <div className="flex items-center justify-between mt-2">
            <span className="text-blue-600 font-semibold text-lg">{charger.price}</span>
            <Link
              to={productDetailUrl}
              className="inline-flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-lg transition-colors hover:bg-blue-700 text-sm font-medium"
              aria-label={`View details for ${charger.name}`}
            >
              Details
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;