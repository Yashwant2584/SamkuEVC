import React, { useEffect, useRef, useState } from 'react';
import { FaInfoCircle, FaTimes, FaMapMarkerAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Import marker images (ensure these are in your public/assets folder or adjust the path)
import serviceMarker from '../../images/service-center.gif';
import chargingACMarker from '../../images/charge-point-AC.png';
import chargingDCMarker from '../../images/charger-point-DC.png';

import serviceLocations from "../../data/serviceLocations.js"; //data for service center
import chargingLocations from "../../data/chargingLocations.js"; //data for charging point

const ServiceLocationMap = () => {
  const mapRef = useRef(null);
  const mapObjectRef = useRef(null);
  const markersGroupRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [locationFilter, setLocationFilter] = useState('all');
  const [chargerType, setChargerType] = useState('all');


  

  const getFilteredLocations = () => {
    let locations = [];
    
    if (locationFilter === 'all') {
      locations = [...serviceLocations, ...chargingLocations];
    } else if (locationFilter === 'service') {
      locations = serviceLocations;
    } else if (locationFilter === 'charging') {
      locations = chargerType === 'all' 
        ? chargingLocations 
        : chargingLocations.filter(location => location.chargerType === chargerType);
    }
  
    return locations;
  };

  const createMapMarker = (location) => {
    // Create an HTML element for the animated GIF
    const outerElement = document.createElement('div');
    const innerElement = document.createElement('img');
    
    // Set the GIF source based on location type
    innerElement.src = location.type === 'service' 
      ? serviceMarker 
      : (location.chargerType === 'ac' ? chargingACMarker : chargingDCMarker);
    
    // Style the GIF (adjust size here)
    innerElement.style.width = '40px';  // Increase size as desired
    innerElement.style.height = '40px'; // Increase size as desired
    
    // Center the marker properly (offset by half the size)
    outerElement.style.position = 'absolute';
    outerElement.style.transform = 'translate(-50%, -50%)';
    outerElement.appendChild(innerElement);
  
    // Create a DomMarker instead of a regular Marker
    const marker = new H.map.DomMarker(
      { lat: location.latitude, lng: location.longitude },
      { icon: new H.map.DomIcon(outerElement) }
    );
  
    // Add tap event listener
    marker.addEventListener('tap', () => {
      setSelectedLocation(location);
      setIsMobileMenuOpen(false);
      
      if (mapObjectRef.current) {
        mapObjectRef.current.setCenter(
          { lat: location.latitude, lng: location.longitude },
          true
        );
        mapObjectRef.current.setZoom(15, true);
      }
    });
  
    return marker;
  };

  const updateMapView = () => {
    if (!mapObjectRef.current || !markersGroupRef.current) return;

    mapObjectRef.current.removeObject(markersGroupRef.current);
    const locations = getFilteredLocations();
    const markers = locations.map(location => createMapMarker(location));
    markersGroupRef.current = new H.map.Group();
    markers.forEach(marker => markersGroupRef.current.addObject(marker));
    mapObjectRef.current.addObject(markersGroupRef.current);

    if (selectedLocation) {
      mapObjectRef.current.setCenter(
        { lat: selectedLocation.latitude, lng: selectedLocation.longitude },
        true
      );
      mapObjectRef.current.setZoom(15, true);
    } else if (locations.length > 0) {
      const avgLat = locations.reduce((sum, loc) => sum + loc.latitude, 0) / locations.length;
      const avgLng = locations.reduce((sum, loc) => sum + loc.longitude, 0) / locations.length;
      mapObjectRef.current.setCenter(
        { lat: avgLat, lng: avgLng },
        true
      );
      mapObjectRef.current.setZoom(12, true);
      mapObjectRef.current.getViewModel().setLookAtData({
        bounds: markersGroupRef.current.getBoundingBox()
      });
    }
  };

  useEffect(() => {
    const initializeMap = () => {
      const platform = new H.service.Platform({
        apikey: 'EfxdvZ9U60F-lMMJ5nN5mTmsgXA3khiC3W1vB8a_2-0' // Replace with your actual HERE API key
      });

      const defaultLayers = platform.createDefaultLayers();
      const map = new H.Map(
        mapRef.current,
        defaultLayers.vector.normal.map,
        {
          center: { lat: 18.620101, lng: 73.878708 },
          zoom: 12,
          pixelRatio: window.devicePixelRatio || 1
        }
      );

      const resizeListener = () => {
        if (map && map.getViewPort()) {
          map.getViewPort().resize();
        }
      };

      
      window.addEventListener('resize', () => map.getViewPort().resize());
      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      const ui = H.ui.UI.createDefault(map, defaultLayers);

      mapObjectRef.current = map;
      markersGroupRef.current = new H.map.Group();
      map.addObject(markersGroupRef.current);

      updateMapView();
      setMapLoaded(true);
    };

    const loadMapScripts = () => {
      const scripts = [
        'https://js.api.here.com/v3/3.1/mapsjs-core.js',
        'https://js.api.here.com/v3/3.1/mapsjs-service.js',
        'https://js.api.here.com/v3/3.1/mapsjs-ui.js',
        'https://js.api.here.com/v3/3.1/mapsjs-mapevents.js'
      ];

      const loadScript = (src) => {
        return new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = src;
          script.async = true;
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      };

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = 'https://js.api.here.com/v3/3.1/mapsjs-ui.css';
      document.head.appendChild(link);

      scripts.reduce((promise, script) => {
        return promise.then(() => loadScript(script));
      }, Promise.resolve())
        .then(() => initializeMap())
        .catch(error => console.error('Error loading HERE Maps scripts:', error));
    };

    loadMapScripts();

    return () => {
      if (mapObjectRef.current) {
        mapObjectRef.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (mapLoaded) {
      updateMapView();
    }
  }, [locationFilter, chargerType, selectedLocation, mapLoaded]);

  return (
    <div className="relative h-[500px] md:h-[600px] w-full rounded-xl overflow-hidden shadow-2xl">
      <div ref={mapRef} className="h-full w-full" />

{/* Filter Selector */}
<div className="absolute top-2 right-2 z-20 bg-white rounded-lg shadow-lg p-1 flex flex-wrap gap-1 sm:p-2 sm:gap-2 sm:top-4 sm:right-4">
  <button
    onClick={() => {
      setLocationFilter('all');
      setSelectedLocation(null);
      setChargerType('all');
    }}
    className={`flex items-center justify-center gap-1 px-2 py-1 rounded-md text-xs w-18 h-14 sm:w-auto sm:h-auto sm:gap-2 sm:px-1 sm:py-1 sm:text-sm ${
      locationFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
    }`}
  >
    <span className="text-center">All Locations</span>
  </button>
  <button
    onClick={() => {
      setLocationFilter('service');
      setSelectedLocation(null);
      setChargerType('all');
    }}
    className={`flex items-center justify-center gap-1 px-2 py-2 rounded-md text-xs w-24 h-14 sm:w-auto sm:h-auto sm:gap-2 sm:px-1 sm:py-1 sm:text-sm ${
      locationFilter === 'service' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
    }`}
  >
    <span className="text-center">Service Centers</span>
  </button>
  <button
    onClick={() => {
      setLocationFilter('charging');
      setSelectedLocation(null);
    }}
    className={`flex items-center justify-center gap-1 px-2 py-2 rounded-md text-xs w-24 h-14 sm:w-auto sm:h-auto sm:gap-2 sm:px-1 sm:py-1 sm:text-sm ${
      locationFilter === 'charging' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
    }`}
  >
    <span className="text-center">Charging Stations</span>
  </button>
</div>

      {/* Charger Type Filter */}
      {locationFilter === 'charging' && (
        <div className="absolute top-20 right-4 z-20 bg-white rounded-lg shadow-lg p-2 flex gap-2">
          <button
            onClick={() => {
              setChargerType('all');
              setSelectedLocation(null);
            }}
            className={`px-3 py-1 rounded-md text-sm ${
              chargerType === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => {
              setChargerType('ac');
              setSelectedLocation(null);
            }}
            className={`px-3 py-1 rounded-md text-sm ${
              chargerType === 'ac' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            AC
          </button>
          <button
            onClick={() => {
              setChargerType('dc');
              setSelectedLocation(null);
            }}
            className={`px-3 py-1 rounded-md text-sm ${
              chargerType === 'dc' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            DC
          </button>
        </div>
      )}

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden absolute top-4 left-4 z-20 bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        <FaMapMarkerAlt size={20} />
      </button>

      {/* Locations Panel - Desktop */}
      <div className="hidden md:block absolute top-4 left-4 z-10 bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-xs">
        <h3 className="text-white font-semibold mb-2 flex items-center">
          <FaInfoCircle className="mr-2 text-blue-400" />
          {locationFilter === 'all' ? 'All Locations' : 
           locationFilter === 'service' ? 'Service Centers' : 'Charging Stations'}
        </h3>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {getFilteredLocations().map((location, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedLocation(location);
              }}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all ${
                selectedLocation === location
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
              }`}
            >
              <div className="font-semibold">{location.name}</div>
              {location.type === 'charging' && (
                <div className="text-xs mt-1">
                  {location.power} • {location.available} available
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Locations Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween' }}
            className="md:hidden absolute inset-y-0 left-0 z-10 w-4/5 max-w-sm bg-white shadow-lg"
          >
            <div className="h-full flex flex-col">
              <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
                <h3 className="font-semibold">
                  {locationFilter === 'all' ? 'All Locations' : 
                   locationFilter === 'service' ? 'Service Centers' : 'Charging Stations'}
                </h3>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {getFilteredLocations().map((location, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedLocation(location);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left p-3 rounded-lg text-sm transition-all ${
                      selectedLocation === location
                        ? 'bg-blue-50 text-blue-600 border border-blue-200'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <h4 className="font-semibold">{location.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{location.address}</p>
                    {location.type === 'charging' && (
                      <p className="text-xs text-blue-600 mt-1">
                        {location.power} • {location.available} available
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selected Location Info Card */}
      {selectedLocation && mapLoaded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 right-4 left-4 md:left-auto z-10 bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-xl md:max-w-sm"
        >
          <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-900">{selectedLocation.name}</h3>
          <p className="text-gray-700 text-sm md:text-base mb-2">{selectedLocation.address}</p>
          <p className="text-sm text-gray-600 mb-3">{selectedLocation.description}</p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <div className="text-sm">
              <p className="font-semibold text-blue-600">{selectedLocation.hours}</p>
              {selectedLocation.type === 'service' ? (
                <p className="text-gray-500">{selectedLocation.phone}</p>
              ) : (
                <div>
                  <p className="text-green-600">{selectedLocation.available} charging points available</p>
                  <p className="text-gray-500">{selectedLocation.power}</p>
                </div>
              )}
            </div>
            <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-2 rounded-full text-sm">
              {selectedLocation.type === 'service' ? 'Book Service' : 'Start Charging'}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ServiceLocationMap;