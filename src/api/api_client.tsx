import axios from 'axios';
import { getAccessToken } from './cookies';

// axios.defaults.withCredentials = true;

export const ApiClient = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        'content-type': 'application/json',
    },
});

export const authHeader = { headers: { "Authorization": `Bearer ${getAccessToken()}` } };
