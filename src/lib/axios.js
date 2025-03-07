import axios from "axios";

const isDevelopment = window.location.hostname === "localhost"; // Check if running on localhost

export const axiosInstance = axios.create({
    baseURL: isDevelopment
        ? "http://localhost:5002/api/" // Local backend URL
        : "https://kitty-chat-backend-psi.vercel.app/api/", // Live backend URL
    withCredentials: true
});
