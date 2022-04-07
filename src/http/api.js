import axios from "axios";
import {AuthContext} from "../context/Context";

// vladComment вынести BASE_URL в .env
export const API_URL = `http://localhost:5000`
export const API_URL_Axios = `http://localhost:5000/auth/`
const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})
const api = axios.create({
    withCredentials: true,
    baseURL: API_URL_Axios,
})
$api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token && !config.url.includes('auth')) {
        config.headers.authorization = `Bearer ${token}`
    }
    return config
})
$api.interceptors.response.use((response) => {
        return response;
    },
    async (error) => {
        const code = error.response.status;
        if (code === 401) {
            try {
                const res = await api.get('refresh')
                const newToken = res.data.token;
                localStorage.setItem('token', newToken);
                error.config.headers.authorization = `Bearer ${newToken}`;
                return $api(error.config);
            } catch (e) {
                if (e.response.status === 401) {
                    localStorage.removeItem('token')
                    localStorage.removeItem('isAuth')
                    AuthContext.setIsAuth(false)
                }
            }
        }
        return Promise.reject(error)
    })
export default $api;
