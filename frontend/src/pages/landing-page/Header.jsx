import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaUserCircle, FaShoppingCart , FaSignOutAlt} from 'react-icons/fa';
import { Search, ChevronDown, User, Menu, X } from 'lucide-react';
import logo from "../../images/logo.png";
import name from "../../images/samkuService.png";
import { useNavigate, useLocation, Link} from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import authImage from "../../images/auth.png";
import { useCart } from "../../CartContext.jsx"


// export var itemCart = 9; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchPopupRef = useRef(null);
  const searchButtonRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const authModalRef = useRef(null);

  const { itemCart } = useCart();

  const handleLocationsClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection();
      }, 100);
    } else {
      scrollToSection();
    }
  };

  const scrollToSection = () => {
    const section = document.getElementById("locations");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };
  
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      handleNavigation("/");
    } else {
      scrollHomeClick();
    }
  };
  
  const scrollHomeClick = () => {
    const section = document.getElementById("home");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const navItems = [
    { name: "Home", path: "/", onClick: handleHomeClick },
    { name: "Services", path: "/services", onClick: () => handleNavigation("/services") },
    { name: "About Us", path: "/about", onClick: () => handleNavigation("/about") },
    { name: "Locations", path: "#locations", onClick: handleLocationsClick },
    { name: "Enquiry", path: "/Enquiry", onClick: () => handleNavigation("/Enquiry") },
    { name: "Contact", path: "#contact" }
  ];
  
  const services = [
    "EV Charger Installation and Maintenance.",
    "Battery Services.",
    "Vehicle Maintenance Services.",
    "Emergency and Roadside Assistance."
  ];

  const popularSearches = [
    "EV Charger Installation",
    "Tesla Maintenance",
    "Battery Replacement",
    "Emergency Roadside Assistance",
    "Charging Station Setup",
    "Annual Maintenance Package",
    "Home Charger Installation"
  ];

  // cartinfo navigation funcion
  const handleCartNavigation = () => {
    navigate("/cartInfo");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const handleStoreNavigation = () => {
    navigate("/store");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  // Typewriter Effect for Placeholder
  useEffect(() => {
    const currentService = services[serviceIndex];
    if (charIndex < currentService.length) {
      const timeout = setTimeout(() => {
        setPlaceholder((prev) => prev + currentService[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setPlaceholder("");
        setCharIndex(0);
        setServiceIndex((prev) => (prev + 1) % services.length);
      }, 2000);
    }
  }, [charIndex, serviceIndex]);

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle clicks outside the search popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchPopupRef.current && 
        !searchPopupRef.current.contains(event.target) &&
        searchButtonRef.current && 
        !searchButtonRef.current.contains(event.target)
      ) {
        setShowSearchPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Add this useEffect for handling clicks outside the auth modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (authModalRef.current && !authModalRef.current.contains(event.target)) {
        setShowAuthModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter suggestions based on search query
  const filteredSuggestions = searchQuery
    ? popularSearches.filter(item => 
        item.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : popularSearches;

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    // You would typically trigger a search here
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search submission
    console.log("Searching for:", searchQuery);
    // You would typically navigate to search results page here
  };

  return (
    <>
      {/* Main navbar */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-md py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
            <Link to="/">
                <img src={logo} alt="SamkuEvc Logo" className="w-10 h-10 mr-2 cursor-pointer" />
              </Link>
              <div>
                <img src={name} alt="samkuService.png" className="w-40 h-8 mr-2 cursor-pointer" />
                <p style={{fontSize: "0.75rem", color: "#6b7280", marginTop: "-4px"}}>Electric Vehicle Care</p>
              </div>
            </div>
            

            
            

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {/* Compact Search Input that opens popup */}
              <div className="relative">
                <div
                  ref={searchButtonRef}
                  className="w-[192px] h-9 px-2 flex items-center border-2 border-gray-200 rounded-full bg-gray-100 text-gray-900 cursor-pointer hover:bg-gray-200 transition duration-300"
                  onClick={() => setShowSearchPopup(true)}
                >
                  <Search className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-xs text-gray-500 truncate">
                    {`Search for "${placeholder}"`}
                  </span>
                </div>
              </div>

              
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    if (item.onClick) {
                      item.onClick(e);
                    } else if (item.path.startsWith("#")) {
                      e.preventDefault();
                      const sectionId = item.path.substring(1);
                      const section = document.getElementById(sectionId);
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    } else {
                      navigate(item.path);
                    }
                  }}
                  className={`px-4 py-2 rounded-md text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 ${
                    item.name === "Home" ? "text-blue-600" : ""
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              <button 
                className="ml-2 bg-gray-100 hover:bg-gray-300 px-3 pb-1 rounded-md font-bold text-2xl transition-colors duration-300"
                style={{ fontFamily: 'Segoe UI' }}
                onClick={handleStoreNavigation}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Ev store</span>
                
              </button>
              <button 
                className="ml-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition-colors duration-300"
                onClick={() => setShowAuthModal(true)}
              >
                <FaUserCircle className="text-xl" />
              </button>
              <button className="ml-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition-colors duration-300 relative"  onClick={handleCartNavigation} >
                <FaShoppingCart className="text-xl" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                 {itemCart}
                </span>
              </button>
            </nav>

        
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                className="text-gray-700 hover:text-blue-600 focus:outline-none mr-4" 
                onClick={() => setShowAuthModal(true)}
              >
                <FaUserCircle className="text-2xl" />
              </button>
              <button 
                className="text-gray-700 hover:text-blue-600 focus:outline-none mr-4 relative" onClick={handleCartNavigation}
              >
                <FaShoppingCart className="text-xl" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {itemCart}
                </span>
              </button>
              <button 
                className="text-gray-700 hover:text-blue-600 focus:outline-none" 
                onClick={() => setMobileMenuOpen(true)}
              >
                <FaBars className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search header - only visible on mobile */}
      <div className="md:hidden sticky top-16 z-45 w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2">
          <div 
            className="relative flex items-center w-full px-4 py-2 bg-gray-100 rounded-full cursor-pointer border border-gray-200"
            onClick={() => setShowSearchPopup(true)}
          >
            <Search className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-sm text-gray-500 truncate">
              {`Search for "${placeholder || 'our services'}"`}
            </span>
          </div>
        </div>
      </div>

      {/* Search Popup */}
      <AnimatePresence>
        {showSearchPopup && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-transperent bg-opacity-10"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowSearchPopup(false);
              }
            }}
          >
            <motion.div
              ref={searchPopupRef}
              initial={{ width: "300px" }}
              animate={{ width: ["90%", "600px"] }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden max-w-[90vw] w-[90vw] md:w-auto"
            >
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search our services..."
                    className="w-full p-4 pl-12 text-base border-b bg-gray-100 focus:outline-none"
                    autoFocus
                  />
                  <Search className="absolute left-4 top-4 h-6 w-6 text-gray-500" />
                  <button
                    type="button"
                    onClick={() => setShowSearchPopup(false)}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              
                <div className="p-4 max-h-80 overflow-y-auto">
                  <h3 className="text-xs font-semibold text-gray-500 mb-2">
                    {searchQuery ? "SUGGESTIONS" : "POPULAR SEARCHES"}
                  </h3>
                  {filteredSuggestions.length > 0 ? (
                    <ul className="space-y-1">
                      {filteredSuggestions.map((suggestion, index) => (
                        <li key={index}>
                          <button
                            type="button"
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md flex items-center"
                          >
                            <Search className="h-4 w-4 mr-2 text-gray-400" />
                            {suggestion}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500 py-2">No results found</p>
                  )}
                </div>
                
                <div className="bg-gray-50 px-4 py-3 flex justify-between items-center border-t">
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Advanced Search
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-300"
                  >
                    Search
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

           {/* Mobile menu */}
           {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-white"
        >
          <div className="flex flex-col h-[90vh] w-[100vw]">
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center">
                <img src={logo} alt="SamkuEvc Logo" className="w-8 h-8 mr-2" />
                <img src={name} alt="samkuService.png" className="w-35 h-7 mr-2 cursor-pointer" />
              </div>
              <button 
                className="text-gray-700 hover:text-blue-600 focus:outline-none" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>
            
            <nav className="flex-grow p-4">
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={(e) => {
                        if (item.onClick) {
                          item.onClick(e);
                        } else if (item.path.startsWith("#")) {
                          e.preventDefault();
                          const sectionId = item.path.substring(1);
                          const section = document.getElementById(sectionId);
                          if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                          }
                        } else {
                          navigate(item.path);
                        }
                        setMobileMenuOpen(false); // Close mobile menu after navigation
                      }}
                      className={`w-full text-left p-3 rounded-md font-medium text-lg ${
                        item.path === location.pathname
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="p-4 border-t">
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-white py-3 rounded-md text-xl font-medium transition-colors duration-300" onClick={handleStoreNavigation}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Ev store</span>
              </button>
              <div className="flex gap-2 mt-3">
                <button 
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-md font-medium transition-colors duration-300 flex items-center justify-center"
                  onClick={() => {
                    setShowAuthModal(true); // Open auth modal
                    setMobileMenuOpen(false); // Close mobile menu
                  }}
                >
                  <FaUserCircle className="mr-2" /> Account
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-md font-medium transition-colors duration-300 flex items-center justify-center">
                  <FaSignOutAlt className="mr-2" /> Logout
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Auth Modal Login Signup Pages*/}

      <AnimatePresence>
        {showAuthModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-black/40 backdrop-blur-[8px] z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              ref={authModalRef}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-[700px] max-h-[85vh] overflow-y-auto relative"
            >
              {/* Close button */}
              <button 
                onClick={() => setShowAuthModal(false)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors p-1.5 hover:bg-black/5 rounded-full z-10"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Left side - Image */}
                <div 
                  className="hidden md:flex w-full md:w-1/2 relative overflow-hidden"
                  style={{ 
                    backgroundImage: `url(${authImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Decorative circles */}
                  <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-teal-300/20 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>
                </div>

                {/* Right Side - Auth Forms */}
                <div className="w-full md:w-1/2 p-5 md:p-6">
                  <div className="max-w-sm mx-auto">
                    {/* Mobile-only Login/Signup */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center bg-blue-50/50 rounded-xl p-2.5 mb-3 shadow-sm">
                        <img src={logo} alt="Logo" className="w-7 h-7 mr-2" />
                        <img src={name} alt="samkuService.png" className="w-35 h-7 mr-2 cursor-pointer" />
                      </div>

                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={isLogin ? "login-mobile-welcome" : "signup-mobile-welcome"}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="md:hidden text-center mb-6"
                        >
                          <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            {isLogin ? "Welcome Back!" : "Create Account"}
                          </h2>
                          <p className="text-sm text-gray-600">
                            {isLogin ? "Sign in to your account" : "Sign up for a new account"}
                          </p>
                        </motion.div>
                      </AnimatePresence>

                   
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={isLogin ? "login-desktop-welcome" : "signup-desktop-welcome"}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <h2 className="text-2xl font-bold text-gray-800 mb-2 hidden md:block">
                            {isLogin ? "Welcome Back!" : "Create Account"}
                          </h2>
                          <p className="text-sm text-gray-600 hidden md:block">
                            {isLogin ? "Sign in to your account" : "Sign up for a new account"}
                          </p>
                          <p className="text-sm mt-2">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button
                              onClick={() => setIsLogin(!isLogin)}
                              className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                              {isLogin ? "Sign up" : "Sign in"}
                            </button>
                          </p>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border-2 border-gray-100 p-2 rounded-xl font-medium transition-all duration-300 ease-out mb-4 hover:shadow-lg group">
                      <FcGoogle className="text-lg" />
                      <span className="text-gray-700 text-sm">Continue with Google</span>
                    </button>

                    <div className="relative my-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-xs">
                        <span className="px-4 bg-white text-gray-500">or continue with email</span>
                      </div>
                    </div>

                    {/* Main form container with fixed height */}
                    <div className="relative h-[200px]">
                      <AnimatePresence mode="wait">
                        <motion.form
                          key={isLogin ? "login-form" : "signup-form"}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ 
                            duration: 0.25,
                            ease: [0.4, 0, 0.2, 1]
                          }}
                          className="space-y-2.5 absolute w-full"
                        >
                          {/* Full Name Input - only for signup */}
                          {!isLogin && (
                            <motion.div>
                              <div className="relative">
                                <input
                                  id="fullName"
                                  type="text"
                                  className="block w-full px-4 h-10 pt-3 pb-1 peer bg-white border border-gray-200 text-gray-800 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-300 ease-out"
                                  placeholder=" "
                                />
                                <label 
                                  htmlFor="fullName" 
                                  className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-gray-500 duration-300 transform 
                                    peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 
                                    peer-focus:top-[0px] peer-focus:scale-80 peer-focus:-translate-y-1/2 peer-focus:text-blue-600 
                                    peer-[&:not(:placeholder-shown)]:top-[0px] peer-[&:not(:placeholder-shown)]:scale-80 
                                    peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:text-blue-600 
                                    bg-white px-0.5 z-10"
                                >
                                  Full Name
                                </label>
                              </div>
                            </motion.div>
                          )}
                          
                          {/* Email Input */}
                          <motion.div>
                            <div className="relative">
                              <input
                                id="email"
                                type="email"
                                className="block w-full px-4 h-10 pt-3 pb-1 peer bg-white border border-gray-200 text-gray-800 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-300 ease-out"
                                placeholder=" "
                              />
                              <label 
                                htmlFor="email" 
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-gray-500 duration-300 transform 
                                  peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 
                                  peer-focus:top-[0px] peer-focus:scale-80 peer-focus:-translate-y-1/2 peer-focus:text-blue-600 
                                  peer-[&:not(:placeholder-shown)]:top-[0px] peer-[&:not(:placeholder-shown)]:scale-80 
                                  peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:text-blue-600 
                                  bg-white px-0.5 z-10"
                              >
                                Email Address
                              </label>
                            </div>
                          </motion.div>
                          
                          {/* Password Input */}
                          <motion.div>
                            <div className="relative">
                              <input
                                id="password"
                                type="password"
                                className="block w-full px-4 h-10 pt-3 pb-1 peer bg-white border border-gray-200 text-gray-800 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-300 ease-out"
                                placeholder=" "
                              />
                              <label 
                                htmlFor="password" 
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-gray-500 duration-300 transform 
                                  peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 
                                  peer-focus:top-[0px] peer-focus:scale-80 peer-focus:-translate-y-1/2 peer-focus:text-blue-600 
                                  peer-[&:not(:placeholder-shown)]:top-[0px] peer-[&:not(:placeholder-shown)]:scale-80 
                                  peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:text-blue-600 
                                  bg-white px-0.5 z-10"
                              >
                                Password
                              </label>
                            </div>
                          </motion.div>
                          
                          {/* Remember me / Forgot password - only for login */}
                          <AnimatePresence mode="wait">
                            {isLogin && (
                              <motion.div 
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ 
                                  duration: 0.15,
                                  delay: 0.2,
                                  ease: [0.4, 0, 0.2, 1]
                                }}
                                className="flex items-center justify-between py-1"
                              >
                                <label className="flex items-center">
                                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                                </label>
                                <button type="button" className="text-sm text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors duration-200 ease-out">
                                  Forgot?
                                </button>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Submit Button */}
                          <motion.button
                            type="submit"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              duration: 0.15,
                              delay: 0.25,
                              ease: [0.4, 0, 0.2, 1]
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 rounded-xl font-medium transition-all duration-300 ease-out hover:opacity-90 mt-1 text-sm hover:shadow-lg"
                          >
                            {isLogin ? "Sign In" : "Create Account"}
                          </motion.button>
                        </motion.form>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

//auth is almost complete
