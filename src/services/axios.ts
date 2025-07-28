import axios from 'axios';

const axiosLoanApplyInstance = axios.create({
    baseURL: 'http://localhost:8082',
    withCredentials: false, // 쿠키 쓰는 게 아니라면 false
});

axiosLoanApplyInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if(token) {
        config.headers.Authorization = 'Bearer ${token}';
    }
    return config;
},  (error) => {
    return Promise.reject(error);
});

export default axiosLoanApplyInstance;