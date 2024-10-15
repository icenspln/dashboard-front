import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: "https://siradj-backend-production.up.railway.app:443/api",
    //baseURL: "http://localhost:4000/api",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
    },
});
