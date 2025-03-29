import React, { useState, useEffect } from "react";
import {
  FaSyncAlt,
  FaEye,
  FaCheck,
  FaClipboardList,
  FaHourglassHalf,
  FaCheckCircle,
  FaExclamationCircle,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Recruitment = ({ type }) => {
  const [chargingStations, setChargingStations] = useState([]);
  const [franchises, setFranchises] = useState([]);
  const [careers, setCareers] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  // Fetch all applications
  const fetchApplications = async () => {
    setLoading(true);
    setError(null);
    try {
      const chargingResponse = await fetch('http://localhost:5000/api/admin/charging-stations');
      const chargingData = await chargingResponse.json();
      if (!chargingResponse.ok) throw new Error(chargingData.error || 'Failed to fetch charging stations');
      console.log('Charging Stations Data:', chargingData); // Debug log

      const franchiseResponse = await fetch('http://localhost:5000/api/admin/franchises');
      const franchiseData = await franchiseResponse.json();
      if (!franchiseResponse.ok) throw new Error(franchiseData.error || 'Failed to fetch franchises');
      console.log('Franchises Data:', franchiseData); // Debug log

      const careersResponse = await fetch('http://localhost:5000/api/admin/careers');
      const careersData = await careersResponse.json();
      if (!careersResponse.ok) throw new Error(careersData.error || 'Failed to fetch careers');
      console.log('Careers Data:', careersData); // Debug log

      setChargingStations(Array.isArray(chargingData) ? chargingData : []);
      setFranchises(Array.isArray(franchiseData) ? franchiseData : []);
      setCareers(Array.isArray(careersData) ? careersData : []);
    } catch (error) {
      console.error("Error fetching applications:", error);
      setError(error.message);
      setChargingStations([]);
      setFranchises([]);
      setCareers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // Application Statistics
  const applicationStats = {
    totalChargingStations: chargingStations.length,
    totalFranchises: franchises.length,
    totalCareers: careers.length,
    reviewed: [...chargingStations, ...franchises, ...careers].filter(app => app.status === 'Reviewed').length,
  };

  // Filter applications based on search term and type
  const filteredApplications = () => {
    let apps = [];
    if (type === 'chargingStations') apps = chargingStations;
    else if (type === 'franchises') apps = franchises;
    else if (type === 'careers') apps = careers;
    else return []; // Fallback for invalid type

    const filtered = apps.filter(app => 
      (type === 'careers' ? app.fullName : app.personalInfo?.fullName || '').toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(`Filtered ${type} Applications:`, filtered); // Debug log
    return filtered;
  };

  // Stats Cards
  const StatsCards = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-blue-100 p-4 rounded-lg shadow-md flex items-center"
      >
        <FaClipboardList className="text-blue-600 mr-3 text-3xl" />
        <div>
          <h3 className="text-sm font-medium text-gray-600">Charging Stations</h3>
          <p className="text-2xl font-bold text-blue-800">{applicationStats.totalChargingStations}</p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-yellow-100 p-4 rounded-lg shadow-md flex items-center"
      >
        <FaHourglassHalf className="text-yellow-600 mr-3 text-3xl" />
        <div>
          <h3 className="text-sm font-medium text-gray-600">Service Centers</h3>
          <p className="text-2xl font-bold text-yellow-800">{applicationStats.totalFranchises}</p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-green-100 p-4 rounded-lg shadow-md flex items-center"
      >
        <FaCheckCircle className="text-green-600 mr-3 text-3xl" />
        <div>
          <h3 className="text-sm font-medium text-gray-600">Careers</h3>
          <p className="text-2xl font-bold text-green-800">{applicationStats.totalCareers}</p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-purple-100 p-4 rounded-lg shadow-md flex items-center"
      >
        <FaExclamationCircle className="text-purple-600 mr-3 text-3xl" />
        <div>
          <h3 className="text-sm font-medium text-gray-600">Reviewed</h3>
          <p className="text-2xl font-bold text-purple-800">{applicationStats.reviewed}</p>
        </div>
      </motion.div>
    </div>
  );

  // Application Cards View
  const ApplicationCardsView = () => {
    const apps = filteredApplications();
    if (apps.length === 0) {
      return (
        <div className="text-center text-gray-600">
          No applications found for {type === 'chargingStations' ? 'Charging Stations' : type === 'franchises' ? 'Service Centers' : 'Careers'}.
        </div>
      );
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {apps.map((app) => (
            <motion.div
              key={app._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">
                  {type === 'careers' ? app.fullName : app.personalInfo?.fullName || 'Unnamed'}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    app.status === 'Reviewed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {app.status || 'Pending'}
                </span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Email:</strong> {type === 'careers' ? app.email : app.personalInfo?.email || 'N/A'}</p>
                <p><strong>Phone:</strong> {type === 'careers' ? app.phone : app.personalInfo?.phone || 'N/A'}</p>
                {type === 'careers' && <p><strong>Position:</strong> {app.position || 'N/A'}</p>}
                {type !== 'careers' && <p><strong>Location:</strong> {app.personalInfo?.city || 'N/A'}</p>}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => setSelectedApplication(app)}
                  className="text-blue-600 hover:text-blue-900 flex items-center"
                >
                  <FaEye className="mr-1" /> View Details
                </button>
                {app.status !== 'Reviewed' && (
                  <button
                    onClick={() => handleReviewApplication(app._id, type)}
                    className="text-green-600 hover:text-green-900 flex items-center"
                  >
                    <FaCheck className="mr-1" /> Mark Reviewed
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  };

  // Handle Mark Reviewed
  const handleReviewApplication = async (appId, appType) => {
    try {
      const endpoint = appType === 'chargingStations' 
        ? 'charging-stations' 
        : appType === 'franchises' 
        ? 'franchises' 
        : 'careers';
      const response = await fetch(`http://localhost:5000/api/admin/${endpoint}/${appId}/review`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        if (appType === 'chargingStations') {
          setChargingStations(chargingStations.map(app => 
            app._id === appId ? { ...app, status: 'Reviewed' } : app
          ));
        } else if (appType === 'franchises') {
          setFranchises(franchises.map(app => 
            app._id === appId ? { ...app, status: 'Reviewed' } : app
          ));
        } else {
          setCareers(careers.map(app => 
            app._id === appId ? { ...app, status: 'Reviewed' } : app
          ));
        }
        if (selectedApplication?._id === appId) {
          setSelectedApplication({ ...selectedApplication, status: 'Reviewed' });
        }
      }
    } catch (error) {
      console.error("Error reviewing application:", error);
    }
  };

  // Application Details Modal
  const ApplicationDetailsModal = ({ application, onClose, appType }) => {
    if (!application) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl shadow-2xl w-[800px] h-[500px] flex flex-col overflow-hidden"
        >
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">Application Details</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 transition-colors"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-6 space-y-6">
            {/* Personal Information */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Personal Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Full Name</p>
                  <p className="font-medium text-gray-800">
                    {appType === 'careers' ? application.fullName : application.personalInfo?.fullName || 'N/A'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <p className="font-medium text-gray-800">
                    {appType === 'careers' ? application.email : application.personalInfo?.email || 'N/A'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <p className="font-medium text-gray-800">
                    {appType === 'careers' ? application.phone : application.personalInfo?.phone || 'N/A'}
                  </p>
                </div>
                {appType !== 'careers' && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Address</p>
                    <p className="font-medium text-gray-800">
                      {`${application.personalInfo?.address || ''}, ${application.personalInfo?.city || ''}, ${application.personalInfo?.state || ''} - ${application.personalInfo?.pincode || ''}`}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Details */}
            {appType === 'chargingStations' && (
              <>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Business Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div><p className="text-sm text-gray-600 mb-1">Experience</p><p>{application.businessInfo?.businessExperience || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">GST Number</p><p>{application.businessInfo?.gstNumber || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">Investment Capacity</p><p>{application.businessInfo?.investmentCapacity || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">Preferred Location</p><p>{application.businessInfo?.preferredLocation || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">Property Size</p><p>{application.businessInfo?.propertySize || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">Company Name</p><p>{application.businessInfo?.companyName || 'N/A'}</p></div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Technical Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div><p className="text-sm text-gray-600 mb-1">Electrical Infrastructure</p><p>{application.technicalInfo?.electricalInfrastructure || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">Grid Connectivity</p><p>{application.technicalInfo?.gridConnectivity || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">Power Availability</p><p>{application.technicalInfo?.powerAvailability || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">Certifications</p><p>{application.technicalInfo?.certifications || 'N/A'}</p></div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Financial Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div><p className="text-sm text-gray-600 mb-1">Expected Investment</p><p>{application.financialInfo?.expectedInvestment || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">Funding Source</p><p>{application.financialInfo?.fundingSource || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">Timeline to Start</p><p>{application.financialInfo?.timelineToStart || 'N/A'}</p></div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Additional Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div><p className="text-sm text-gray-600 mb-1">Why Join Us</p><p>{application.additionalInfo?.whyJoinUs || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">Comments</p><p>{application.additionalInfo?.additionalComments || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">References</p><p>{application.additionalInfo?.references || 'N/A'}</p></div>
                  </div>
                </div>
              </>
            )}

            {appType === 'franchises' && (
              <>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Business Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div><p className="text-sm text-gray-600 mb-1">Experience</p><p>{application.businessInfo?.businessExperience || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">Company Name</p><p>{application.businessInfo?.companyName || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">GST Number</p><p>{application.businessInfo?.gstNumber || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">Investment Capacity</p><p>{application.businessInfo?.investmentCapacity || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">Preferred Location</p><p>{application.businessInfo?.preferredLocation || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">Property Size</p><p>{application.businessInfo?.propertySize || 'N/A'}</p></div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Technical Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div><p className="text-sm text-gray-600 mb-1">Technical Background</p><p>{application.technicalInfo?.technicalBackground || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">Automobile Experience</p><p>{application.technicalInfo?.automobileExperience || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">EV Knowledge</p><p>{application.technicalInfo?.evKnowledge || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">Certifications</p><p>{application.technicalInfo?.certifications || 'N/A'}</p></div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Financial Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div><p className="text-sm text-gray-600 mb-1">Expected Investment</p><p>{application.financialInfo?.expectedInvestment || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">Funding Source</p><p>{application.financialInfo?.fundingSource || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">Timeline to Start</p><p>{application.financialInfo?.timelineToStart || 'N/A'}</p></div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">Additional Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div><p className="text-sm text-gray-600 mb-1">Why Join Us</p><p>{application.additionalInfo?.whyJoinUs || 'N/A'}</p></div>
                    <div><p className="text-sm text-gray-600 mb-1">References</p><p>{application.additionalInfo?.references || 'N/A'}</p></div>
                  </div>
                </div>
              </>
            )}

            {appType === 'careers' && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Career Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div><p className="text-sm text-gray-600 mb-1">Position</p><p>{application.position || 'N/A'}</p></div>
                  <div><p className="text-sm text-gray-600 mb-1">Experience</p><p>{application.experience || 'N/A'}</p></div>
                  <div><p className="text-sm text-gray-600 mb-1">Resume</p>
                    {application.resumeUrl ? (
                      <a href={application.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Resume</a>
                    ) : 'No Resume'}
                  </div>
                </div>
              </div>
            )}

            {/* Photo */}
            {(appType === 'careers' ? application.photoUrl : application.personalInfo?.photoUrl) && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Photo</h3>
                <img
                  src={appType === 'careers' ? application.photoUrl : application.personalInfo?.photoUrl}
                  alt="Applicant"
                  className="w-32 h-32 object-cover rounded"
                />
              </div>
            )}

            {/* Status and Timeline */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Status & Timeline</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Status</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    application.status === 'Reviewed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {application.status || 'Pending'}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Created At</p>
                  <p className="font-medium text-gray-800">{new Date(application.createdAt).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border-t flex justify-end space-x-4">
            {application.status !== 'Reviewed' && (
              <button
                onClick={() => handleReviewApplication(application._id, appType)}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center"
              >
                <FaCheck className="mr-2" /> Mark Reviewed
              </button>
            )}
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {type === 'chargingStations' ? 'Charging Station Applications' :
             type === 'franchises' ? 'Service Center Applications' :
             'Careers Applications'}
          </h2>
          <button
            onClick={fetchApplications}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            disabled={loading}
          >
            <FaSyncAlt className={`mr-2 ${loading ? "animate-spin" : ""}`} />
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        {/* Stats Cards */}
        <StatsCards />

        {/* Search Filter */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <input
            type="text"
            placeholder="Search by applicant name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Loading or Error State */}
        {loading ? (
          <div className="text-center text-gray-600">Loading applications...</div>
        ) : error ? (
          <div className="text-center text-red-600">Error: {error}</div>
        ) : (
          <ApplicationCardsView />
        )}

        {/* Application Details Modal */}
        {selectedApplication && (
          <ApplicationDetailsModal
            application={selectedApplication}
            onClose={() => setSelectedApplication(null)}
            appType={type}
          />
        )}
      </div>
    </div>
  );
};

export default Recruitment;