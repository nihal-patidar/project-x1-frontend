import axios from 'axios';

// Create an instance of axios with the base URL
const api = axios.create({
  // baseURL: "http://localhost:3000", // Replace with your backend's base URL
  baseURL: "https://project-x1-backend.onrender.com",
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can also set default headers, timeouts, etc. here
// api.defaults.timeout = 1000; // Example of setting a timeout

export default api;
