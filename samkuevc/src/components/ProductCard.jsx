import React from 'react';
import { ArrowRight, Battery, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ charger }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl h-full flex flex-col"
    >
      <Link to={`/product/${charger.id}`} className="block relative overflow-hidden h-64">
        <img
          src={charger.image[0] || 'https://via.placeholder.com/800x500?text=No+Image'}
          alt={charger.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 m-2 rounded">
          {charger.power}
        </div>
      </Link>
      
      <div className="p-6 sm:p-7 flex-grow flex flex-col">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 line-clamp-1">{charger.name}</h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3">{charger.description}</p>
        
        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-2 mb-4">
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
          
          <div className="flex items-center justify-between mt-3">
            <span className="text-blue-600 font-semibold text-lg">{charger.price}</span>
            <Link
              to={`/product/${charger.id}`}
              className="inline-flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors hover:bg-blue-700 text-sm font-medium"
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