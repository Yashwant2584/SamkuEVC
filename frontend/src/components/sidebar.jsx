import React, { useState } from "react";
import { X } from "lucide-react";


const ServicesSidebar = ({ filters, setFilters, isMobile, onClose }) => {
    const categories = [
      { name: "Charging Services", icon: "⚡" },
      { name: "Maintenance", icon: "🔧" },
      { name: "Installation", icon: "🔌" },
      { name: "Repair Services", icon: "🛠" },
      { name: "Emergency Support", icon: "🚨" },
      { name: "Battery Care", icon: "🔋" }
    ];
  
    const serviceTypes = [
      { name: "Home Charging", badge: "Popular" },
      { name: "Commercial", badge: "Business" },
      { name: "Express Service", badge: "Fast" },
      { name: "Premium Care", badge: "Prime" }
    ];
  
    const priceRanges = [
      { label: "Budget", value: [0, 5000], icon: "₹" },
      { label: "Standard", value: [5000, 15000], icon: "₹₹" },
      { label: "Premium", value: [15000, 30000], icon: "₹₹₹" }
    ];
  
    const sidebarClasses = isMobile
      ? "fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
      : "bg-white rounded-lg shadow-lg w-56";
  
    return (
      <div className={sidebarClasses}>
        {/* Header */}
        <div className="sticky top-0">
          <div className="px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-900 rounded-md">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-white">Filters</h2>
              {isMobile && (
                <button onClick={onClose} className="text-white hover:text-gray-200">
                  <X size={20} />
                </button>
              )}
            </div>
            
          </div>
  
          <div className="p-4 space-y-5">
            {/* Service Types */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
                <span className="w-1 h-4 bg-blue-600 rounded-full"></span>
                Service Types
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {serviceTypes.map((type) => (
                  <button
                    key={type.name}
                    className="px-2 py-1.5 text-xs bg-gray-50 hover:bg-blue-50 text-gray-700 rounded-md flex flex-col items-center transition-colors"
                  >
                    <span>{type.name}</span>
                    <span className="text-[10px] text-blue-600 font-medium">{type.badge}</span>
                  </button>
                ))}
              </div>
            </div>
  
            {/* Categories */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
                <span className="w-1 h-4 bg-blue-600 rounded-full"></span>
                Categories
              </h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <label 
                    key={category.name}
                    className="flex items-center p-1.5 hover:bg-gray-50 rounded-md cursor-pointer group transition-colors"
                  >
                    <input
                      type="checkbox"
                      className="w-3 h-3 text-blue-600 border-gray-300 rounded"
                      checked={filters.categories?.includes(category.name)}
                      onChange={() => {
                        setFilters(prev => ({
                          ...prev,
                          categories: prev.categories?.includes(category.name)
                            ? prev.categories.filter(c => c !== category.name)
                            : [...(prev.categories || []), category.name]
                        }));
                      }}
                    />
                    <span className="ml-2 text-xs text-gray-600 group-hover:text-gray-900">
                      {category.icon} {category.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
  
            {/* Price Range */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-900 flex items-center gap-2">
                <span className="w-1 h-4 bg-blue-600 rounded-full"></span>
                Price Range
              </h3>
              <div className="space-y-1">
                {priceRanges.map((range) => (
                  <label 
                    key={range.label}
                    className="flex items-center p-1.5 hover:bg-gray-50 rounded-md cursor-pointer group transition-colors"
                  >
                    <input
                      type="radio"
                      name="priceRange"
                      className="w-3 h-3 text-blue-600 border-gray-300"
                      checked={filters.priceRange?.[0] === range.value[0]}
                      onChange={() => {
                        setFilters(prev => ({
                          ...prev,
                          priceRange: range.value
                        }));
                      }}
                    />
                    <span className="ml-2 text-xs text-gray-600 group-hover:text-gray-900">
                      {range.icon} {range.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
  
            {/* Clear Filters */}
            <button
              onClick={() => setFilters({})}
              className="w-full py-2 text-xs bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors font-medium"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    );
  };
  export default ServicesSidebar;