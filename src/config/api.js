// API configuration for StayNest
// In production (Vercel), use Render backend
// In development, use local proxy through Vite
const API_URL =
  typeof window !== 'undefined' && window.location.hostname !== 'localhost'
    ? 'https://homestay-pro.onrender.com/api'
    : '/api';

export default API_URL;



