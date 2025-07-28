import axios from 'axios';
import type {LoginCredentials, JoinCredentials} from '../types/login'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081',
});

export const login = async (credentials: LoginCredentials) => {
    try{
        const response = await axiosInstance.post('/auth/login', credentials);
        return response.data;
    } catch(error) {
        console.log("login failed : " + error);
        throw error;
    }
};

export const join = async (credentials: JoinCredentials) => {
    try {
        const response = await axiosInstance.post('/auth/signUp', credentials);
        return response.data;
    } catch(error) {
        console.log("join failed : " + error);
        throw error;
    }
};