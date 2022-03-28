import axios from "axios";


export const API_URL = `http://localhost:5000`
const token = localStorage.getItem('token')
const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Autorization = `Bearer ${token}`
    return config
})

export default $api;
