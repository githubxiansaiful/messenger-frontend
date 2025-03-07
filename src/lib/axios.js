import axios from "axios";

const isDevelopment = window.location.hostname === "localhost"; // Check if running on localhost

export const axiosInstance = axios.create({
    baseURL: isDevelopment
        ? "http://localhost:5002/api/" // Local backend URL
        : "https://kitty-chat-backend-psi.vercel.app/api/", // Live backend URL
    withCredentials: true
});

// Add an Axios interceptor to automatically attach the token from cookies to the request headers
axiosInstance.interceptors.request.use((config) => {
    // Get token from cookies
    const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('jwt='));
    if (token) {
        config.headers['Authorization'] = `Bearer ${token.split('=')[1]}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
