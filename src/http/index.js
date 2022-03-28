import axios from "axios";
import React from "react";
import {AuthContext} from '../context/Context'

export const API_URL = `http://localhost:5000`
export const API_URL_Axios = `http://localhost:5000/auth/`

const instance = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})
const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL_Axios,
})
instance.interceptors.request.use((req) => {
    // console.log('this is request');
    const token = localStorage.getItem('token')
    if (token && !req.url.includes('auth')) {
        req.headers.authorization = `Bearer ${token}`
    }
    return req;
});

instance.interceptors.response.use((res) => {
    // console.log('this is response');
    return res;
}, async (error) => {
    const code = error.response.status;

    if (code === 401) {
        // console.log('401')
        try {
            const res = await $api.get('refresh')
            // console.log('res:', res)
            const newToken = res.data.token;
            localStorage.setItem('token', newToken);
            error.config.headers.authorization = `Bearer ${newToken}`;
            // console.log(error.config)
            return instance(error.config);
        } catch (e) {
            // console.dir('!!!!!!!!!!!!')
            if (e.response.status === 401) {
                localStorage.removeItem('token')
                localStorage.removeItem('isAuth')
                AuthContext.setIsAuth(false)
            }
        }
    }
    return Promise.reject(error)
})

export default instance;
