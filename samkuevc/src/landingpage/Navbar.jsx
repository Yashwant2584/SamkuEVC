import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../images/logo.png'; 
import name from '../images/samkuEVC.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const dropdownTimerRef = useRef(null);
  const dropdownRefs = useRef({});

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  // Handle scroll behavior for navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (dropdownTimerRef.current) {
        clearTimeout(dropdownTimerRef.current);
      }
    };
  }, [prevScrollPos]);

  const handleMouseEnter = (dropdownName) => {
    // Clear any existing timeout
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = (dropdownName) => {
    // Set a timeout to close the dropdown
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
  };

  // Check if mouse is over dropdown menu to prevent closing
  const handleDropdownMouseEnter = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const handleProductClick = (path) => {
    navigate(path);
    setActiveDropdown(null);
    setIsOpen(false);
    
    // Clear any existing timeout
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
  };

  const productDropdownItems = [
    { label: 'E Bike Chargers', path: '/products/e-bike-chargers' },
    { label: 'AC Chargers', path: '/products/ac-chargers' },
    { label: 'DC Chargers', path: '/products/dc-chargers' },
    { label: 'EV Accessories', path: '/products/ev-accessories' },
    { label: 'Electric Cycles', path: '/products/electric-cycles' },
    { label: 'Public EV Chargers', path: '/products/public-ev-chargers' },
    { label: 'LEV DC Chargers', path: '/products/lev-dc-chargers' },
  ];

  const evSolutionsDropdownItems = [
    { label: 'OEM & ODM', path: '/ev-solutions' },
    { label: 'DC EV Charging', path: '/ev-solutions' },
    { label: 'AC EV Charging', path: '/ev-solutions' },
    { label: 'Home Charging Solutions', path: '/ev-solutions' },
    {
      label: 'Commercial Solutions',
      path: '/ev-solutions',
      subItems: [
        { label: 'High-Power DC Fast Charging', path: '/ev-solutions' },
        { label: 'Multi-Point Charging Systems', path: '/ev-solutions' },
        { label: 'Smart Load Management', path: '/ev-solutions' },
        { label: 'Remote Monitoring', path: '/ev-solutions' },
        { label: 'Payment Integration', path: '/ev-solutions' },
        { label: 'Fleet Management Integration', path: '/ev-solutions' }
      ]
    },
    { label: 'Connectors & Accessories', path: '/ev-solutions' },
  ];

  const navItems = [
    { path: '/', label: 'Home' },
    { 
      path: '/products', 
      label: 'Products',
      dropdown: true,
      dropdownName: 'products',
      dropdownItems: productDropdownItems
    },
    { 
      path: '/ev-solutions', 
      label: 'EV Solutions',
      dropdown: true,
      dropdownName: 'evSolutions',
      dropdownItems: evSolutionsDropdownItems
    },
    { path: '/about', label: 'About Us' },
    { path: '/location', label: 'Location' },
    { path: '/franchise', label: 'Franchise' },
    { path: '/contact', label: 'Contact' },
  ];

  // Check if the path matches or is a child of another path
  const isActivePath = (pathToCheck) => {
    if (location.pathname === pathToCheck) return true;
    if (pathToCheck !== '/' && location.pathname.startsWith(pathToCheck)) return true;
    return false;
  };

  return (
    <nav 
      className={`bg-white shadow-lg fixed w-full z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="SamkuEvc Logo" 
                className="w-9.5 h-9.5 mr-2" 
                onClick={() => navigate('/')}
                style={{ cursor: 'pointer' }}
              />
              <img 
                src={name} 
                alt="SamkuEVC" 
                className="w-38 h-20 mr-2 cursor-pointer" 
                onClick={() => navigate('/')}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <div 
                key={item.path}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.dropdownName)}
                onMouseLeave={() => item.dropdown && handleMouseLeave(item.dropdownName)}
                ref={el => {
                  if (el) dropdownRefs.current[item.dropdownName] = el;
                }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                      isActive || isActivePath(item.path)
                        ? 'text-green-600 bg-green-50'
                        : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                    }`
                  }
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </NavLink>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.dropdownName && (
                  <div 
                    className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="py-1">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        dropdownItem.subItems ? (
                          <div key={index} className="relative group">
                            <button 
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 flex justify-between items-center"
                              onClick={() => handleProductClick(dropdownItem.path)}
                            >
                              {dropdownItem.label}
                              <ChevronDown className="ml-1 h-4 w-4" />
                            </button>
                            <div 
                              className="absolute left-full top-0 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                              onMouseEnter={handleDropdownMouseEnter}
                              onMouseLeave={handleDropdownMouseLeave}
                            >
                              <div className="py-1">
                                {dropdownItem.subItems.map((subItem, subIndex) => (
                                  <button 
                                    key={subIndex} 
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                                    onClick={() => handleProductClick(subItem.path)}
                                  >
                                    {subItem.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <button 
                            key={index} 
                            className={`block w-full text-left px-4 py-2 text-sm ${
                              location.pathname === dropdownItem.path 
                                ? 'text-green-600 bg-green-50' 
                                : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                            }`}
                            onClick={() => handleProductClick(dropdownItem.path)}
                          >
                            {dropdownItem.label}
                          </button>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, itemIndex) => (
              <div key={itemIndex}>
                {item.dropdown ? (
                  <div className="flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-600 hover:bg-green-50">
                    <NavLink 
                      to={item.path}
                      className={({ isActive }) =>
                        isActive || isActivePath(item.path)
                          ? 'text-green-600'
                          : 'text-gray-600'
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering NavLink
                        setActiveDropdown(activeDropdown === item.dropdownName ? null : item.dropdownName);
                      }}
                      className="focus:outline-none"
                      aria-expanded={activeDropdown === item.dropdownName}
                    >
                      <ChevronDown className={`h-5 w-5 transform transition-transform ${activeDropdown === item.dropdownName ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium ${
                        isActive
                          ? 'text-green-600 bg-green-50'
                          : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
                
                {/* Mobile Dropdown */}
                {item.dropdown && activeDropdown === item.dropdownName && (
                  <div className="pl-4 pt-1 pb-1">
                    {item.dropdownItems.map((dropdownItem, index) => (
                      dropdownItem.subItems ? (
                        <div key={index}>
                          <button 
                            className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md flex justify-between items-center"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveDropdown(
                                activeDropdown === `${item.dropdownName}-${index}` 
                                  ? item.dropdownName 
                                  : `${item.dropdownName}-${index}`
                              );
                            }}
                            aria-expanded={activeDropdown === `${item.dropdownName}-${index}`}
                          >
                            {dropdownItem.label}
                            <ChevronDown className={`h-4 w-4 transform transition-transform ${activeDropdown === `${item.dropdownName}-${index}` ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {activeDropdown === `${item.dropdownName}-${index}` && (
                            <div className="pl-4 pt-1 pb-1">
                              {dropdownItem.subItems.map((subItem, subIndex) => (
                                <button 
                                  key={subIndex} 
                                  className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md"
                                  onClick={() => handleProductClick(subItem.path)}
                                >
                                  {subItem.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <button 
                          key={index} 
                          className={`block w-full text-left px-3 py-2 text-sm ${
                            location.pathname === dropdownItem.path 
                              ? 'text-green-600 bg-green-50' 
                              : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                          } rounded-md`}
                          onClick={() => handleProductClick(dropdownItem.path)}
                        >
                          {dropdownItem.label}
                        </button>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;