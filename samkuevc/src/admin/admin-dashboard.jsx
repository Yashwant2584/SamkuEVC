import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('careers');
  const [data, setData] = useState({
    careers: [],
    franchises: [],
    chargingStations: [],
    enquiries: [],
    contacts: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedApplication, setSelectedApplication] = useState(null);

  // Define the API base URL - adjust based on your backend location
  // Update this to match your backend server URL
  const API_BASE_URL = 'http://localhost:5000'; // Change this to your actual backend URL

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch the data sequentially to avoid breaking if some endpoints are missing
      const dataMap = {
        careers: [],
        franchises: [],
        chargingStations: [],
        enquiries: [],
        contacts: []
      };

      try {
        console.log('Fetching careers data...');
        const careersRes = await axios.get(`${API_BASE_URL}/api/admin/careers`);
        console.log('Careers data:', careersRes.data);
        dataMap.careers = careersRes.data || [];
      } catch (error) {
        console.error('Could not fetch careers data:', error.response || error.message);
      }

      try {
        console.log('Fetching franchises data...');
        const franchisesRes = await axios.get(`${API_BASE_URL}/api/admin/franchises`);
        console.log('Franchises data:', franchisesRes.data);
        dataMap.franchises = franchisesRes.data || [];
      } catch (franchiseError) {
        console.error('Could not fetch franchises data, trying service-centers:', franchiseError.response || franchiseError.message);
        
        // If franchises fails, try service-centers as an alternative
        try {
          const serviceCentersRes = await axios.get(`${API_BASE_URL}/api/admin/service-centers`);
          console.log('Service centers data:', serviceCentersRes.data);
          dataMap.franchises = serviceCentersRes.data || [];
        } catch (scError) {
          console.error('Could not fetch service-centers data either:', scError.response || scError.message);
        }
      }

      try {
        console.log('Fetching charging stations data...');
        const chargingRes = await axios.get(`${API_BASE_URL}/api/admin/charging-stations`);
        console.log('Charging stations data:', chargingRes.data);
        dataMap.chargingStations = chargingRes.data || [];
      } catch (error) {
        console.error('Could not fetch charging-stations data:', error.response || error.message);
      }

      try {
        console.log('Fetching enquiries data...');
        const enquiriesRes = await axios.get(`${API_BASE_URL}/api/admin/enquiries`);
        console.log('Enquiries data:', enquiriesRes.data);
        dataMap.enquiries = enquiriesRes.data || [];
      } catch (error) {
        console.error('Could not fetch enquiries data:', error.response || error.message);
      }

      try {
        console.log('Fetching contacts data...');
        const contactsRes = await axios.get(`${API_BASE_URL}/api/admin/contacts`);
        console.log('Contacts data:', contactsRes.data);
        dataMap.contacts = contactsRes.data || [];
      } catch (error) {
        console.error('Could not fetch contacts data:', error.response || error.message);
      }

      // Ensure all data arrays are properly initialized
      Object.keys(dataMap).forEach(key => {
        if (!Array.isArray(dataMap[key])) {
          dataMap[key] = [];
        }
      });

      console.log('Final data map:', dataMap);
      
      // Update the state with whatever data we could fetch
      setData(dataMap);
      
      // If all sections are empty, display error message
      const totalItems = Object.values(dataMap).reduce((sum, arr) => sum + arr.length, 0);
      if (totalItems === 0) {
        setError('No data could be retrieved from the server. Please check your backend configuration and network connection.');
      }
      
    } catch (error) {
      console.error('Error in fetch operation:', error);
      setError('Failed to fetch data. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, section, status) => {
    try {
      console.log(`Updating ${section} item ${id} to status: ${status}`);
      
      // Mapping of frontend sections to backend API endpoints
      const sectionToEndpoint = {
        careers: 'careers',
        franchises: 'franchises', // Try the same name first
        chargingStations: 'charging-stations',
        enquiries: 'enquiries',
        contacts: 'contacts'
      };

      // Try updating with the mapped endpoint
      try {
        const response = await axios.put(
          `${API_BASE_URL}/api/admin/${sectionToEndpoint[section]}/${id}`, 
          { status },
          { headers: { 'Content-Type': 'application/json' } }
        );
        console.log('Update response:', response.data);
      } catch (err) {
        console.error('Error in first update attempt:', err.response || err.message);
        
        // If franchises fails, try service-centers
        if (section === 'franchises') {
          const response = await axios.put(
            `${API_BASE_URL}/api/admin/service-centers/${id}`, 
            { status },
            { headers: { 'Content-Type': 'application/json' } }
          );
          console.log('Update response (service-centers):', response.data);
        } else {
          throw err;
        }
      }
      
      // Refresh data after successful update
      fetchAllData();
    } catch (error) {
      console.error('Error updating status:', error.response || error.message);
      alert(`Failed to update status: ${error.response?.data?.error || error.message}`);
    }
  };

  const sidebarItems = [
    { id: 'careers', label: 'Careers', count: Array.isArray(data.careers) ? data.careers.length : 0 },
    { id: 'franchises', label: 'Franchises', count: Array.isArray(data.franchises) ? data.franchises.length : 0 },
    { id: 'chargingStations', label: 'Charging Stations', count: Array.isArray(data.chargingStations) ? data.chargingStations.length : 0 },
    { id: 'enquiries', label: 'Enquiries', count: Array.isArray(data.enquiries) ? data.enquiries.length : 0 },
    { id: 'contacts', label: 'Contacts', count: Array.isArray(data.contacts) ? data.contacts.length : 0 },
  ];

  const getFormattedDate = (dateString) => {
    if (!dateString) return 'N/A';
    
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString; // Return original if invalid date
      return date.toLocaleString();
    } catch (error) {
      console.error('Error formatting date:', error);
      return dateString;
    }
  };

  const getSafeValue = (obj, path, defaultValue = 'N/A') => {
    if (!obj) return defaultValue;
    
    try {
      const parts = path.split('.');
      let value = obj;
      
      for (const part of parts) {
        value = value?.[part];
        if (value === undefined || value === null) return defaultValue;
      }
      
      return value;
    } catch (error) {
      console.error(`Error getting value at path ${path}:`, error);
      return defaultValue;
    }
  };

  const renderCardContent = (item, section) => {
    if (!item) return null;
    
    switch (section) {
      case 'careers':
        return (
          <>
            <p><strong>Name:</strong> {getSafeValue(item, 'fullName')}</p>
            <p><strong>Email:</strong> {getSafeValue(item, 'email')}</p>
            <p><strong>Phone:</strong> {getSafeValue(item, 'phone')}</p>
            <p><strong>Position:</strong> {getSafeValue(item, 'position')}</p>
            <p><strong>Status:</strong> <span className={getStatusClass(getSafeValue(item, 'status'))}>{getSafeValue(item, 'status')}</span></p>
            <p><strong>Applied:</strong> {getFormattedDate(getSafeValue(item, 'createdAt'))}</p>
          </>
        );
      case 'franchises':
      case 'chargingStations':
        return (
          <>
            <p><strong>Name:</strong> {getSafeValue(item, 'personalInfo.fullName')}</p>
            <p><strong>Email:</strong> {getSafeValue(item, 'personalInfo.email')}</p>
            <p><strong>Phone:</strong> {getSafeValue(item, 'personalInfo.phone')}</p>
            <p><strong>Location:</strong> {getSafeValue(item, 'businessInfo.preferredLocation')}</p>
            <p><strong>Status:</strong> <span className={getStatusClass(getSafeValue(item, 'status'))}>{getSafeValue(item, 'status')}</span></p>
            <p><strong>Applied:</strong> {getFormattedDate(getSafeValue(item, 'createdAt'))}</p>
          </>
        );
      case 'enquiries':
        return (
          <>
            <p><strong>Name:</strong> {getSafeValue(item, 'name')}</p>
            <p><strong>Email:</strong> {getSafeValue(item, 'email')}</p>
            {getSafeValue(item, 'phone') !== 'N/A' && <p><strong>Phone:</strong> {getSafeValue(item, 'phone')}</p>}
            {getSafeValue(item, 'product') !== 'N/A' && <p><strong>Product:</strong> {getSafeValue(item, 'product')}</p>}
            <p><strong>Status:</strong> <span className={getStatusClass(getSafeValue(item, 'status'))}>{getSafeValue(item, 'status')}</span></p>
            <p><strong>Date:</strong> {getFormattedDate(getSafeValue(item, 'createdAt'))}</p>
          </>
        );
      case 'contacts':
        return (
          <>
            <p><strong>Name:</strong> {getSafeValue(item, 'name')}</p>
            <p><strong>Email:</strong> {getSafeValue(item, 'email')}</p>
            {getSafeValue(item, 'subject') !== 'N/A' && <p><strong>Subject:</strong> {getSafeValue(item, 'subject')}</p>}
            <p><strong>Status:</strong> <span className={getStatusClass(getSafeValue(item, 'status'))}>{getSafeValue(item, 'status')}</span></p>
            <p><strong>Date:</strong> {getFormattedDate(getSafeValue(item, 'createdAt'))}</p>
          </>
        );
      default:
        return null;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Accepted':
        return 'text-green-600 font-semibold';
      case 'Rejected':
        return 'text-red-600 font-semibold';
      default:
        return 'text-yellow-600 font-semibold';
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto"></div>
          <p className="mt-4 text-lg">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Data</h2>
          <p className="mb-4">{error}</p>
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={fetchAllData}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <ul>
          {sidebarItems.map(item => (
            <li
              key={item.id}
              className={`mb-4 p-2 rounded cursor-pointer ${activeSection === item.id ? 'bg-blue-700' : 'hover:bg-blue-800'}`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label} ({item.count})
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {sidebarItems.map(item => (
            <div 
              key={item.id} 
              className={`bg-white p-4 rounded-lg shadow cursor-pointer transition-all duration-200 ${activeSection === item.id ? 'ring-2 ring-blue-500' : 'hover:shadow-md'}`}
              onClick={() => setActiveSection(item.id)}
            >
              <h3 className="text-lg font-semibold">{item.label}</h3>
              <p className="text-2xl">{item.count}</p>
            </div>
          ))}
        </div>

        {/* Applications List */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4 capitalize">
            {activeSection === 'chargingStations' ? 'Charging Stations' : activeSection} Applications
          </h2>
          
          {!data[activeSection] || data[activeSection].length === 0 ? (
            <div className="text-center p-8 text-gray-500">
              <p>No {activeSection} applications found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.isArray(data[activeSection]) && data[activeSection].map(item => (
                <div key={item._id} className="border rounded-lg p-4 hover:shadow-lg transition">
                  {renderCardContent(item, activeSection)}
                  <div className="mt-4 flex justify-between">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      onClick={() => setSelectedApplication(item)}
                    >
                      View Details
                    </button>
                    <div className="space-x-2">
                      {getSafeValue(item, 'status') !== 'Accepted' && (
                        <button
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                          onClick={() => handleStatusUpdate(item._id, activeSection, 'Accepted')}
                        >
                          Accept
                        </button>
                      )}
                      {getSafeValue(item, 'status') !== 'Rejected' && (
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          onClick={() => handleStatusUpdate(item._id, activeSection, 'Rejected')}
                        >
                          Reject
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal for Details */}
        {selectedApplication && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Application Details</h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setSelectedApplication(null)}
                >
                  ✕
                </button>
              </div>
              <pre className="bg-gray-100 p-4 rounded overflow-auto">
                {JSON.stringify(selectedApplication, null, 2)}
              </pre>
              <div className="mt-4 flex justify-between">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={() => setSelectedApplication(null)}
                >
                  Close
                </button>
                <div className="space-x-2">
                  {getSafeValue(selectedApplication, 'status') !== 'Accepted' && (
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      onClick={() => {
                        handleStatusUpdate(selectedApplication._id, activeSection, 'Accepted');
                        setSelectedApplication(null);
                      }}
                    >
                      Accept
                    </button>
                  )}
                  {getSafeValue(selectedApplication, 'status') !== 'Rejected' && (
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      onClick={() => {
                        handleStatusUpdate(selectedApplication._id, activeSection, 'Rejected');
                        setSelectedApplication(null);
                      }}
                    >
                      Reject
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;