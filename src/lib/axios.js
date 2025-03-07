import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://kitty-chat-backend-psi.vercel.app/api/",
    withCredentials: true
});