// axiosClient.js
import axios from "axios";
import { parseCookies } from 'nookies';

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosClient.interceptors.request.use((req) => {
    // Attempt to get cookies in a server-side context
    const cookies = parseCookies();

    // If in client-side context, use localStorage as a fallback
    const jwt = (typeof window !== "undefined") ? localStorage.getItem('jwt') : cookies.jwt || "defaultJwt";
    const user_id = (typeof window !== "undefined") ? localStorage.getItem('user_id') : cookies.user_id || 0;
    const app_id = (typeof window !== "undefined") ? localStorage.getItem('appId') : cookies.appId || '';

    const headers = {
        'Jwt': jwt,
        'Userid': user_id,
        'Devicetype': 4,
        'Version': 1,
        'Lang': 1,
        'Content-Type': 'application/json',
        "Authorization": "Bearer 01*#NerglnwwebOI)30@I*Dm'@@",
        "Appid": app_id,
        "User-Agent": typeof window !== "undefined" ? navigator.userAgent : "Server-Side User-Agent",
    };

    req.headers = headers;

    return req;
}, (error) => Promise.reject(error));

export default axiosClient;
