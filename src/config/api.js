// API configuration for StayNest
// In production (Vercel), use Railway backend
// In development, use local proxy through Vite
const API_URL = 
  typeof window !== 'undefined' && window.location.hostname !== 'localhost'
    ? 'https://homestaypro-production.up.railway.app/api'
    : import.meta.env.VITE_API_URL || '/api';

export default API_URL;


