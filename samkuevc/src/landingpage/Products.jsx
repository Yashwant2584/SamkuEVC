import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { chargers } from '../data/chargers.js';
import ProductCard from '../components/ProductCard';
import { ChevronLeft, Filter, Search } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [sortBy, setSortBy] = useState('default');
  const [error, setError] = useState(null);

  const categories = [
    {
      title: 'E-Bike Chargers',
      description: 'Efficient charging solutions for electric bikes',
      image: '/30-DC.png'
    },
    {
      title: 'AC Chargers',
      description: 'Reliable AC charging for all electric vehicles',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80'
    },
    {
      title: 'DC Chargers',
      description: 'High-power DC fast charging solutions',
      image: '/30-DC.png'
    },
    {
      title: 'EV Accessories',
      description: 'Essential accessories for your EV charging needs',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80'
    },
    {
      title: 'Electric Cycles',
      description: 'Specialized chargers for electric cycles',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80'
    },   
    {
      title: 'Public EV Chargers',
      description: 'Specialized chargers for electric cycles',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80'
    }
  ];

  useEffect(() => {
    // Scroll to top when category changes
    window.scrollTo(0, 0);
  }, [selectedCategory]);

  const handleCategorySelect = (categoryTitle) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedCategory(categoryTitle);
      setIsAnimating(false);
    }, 300);
  };

  const handleBackToCategories = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedCategory(null);
      setSearchTerm('');
      setSortBy('default');
      setIsAnimating(false);
    }, 300);
  };

  // Filter products based on selected category and search term
  const filteredProducts = selectedCategory 
    ? chargers.filter(charger => {
        const matchesCategory = charger.category && 
          charger.category.toLowerCase() === selectedCategory.toLowerCase();
        const matchesSearch = searchTerm.trim() === '' ||
          charger.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          charger.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      })
    : [];

  // Sort products based on the selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low-high') {
      return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
    } else if (sortBy === 'price-high-low') {
      return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
    } else if (sortBy === 'name-a-z') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'name-z-a') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  return (
    <div className="py-16 pt-24 min-h-screen transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 transition-all">Our Products</h1>
        
        <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {!selectedCategory ? (
            // Show categories when no category is selected
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {categories.map((category, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => handleCategorySelect(category.title)}
                >
                  <div className="relative">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">{category.description}</p>
                    <button
                      className="text-green-600 hover:text-green-700 font-medium inline-flex items-center text-sm md:text-base"
                    >
                      View Products
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Show filtered products for the selected category
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
                <div className="flex items-center">
                  <button 
                    onClick={handleBackToCategories}
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors mr-4"
                    aria-label="Back to categories"
                  >
                    <ChevronLeft className="h-5 w-5 mr-1" />
                    <span className="text-sm md:text-base">Back</span>
                  </button>
                  <h2 className="text-2xl md:text-3xl font-bold">{selectedCategory}</h2>
                </div>
                
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Filter className="h-4 w-4 text-gray-400" />
                    </div>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white w-full"
                    >
                      <option value="default">Sort By</option>
                      <option value="price-low-high">Price: Low to High</option>
                      <option value="price-high-low">Price: High to Low</option>
                      <option value="name-a-z">Name: A to Z</option>
                      <option value="name-z-a">Name: Z to A</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {error ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-xl text-red-600 mb-2">An error occurred: {error.message}</p>
                </div>
              ) : sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                  {sortedProducts.map((product, index) => (
                    <div 
                      key={product.id}
                      className="transform transition-all duration-300"
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        animationName: 'fadeIn',
                        animationDuration: '500ms',
                        animationFillMode: 'both' 
                      }}
                    >
                      <ProductCard charger={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-xl text-gray-600 mb-2">No products found.</p>
                  <p className="text-gray-500">Try adjusting your search or filters.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      <style jsx="true">{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Products;