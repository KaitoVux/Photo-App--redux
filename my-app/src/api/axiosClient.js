import axios from 'axios';
import firebase from 'firebase';
import queryString from "query-string";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: { 'content type': 'application/json' },
    paramsSerializer: params => queryString(params),
})

axiosClient.interceptors.request.use(async (config) => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
        const token = await currentUser.getIdToken();
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, error => Promise.reject(error));

axiosClient.interceptors.response.use(response => {
    if (response && response.data)
        return response.data;
    return response;
},
    error => Promise.reject(error)
);

export default axiosClient;