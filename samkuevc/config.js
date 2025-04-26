// API Configuration
export const API_BASE_URL = "https://samkuevc.onrender.com";
export const API_VERSION = "api";

// Application endpoints
export const APPLICATION_ENDPOINTS = {
  SUBMIT_SERVICE_CENTER: `${API_BASE_URL}/${API_VERSION}/applications/service-center`,
  SUBMIT_CHARGING_STATION: `${API_BASE_URL}/${API_VERSION}/applications/charging-station`,
  SUBMIT_RECRUITMENT: `${API_BASE_URL}/${API_VERSION}/applications/recruitment`,
  SUBMIT_CONTACT_QUERY: `${API_BASE_URL}/${API_VERSION}/applications/contact-query`,
  SUBMIT_ENQUIRY: `${API_BASE_URL}/${API_VERSION}/applications/enquiry`,
  GET_ALL: `${API_BASE_URL}/${API_VERSION}/applications`,
  GET_BY_ID: (id) => `${API_BASE_URL}/${API_VERSION}/applications/${id}`,
  UPDATE_STATUS: (id) => `${API_BASE_URL}/${API_VERSION}/applications/${id}/status`,
  STATS: `${API_BASE_URL}/${API_VERSION}/applications/stats`,
};

// WebSocket for notifications
export const WEBSOCKET_ENDPOINTS = {
  NOTIFICATIONS: `ws://${API_BASE_URL.replace("http://", "")}`,
};