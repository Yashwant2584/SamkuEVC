import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
const ServicesHeader = ({ filters, setFilters }) => {
    const [isRatingOpen, setIsRatingOpen] = useState(false);
    
    return (
      <div className="bg-white shadow-sm mb-6 rounded-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            {/* Title and Description */}
            <div>
              <h1 className="text-xl font-semibold text-gray-900">EV Services</h1>
              <p className="text-sm text-gray-500">Find and book professional EV services</p>
            </div>
  
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-3 md:items-center">
              {/* Availability Toggle */}
              <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                <span className="text-sm text-gray-700">Availability:</span>
                <div className="flex gap-1">
                  <button
                    className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                      filters.availability === 'now'
                        ? 'bg-green-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setFilters(prev => ({ ...prev, availability: 'now' }))}
                  >
                    Available Now
                  </button>
                  <button
                    className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                      filters.availability === 'later'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setFilters(prev => ({ ...prev, availability: 'later' }))}
                  >
                    Schedule Later
                  </button>
                </div>
              </div>
  
              {/* Rating Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsRatingOpen(!isRatingOpen)}
                >
                  <span>Rating: {filters.rating ? `${filters.rating}+` : 'All'}</span>
                  <ChevronDown size={16} className={`transition-transform ${isRatingOpen ? 'rotate-180' : ''}`} />
                </button>
  
                {isRatingOpen && (
                  <div className="absolute top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    {[
                      { label: 'All Ratings', value: null },
                      { label: '5+ Stars', value: 5 },
                      { label: '4+ Stars', value: 4 },
                      { label: '3+ Stars', value: 3 }
                    ].map((option) => (
                      <button
                        key={option.label}
                        className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${
                          filters.rating === option.value ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                        }`}
                        onClick={() => {
                          setFilters(prev => ({ ...prev, rating: option.value }));
                          setIsRatingOpen(false);
                        }}
                      >
                        {option.label} {option.value ? '⭐' : ''}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default ServicesHeader;