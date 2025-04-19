import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { chargers } from '../data/chargers.js';
import ProductCard from '../components/ProductCard';
import { ChevronLeft, Filter, Search, ArrowUpRight } from 'lucide-react';
import bike from '../images/C-Images/bike.png';
import ac_charge from '../images/C-Images/ac_chargers.png';
import dc_charge from '../images/C-Images/dc_chargers.png';
import cycle from '../images/C-Images/cycle.png';
import public_charge from '../images/C-Images/public_chaege.png';
import lev_dc from '../images/C-Images/LEV.png';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [sortBy, setSortBy] = useState('default');
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const categories = [
    {
      title: 'E-Bike Chargers',
      description: 'Efficient charging solutions for electric bikes',
      image: bike,
      path: '/products/e-bike-chargers'
    },
    {
      title: 'AC Chargers',
      description: 'Reliable AC charging for all electric vehicles',
      image: ac_charge,
      path: '/products/ac-chargers'
    },
    {
      title: 'DC Chargers',
      description: 'High-power DC fast charging solutions',
      image: dc_charge,
      path: '/products/dc-chargers'
    },
    {
      title: 'EV Accessories',
      description: 'Essential accessories for your EV charging needs',
      image: '/accessories.jpg',
      path: '/products/ev-accessories'
    },
    {
      title: 'Electric Cycles',
      description: 'Specialized chargers for electric cycles',
      image: cycle,
      path: '/products/electric-cycles'
    },   
    {
      title: 'Public EV Chargers',
      description: 'Specialized chargers for parking lots and public spaces',
      image: public_charge,
      path: '/products/public-ev-chargers'
    },
    {
      title: 'LEV DC Chargers',
      description: 'Coming soon!',
      image: lev_dc,
      path: '/products/lev-dc-chargers'
    }
  ];

  useEffect(() => {
    // Check if URL matches a category route
    const pathSegments = location.pathname.split('/');
    if (pathSegments.length >= 3 && pathSegments[1] === 'products') {
      const slug = pathSegments[2];
      const category = categories.find(cat => 
        cat.path.split('/').pop() === slug
      );
      
      if (category) {
        setSelectedCategory(category.title);
      }
    } else if (location.pathname === '/products') {
      setSelectedCategory(null);
    }
    
    // Scroll to top when category changes
    window.scrollTo(0, 0);
  }, [location.pathname, categories]);

  const handleCategorySelect = (categoryTitle) => {
    setIsAnimating(true);
    setTimeout(() => {
      const category = categories.find(cat => cat.title === categoryTitle);
      if (category) {
        navigate(category.path);
      }
      setSelectedCategory(categoryTitle);
      setIsAnimating(false);
    }, 300);
  };

  const handleBackToCategories = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/products');
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
    <div className="py-16 pt-24 min-h-screen transition-all duration-300 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Only show main heading when no category is selected */}
        {!selectedCategory && (
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">Our Products</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our range of innovative EV charging solutions designed for efficiency, reliability, and sustainability.
            </p>
          </div>
        )}
        
        <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {!selectedCategory ? (
            // Show categories when no category is selected
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {categories.map((category, index) => (
                <Link 
                  key={index} 
                  to={category.path}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategorySelect(category.title);
                  }}
                >
                  <div className="relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold text-blue-800">{category.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
                    <div className="flex justify-start items-center">
                      <span
                        className="text-green-600 group-hover:text-green-700 font-medium inline-flex items-center text-sm"
                      >
                        View Products
                        <ArrowUpRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            // Show filtered products for the selected category
            <div>
              {/* Back button for mobile view - positioned above the category heading */}
              <div className="md:hidden mb-4">
                <button 
                  onClick={handleBackToCategories}
                  className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors bg-white py-2 px-4 rounded-lg shadow-sm border border-gray-100"
                  aria-label="Back to categories"
                >
                  <ChevronLeft className="h-5 w-5 mr-1" />
                  <span>Back to Categories</span>
                </button>
              </div>
              
              {/* Simplified and centered category heading with colored text */}
              <div className="mb-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-800">{selectedCategory}</h2>
                <p className="text-gray-600">Discover our range of high-quality {selectedCategory.toLowerCase()}</p>
              </div>
              
              {/* Controls row with back button (hidden on mobile) and filters */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
                <div className="hidden md:block">
                  <button 
                    onClick={handleBackToCategories}
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors bg-white py-2 px-4 rounded-lg shadow-sm border border-gray-100"
                    aria-label="Back to categories"
                  >
                    <ChevronLeft className="h-5 w-5 mr-1" />
                    <span>Back to Categories</span>
                  </button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm w-full"
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Filter className="h-4 w-4 text-gray-400" />
                    </div>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="pl-10 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white shadow-sm w-full"
                    >
                      <option value="default">Sort By</option>
                      <option value="price-low-high">Price: Low to High</option>
                      <option value="price-high-low">Price: High to Low</option>
                      <option value="name-a-z">Name: A to Z</option>
                      <option value="name-z-a">Name: Z to A</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {error ? (
                <div className="text-center py-12 bg-red-50 rounded-xl border border-red-100">
                  <p className="text-xl text-red-600 mb-2">An error occurred: {error.message}</p>
                  <button 
                    onClick={handleBackToCategories}
                    className="mt-4 inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Try Again
                  </button>
                </div>
              ) : sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <div key={product.id} className="transform transition-all duration-300 hover:-translate-y-1">
                      <ProductCard charger={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 shadow-sm">
                    <Search className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-xl text-blue-800 font-medium mb-2">No products found.</p>
                  <p className="text-gray-600 mb-4">Try adjusting your search or filters.</p>
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg hover:from-blue-700 hover:to-green-600 transition duration-300"
                  >
                    Clear Search
                  </button>
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
        
        /* Custom styling for ProductCard component - this will be applied if the ProductCard uses className props */
        .product-card {
          background: white;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
        }
        
        .product-card:hover {
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
        
        .product-card-image {
          position: relative;
          height: 200px;
        }
        
        .product-card-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: linear-gradient(to right, #3182ce, #38a169);
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
        }
        
        .product-card-content {
          padding: 1.5rem;
        }
        
        .product-card-title {
          color: #2c5282;
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .product-card-description {
          color: #4a5568;
          font-size: 0.875rem;
          margin-bottom: 1rem;
          line-height: 1.5;
        }
        
        .product-card-price {
          color: #38a169;
          font-size: 1.25rem;
          font-weight: 700;
        }
        
        .product-card-button {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1rem;
          background: linear-gradient(to right, #3182ce, #38a169);
          color: white;
          font-weight: 600;
          border-radius: 0.375rem;
          transition: all 0.3s ease;
        }
        
        .product-card-button:hover {
          background: linear-gradient(to right, #2c5282, #2f855a);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default Products;