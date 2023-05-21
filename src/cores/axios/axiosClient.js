import axios from 'axios';

const url = 'http://localhost:2111';
// const url = 'https://backend-truelove.vercel.app';
const axiosClient = axios.create({
    withCredentials: true,
    baseURL: url + '/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:2111',
        'version': 'v.0.0.1',
    },
});

//interceptors
// Add a request interceptors
axiosClient.interceptors.request.use(
    function (config) {
        // Do something before request is send
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptors
axiosClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return {
            data: response.data,
            status: response.status,
        };
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    },
);

export default axiosClient;

