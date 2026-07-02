// API configuration
// Use production URL directly in built files, fallback to dev proxy
const API_URL = 
  typeof window !== 'undefined' && window.location.hostname !== 'localhost'
    ? 'https://homestaypro-production.up.railway.app/api'
    : import.meta.env.VITE_API_URL || '/api';

export default API_URL;

