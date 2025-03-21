import React, { useState, useEffect } from 'react';
import { Search, MapPin, X, Crosshair } from 'lucide-react';

const HERE_API_KEY = 'EfxdvZ9U60F-lMMJ5nN5mTmsgXA3khiC3W1vB8a_2-0';

const serviceCenters = [
  { id: 1, name: 'Service Center A', address: 'Main Samku Office', lat: 18.655866, lng: 73.893685 },
  { id: 2, name: 'Service Center B', address: 'Ajeenkya DY Patil college', lat: 18.623165, lng: 73.915169 },
  { id: 3, name: 'Service Center C', address: 'Wagholi Pune', lat: 18.565069, lng: 73.978210 },
];

const LoadingSpinner = ({ size = "small", light = true }) => {
  const sizeClass = size === "small" ? "w-4 h-4" : "w-6 h-6";
  const colorClass = light ? "border-white border-t-transparent" : "border-blue-500 border-t-transparent";
  
  return (
    <div className={`${sizeClass} border-2 ${colorClass} rounded-full animate-spin`}></div>
  );
};

const LocationFinder = () => {
  const [userAddress, setUserAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [nearestCenter, setNearestCenter] = useState(null);
  const [distance, setDistance] = useState(null);
  const [error, setError] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [gettingLocation, setGettingLocation] = useState(false);
  const [fetchingSuggestions, setFetchingSuggestions] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (userAddress.length < 3) {
        setSuggestions([]);
        return;
      }

      setFetchingSuggestions(true);
      try {
        const response = await fetch(
          `https://autocomplete.search.hereapi.com/v1/autocomplete?q=${encodeURIComponent(
            userAddress
          )}&apiKey=${HERE_API_KEY}`
        );
        const data = await response.json();
        setSuggestions(data.items || []);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      } finally {
        setFetchingSuggestions(false);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [userAddress]);

  const geocodeAddress = async (address) => {
    try {
      const response = await fetch(
        `https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(address)}&apiKey=${HERE_API_KEY}`
      );
      const data = await response.json();
      
      if (data.items && data.items.length > 0) {
        return data.items[0].position;
      }
      throw new Error('Address not found');
    } catch (error) {
      throw new Error('Failed to geocode address');
    }
  };

  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${lat},${lng}&apiKey=${HERE_API_KEY}`
      );
      const data = await response.json();
      
      if (data.items && data.items.length > 0) {
        const address = data.items[0].address;
        return address.label || `${address.street || ''} ${address.houseNumber || ''}, ${address.city || ''}, ${address.postalCode || ''}`;
      }
      throw new Error('Unable to find address for this location');
    } catch (error) {
      console.error('Reverse geocoding error:', error);
      throw new Error('Failed to get address from location');
    }
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const findNearestCenter = async (coords) => {
    setLoading(true);
    setError('');
    try {
      const userCoords = coords || await geocodeAddress(userAddress);
      let nearest = null;
      let shortestDistance = Infinity;
      
      serviceCenters.forEach(center => {
        const distance = calculateDistance(
          userCoords.lat,
          userCoords.lng,
          center.lat,
          center.lng
        );
        
        if (distance < shortestDistance) {
          shortestDistance = distance;
          nearest = center;
        }
      });
      
      setNearestCenter(nearest);
      setDistance(shortestDistance);
      setShowPopup(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      setGettingLocation(false);
    }
  };

  const getCurrentLocation = () => {
    setGettingLocation(true);
    setError('');
    
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setGettingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        
        try {
          const address = await reverseGeocode(coords.lat, coords.lng);
          setUserAddress(address);
          findNearestCenter(coords);
        } catch (error) {
          setError('Error getting address: ' + error.message);
          setGettingLocation(false);
        }
      },
      (error) => {
        setError('Unable to retrieve your location');
        setGettingLocation(false);
      }
    );
  };

  const handleSuggestionClick = (suggestion) => {
    setUserAddress(suggestion.title);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 md:px-0">
      {/* Main Search Container */}
      <div className="flex flex-col md:flex-row gap-3 p-3 md:p-4 bg-white rounded-lg shadow-lg">
        {/* Location Input Container */}
        <div className="relative flex-1 w-full">
          <div className="flex flex-col sm:flex-row items-center border rounded-lg overflow-hidden">
            <div className="flex items-center justify-center w-full sm:w-auto px-4 py-3 bg-gray-50 border-b sm:border-b-0 sm:border-r">
              <MapPin className="w-5 h-5 text-gray-500" />
              <span className="ml-2 text-gray-700">Location</span>
            </div>
            <div className="relative w-full flex items-center">
              <input
                type="text"
                placeholder="Enter your location"
                value={userAddress}
                onChange={(e) => {
                  setUserAddress(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                className="flex-1 px-4 py-3 focus:outline-none w-full"
              />
              {fetchingSuggestions && (
                <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
                  <LoadingSpinner light={false} />
                </div>
              )}
              {userAddress && (
                <button
                  onClick={() => setUserAddress('')}
                  className="px-3 text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
          
          {/* Suggestions Dropdown */}
          {(suggestions.length > 0 && showSuggestions) && (
            <div className="absolute z-20 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-64 overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="px-4 py-3 cursor-pointer hover:bg-gray-100 border-b last:border-b-0"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-gray-400 mt-1 mr-2 flex-shrink-0" />
                    <span>{suggestion.title}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button
            onClick={getCurrentLocation}
            disabled={gettingLocation}
            className="flex-1 md:flex-none px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 shadow-sm"
          >
            {gettingLocation ? (
              <div className="flex items-center justify-center gap-2">
                <LoadingSpinner />
                <span className="text-sm md:text-base">Locating...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <Crosshair className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Current Location</span>
              </div>
            )}
          </button>

          <button
            onClick={() => findNearestCenter()}
            disabled={loading || !userAddress}
            className="flex-1 md:flex-none px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 shadow-sm"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <LoadingSpinner />
                <span className="text-sm md:text-base">Finding...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <Search className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Find</span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg flex items-center">
          <div className="mr-2 bg-red-200 rounded-full p-1">
            <X className="w-4 h-4 text-red-600" />
          </div>
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Custom Popup */}
      {showPopup && nearestCenter && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-transperent bg-opacity-50 p-4">
          <div className="bg-white rounded-lg p-5 w-full max-w-sm shadow-lg relative z-100 animate-fadeIn">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Nearest Service Center
              </h3>
              
              <div className="p-4 bg-gray-50 rounded-lg mb-4 border border-gray-100">
                <h4 className="font-medium text-gray-800 text-lg mb-1">{nearestCenter.name}</h4>
                <p className="text-gray-600 mb-3">{nearestCenter.address}</p>
                <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
                  <span className="bg-blue-100 rounded-full p-1">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span>{distance.toFixed(2)} km away</span>
                </div>
              </div>
              
              <button
                onClick={() => setShowPopup(false)}
                className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationFinder;