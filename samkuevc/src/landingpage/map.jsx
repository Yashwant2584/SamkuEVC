import React, { useEffect, useRef, useState } from 'react';
import { FaInfoCircle, FaTimes, FaMapMarkerAlt, FaWalking, FaBiking, FaCar, FaLocationArrow, FaPlay } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import serviceMarker from '../images/service-center.gif';
import chargingACMarker from '../images/charge-point-AC.png';
import chargingDCMarker from '../images/charger-point-DC.png';

import serviceLocations from "../data/serviceLocations.js";
import chargingLocations from "../data/chargingLocations.js";

const ServiceLocationMap = () => {
  const mapRef = useRef(null);
  const mapObjectRef = useRef(null);
  const markersGroupRef = useRef(null);
  const routeGroupRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [locationFilter, setLocationFilter] = useState('all');
  const [chargerType, setChargerType] = useState('all');
  const [isDirectionsOpen, setIsDirectionsOpen] = useState(false);
  const [transportMode, setTransportMode] = useState('car');
  const [userLocation, setUserLocation] = useState(null);
  const [isLoadingUserLocation, setIsLoadingUserLocation] = useState(false);
  const [directionsError, setDirectionsError] = useState(null);
  const [routeData, setRouteData] = useState(null);
  const [isNavigationActive, setIsNavigationActive] = useState(false);
  const [progress, setProgress] = useState(0);

  const HERE_API_KEY = 'mMy-LDqEeHLw6WCSJT4epfRvq2rWeJ5sZrh8Q1LCAZc';

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
    const outerElement = document.createElement('div');
    const innerElement = document.createElement('img');
    
    innerElement.src = location.type === 'service'
      ? serviceMarker
      : (location.chargerType === 'ac' ? chargingACMarker : chargingDCMarker);
    
    innerElement.style.width = '40px';
    innerElement.style.height = '40px';
    
    outerElement.style.position = 'absolute';
    outerElement.style.transform = 'translate(-50%, -50%)';
    outerElement.appendChild(innerElement);
  
    const marker = new H.map.DomMarker(
      { lat: location.latitude, lng: location.longitude },
      { icon: new H.map.DomIcon(outerElement) }
    );
  
    marker.addEventListener('tap', () => {
      setSelectedLocation(location);
      setIsMobileMenuOpen(false);
      setIsDirectionsOpen(false);
      setDirectionsError(null);
      if (mapObjectRef.current) {
        const coord = { lat: location.latitude, lng: location.longitude };
        mapObjectRef.current.setCenter(coord);
        mapObjectRef.current.setZoom(16); // Increased zoom level for better focus
      }
    });
  
    return marker;
  };

  const createUserLocationMarker = () => {
    if (!userLocation) return null;
    
    const outerElement = document.createElement('div');
    outerElement.style.position = 'absolute';
    outerElement.style.transform = 'translate(-50%, -50%)';
    
    const innerElement = document.createElement('div');
    innerElement.style.width = '16px';
    innerElement.style.height = '16px';
    innerElement.style.borderRadius = '50%';
    innerElement.style.backgroundColor = '#4285F4';
    innerElement.style.border = '2px solid white';
    innerElement.style.boxShadow = '0 0 0 2px rgba(66, 133, 244, 0.3)';
    
    outerElement.appendChild(innerElement);
    
    return new H.map.DomMarker(
      { lat: userLocation.latitude, lng: userLocation.longitude },
      { icon: new H.map.DomIcon(outerElement) }
    );
  };

  const updateMapView = () => {
    if (!mapObjectRef.current || !markersGroupRef.current) return;

    mapObjectRef.current.removeObject(markersGroupRef.current);
    markersGroupRef.current = new H.map.Group();
    
    const locations = getFilteredLocations();
    const markers = locations.map(location => createMapMarker(location));
    markers.forEach(marker => markersGroupRef.current.addObject(marker));
    
    const userMarker = createUserLocationMarker();
    if (userMarker) {
      markersGroupRef.current.addObject(userMarker);
    }
    
    mapObjectRef.current.addObject(markersGroupRef.current);

    if (selectedLocation) {
      const coord = { lat: selectedLocation.latitude, lng: selectedLocation.longitude };
      mapObjectRef.current.setCenter(coord);
      mapObjectRef.current.setZoom(16);
    } else if (locations.length > 0) {
      const bounds = new H.geo.Rect(
        Math.max(...locations.map(l => l.latitude)),
        Math.min(...locations.map(l => l.longitude)),
        Math.min(...locations.map(l => l.latitude)),
        Math.max(...locations.map(l => l.longitude))
      );
      mapObjectRef.current.getViewModel().setLookAtData({ bounds });
    }
  };

  const getUserLocation = () => {
    setIsLoadingUserLocation(true);
    setDirectionsError(null);
    
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          setIsLoadingUserLocation(false);
          if (selectedLocation && isDirectionsOpen) {
            calculateDirections({ latitude, longitude }, selectedLocation);
          }
        },
        (error) => {
          console.error('Error getting user location:', error);
          setDirectionsError('Failed to get your current location. Please try again.');
          setIsLoadingUserLocation(false);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      setDirectionsError('Geolocation is not supported by your browser.');
      setIsLoadingUserLocation(false);
    }
  };

  const calculateDirections = async (startPoint, endPoint) => {
    if (!mapObjectRef.current || !startPoint || !endPoint) return;

    if (routeGroupRef.current) {
      mapObjectRef.current.removeObject(routeGroupRef.current);
    }
    routeGroupRef.current = new H.map.Group();
    mapObjectRef.current.addObject(routeGroupRef.current);

    const url = `https://router.hereapi.com/v8/routes?transportMode=${transportMode}&origin=${startPoint.latitude},${startPoint.longitude}&destination=${endPoint.latitude},${endPoint.longitude}&return=polyline,summary&apikey=${HERE_API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.routes && data.routes.length > 0) {
        const route = data.routes[0];
        setRouteData(route);

        const routeLineString = new H.geo.LineString();
        route.sections.forEach((section) => {
          const decodedPolyline = H.geo.LineString.fromFlexiblePolyline(section.polyline);
          const coordinates = decodedPolyline.getLatLngAltArray();
          for (let i = 0; i < coordinates.length; i += 3) {
            routeLineString.pushLatLngAlt(coordinates[i], coordinates[i + 1], coordinates[i + 2] || 0);
          }
        });

        const routeLine = new H.map.Polyline(routeLineString, {
          style: { lineWidth: 5, strokeColor: '#0066CC', lineTailCap: 'arrow-tail', lineHeadCap: 'arrow-head' }
        });
        routeGroupRef.current.addObject(routeLine);

        mapObjectRef.current.getViewModel().setLookAtData({
          bounds: routeGroupRef.current.getBoundingBox()
        });
      } else {
        setDirectionsError('No route found.');
      }
    } catch (error) {
      console.error('Error calculating route:', error);
      setDirectionsError('Failed to calculate route. Please try again.');
    }
  };

  const startNavigation = () => {
    setIsNavigationActive(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          updateProgress({ latitude, longitude });
        },
        (error) => {
          console.error('Error tracking location:', error);
          setDirectionsError('Failed to track location.');
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    }
  };

  const updateProgress = (currentPosition) => {
    if (!routeData || !routeData.sections.length) return;

    const start = { lat: routeData.sections[0].departure.place.location.lat, lng: routeData.sections[0].departure.place.location.lng };
    const end = { lat: routeData.sections[0].arrival.place.location.lat, lng: routeData.sections[0].arrival.place.location.lng };
    
    const totalDistance = calculateDistance(start, end);
    const distanceToEnd = calculateDistance(currentPosition, end);
    const progressPercentage = Math.max(0, Math.min(100, ((totalDistance - distanceToEnd) / totalDistance) * 100));
    setProgress(progressPercentage);

    if (progressPercentage >= 99) {
      setIsNavigationActive(false);
      setDirectionsError('You have arrived at your destination!');
    }
  };

  const calculateDistance = (point1, point2) => {
    const R = 6371e3;
    const φ1 = point1.lat * Math.PI / 180;
    const φ2 = point2.lat * Math.PI / 180;
    const Δφ = (point2.lat - point1.lat) * Math.PI / 180;
    const Δλ = (point2.lng - point1.lng) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleGetDirections = () => {
    setIsDirectionsOpen(true);
    setDirectionsError(null);
    setIsNavigationActive(false);
    setProgress(0);
    
    if (userLocation && selectedLocation) {
      calculateDirections(userLocation, selectedLocation);
    } else if (!userLocation) {
      getUserLocation();
    }
  };

  useEffect(() => {
    const initializeMap = () => {
      const platform = new H.service.Platform({
        apikey: HERE_API_KEY
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

      window.addEventListener('resize', () => map.getViewPort().resize());
      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      const ui = H.ui.UI.createDefault(map, defaultLayers);

      // Add touch event handlers for mobile
      let touchStart = null;
      let lastTouchDistance = null;

      mapRef.current.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) {
          e.preventDefault();
          touchStart = map.getCenter();
          const touch1 = e.touches[0];
          const touch2 = e.touches[1];
          lastTouchDistance = Math.hypot(
            touch1.pageX - touch2.pageX,
            touch1.pageY - touch2.pageY
          );
        }
      }, { passive: false });

      mapRef.current.addEventListener('touchmove', (e) => {
        if (e.touches.length === 2 && touchStart) {
          e.preventDefault();
          const touch1 = e.touches[0];
          const touch2 = e.touches[1];
          
          // Calculate new distance between touches
          const currentTouchDistance = Math.hypot(
            touch1.pageX - touch2.pageX,
            touch1.pageY - touch2.pageY
          );

          // Calculate zoom change
          const zoomDelta = (currentTouchDistance - lastTouchDistance) * 0.01;
          const currentZoom = map.getZoom();
          map.setZoom(Math.max(2, Math.min(20, currentZoom + zoomDelta)));

          // Calculate pan
          const dx = (touch1.pageX + touch2.pageX) / 2;
          const dy = (touch1.pageY + touch2.pageY) / 2;
          const viewPort = map.getViewPort();
          const newCenter = viewPort.screenToGeo(
            dx - viewPort.width / 2,
            dy - viewPort.height / 2
          );
          map.setCenter(newCenter);

          lastTouchDistance = currentTouchDistance;
        }
      }, { passive: false });

      mapRef.current.addEventListener('touchend', () => {
        touchStart = null;
        lastTouchDistance = null;
      });

      mapObjectRef.current = map;
      markersGroupRef.current = new H.map.Group();
      routeGroupRef.current = new H.map.Group();
      
      map.addObject(markersGroupRef.current);
      map.addObject(routeGroupRef.current);

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
  }, [locationFilter, chargerType, selectedLocation, userLocation, mapLoaded]);

  useEffect(() => {
    if (userLocation && selectedLocation && isDirectionsOpen && !isNavigationActive) {
      calculateDirections(userLocation, selectedLocation);
    }
  }, [userLocation, selectedLocation, transportMode, isDirectionsOpen]);

  return (
    <div className="relative h-[500px] md:h-[600px] w-full rounded-xl overflow-hidden shadow-2xl">
      <div ref={mapRef} className="h-full w-full touch-pan-y touch-pinch-zoom" />

      {/* Filter Selector */}
      <div className="absolute top-2 right-2 z-20 bg-white rounded-lg shadow-lg p-1 flex flex-wrap gap-1 sm:p-2 sm:gap-2 sm:top-4 sm:right-4">
        <button
          onClick={() => { setLocationFilter('all'); setSelectedLocation(null); setChargerType('all'); }}
          className={`flex items-center justify-center gap-1 px-2 py-1 rounded-md text-xs w-18 h-14 sm:w-auto sm:h-auto sm:gap-2 sm:px-1 sm:py-1 sm:text-sm ${locationFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
        >
          <span className="text-center">All Locations</span>
        </button>
        <button
          onClick={() => { setLocationFilter('service'); setSelectedLocation(null); setChargerType('all'); }}
          className={`flex items-center justify-center gap-1 px-2 py-2 rounded-md text-xs w-24 h-14 sm:w-auto sm:h-auto sm:gap-2 sm:px-1 sm:py-1 sm:text-sm ${locationFilter === 'service' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
        >
          <span className="text-center">Service Centers</span>
        </button>
        <button
          onClick={() => { setLocationFilter('charging'); setSelectedLocation(null); }}
          className={`flex items-center justify-center gap-1 px-2 py-2 rounded-md text-xs w-24 h-14 sm:w-auto sm:h-auto sm:gap-2 sm:px-1 sm:py-1 sm:text-sm ${locationFilter === 'charging' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
        >
          <span className="text-center">Charging Stations</span>
        </button>
      </div>

      {/* Charger Type Filter */}
      {locationFilter === 'charging' && (
        <div className="absolute top-20 right-4 z-20 bg-white rounded-lg shadow-lg p-2 flex gap-2">
          <button onClick={() => { setChargerType('all'); setSelectedLocation(null); }} className={`px-3 py-1 rounded-md text-sm ${chargerType === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>All</button>
          <button onClick={() => { setChargerType('ac'); setSelectedLocation(null); }} className={`px-3 py-1 rounded-md text-sm ${chargerType === 'ac' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}`}>AC</button>
          <button onClick={() => { setChargerType('dc'); setSelectedLocation(null); }} className={`px-3 py-1 rounded-md text-sm ${chargerType === 'dc' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'}`}>DC</button>
        </div>
      )}

      {/* Mobile Toggle Button */}
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden absolute top-4 left-4 z-20 bg-blue-600 text-white p-3 rounded-full shadow-lg">
        <FaMapMarkerAlt size={20} />
      </button>

      {/* Locations Panel - Desktop */}
      <div className="hidden md:block absolute top-4 left-4 z-10 bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-xs">
        <h3 className="text-white font-semibold mb-2 flex items-center">
          <FaInfoCircle className="mr-2 text-blue-400" />
          {locationFilter === 'all' ? 'All Locations' : locationFilter === 'service' ? 'Service Centers' : 'Charging Stations'}
        </h3>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {getFilteredLocations().map((location, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedLocation(location)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all ${selectedLocation === location ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-200 hover:bg-gray-700'}`}
            >
              <div className="font-semibold">{location.name}</div>
              {location.type === 'charging' && (
                <div className="text-xs mt-1">{location.power} • {location.available} available</div>
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
            className="md:hidden absolute inset-y-0 left-0 z-30 w-4/5 max-w-sm bg-white shadow-lg"
          >
            <div className="h-full flex flex-col">
              <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
                <h3 className="font-semibold">
                  {locationFilter === 'all' ? 'All Locations' : locationFilter === 'service' ? 'Service Centers' : 'Charging Stations'}
                </h3>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {getFilteredLocations().map((location, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setSelectedLocation(location); setIsMobileMenuOpen(false); }}
                    className={`block w-full text-left p-3 rounded-lg text-sm transition-all ${selectedLocation === location ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                  >
                    <h4 className="font-semibold">{location.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{location.address}</p>
                    {location.type === 'charging' && (
                      <p className="text-xs text-blue-600 mt-1">{location.power} • {location.available} available</p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selected Location Info Card */}
      {selectedLocation && mapLoaded && !isDirectionsOpen && (
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
            <button
              onClick={handleGetDirections}
              className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-2 rounded-full text-sm flex items-center justify-center gap-2"
            >
              <FaMapMarkerAlt size={12} />
              Get Directions
            </button>
          </div>
        </motion.div>
      )}

      {/* Directions Panel */}
      {selectedLocation && mapLoaded && isDirectionsOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 right-4 left-4 md:left-auto z-10 bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-xl md:max-w-sm"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-gray-900">Directions</h3>
            <button
              onClick={() => {
                setIsDirectionsOpen(false);
                setIsNavigationActive(false);
                if (routeGroupRef.current && mapObjectRef.current) {
                  mapObjectRef.current.removeObject(routeGroupRef.current);
                }
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={16} />
            </button>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 text-sm font-semibold">To: {selectedLocation.name}</p>
            <p className="text-gray-600 text-xs">{selectedLocation.address}</p>
          </div>

          {directionsError && (
            <div className="bg-red-50 text-red-600 p-3 rounded-md mb-3 text-sm">{directionsError}</div>
          )}

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button onClick={() => setTransportMode('car')} className={`p-2 rounded-md ${transportMode === 'car' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                  <FaCar size={16} />
                </button>
                <button onClick={() => setTransportMode('bike')} className={`p-2 rounded-md ${transportMode === 'bike' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                  <FaBiking size={16} />
                </button>
                <button onClick={() => setTransportMode('walk')} className={`p-2 rounded-md ${transportMode === 'walk' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                  <FaWalking size={16} />
                </button>
              </div>
              <button
                onClick={getUserLocation}
                disabled={isLoadingUserLocation}
                className={`p-2 rounded-md flex items-center gap-2 ${userLocation ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}
              >
                <FaLocationArrow size={14} />
                <span className="text-xs">{isLoadingUserLocation ? 'Locating...' : userLocation ? 'Update Location' : 'Use My Location'}</span>
              </button>
            </div>

            {userLocation && routeData && (
              <div className="text-xs text-gray-600 mt-2">
                <p>From: Your current location</p>
                <p className="mt-1">Transport mode: {transportMode.charAt(0).toUpperCase() + transportMode.slice(1)}</p>
                <p className="mt-1">Distance: {(routeData.sections[0].summary.length / 1000).toFixed(2)} km</p>
                <p className="mt-1">ETA: {new Date(routeData.sections[0].summary.duration * 1000).toISOString().substr(11, 8)}</p>
              </div>
            )}

            {userLocation && routeData && !isNavigationActive && (
              <button
                onClick={startNavigation}
                className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm flex items-center justify-center gap-2"
              >
                <FaPlay size={12} />
                Start Route
              </button>
            )}

            {isNavigationActive && (
              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="text-xs text-gray-600 mt-1">{progress.toFixed(1)}% complete</p>
              </div>
            )}

            {!userLocation && !isLoadingUserLocation && (
              <div className="bg-yellow-50 text-yellow-600 p-3 rounded-md text-sm">Please enable location services to get directions.</div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ServiceLocationMap;