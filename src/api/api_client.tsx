import axios from 'axios';
import { getAccessToken } from './cookies';

// axios.defaults.withCredentials = true;

// TODO: stage 별로 url 등 변경할 수 있도록
export const ApiClient = axios.create({
    baseURL: "http://ec2-43-200-202-244.ap-northeast-2.compute.amazonaws.com",
    headers: {
        'content-type': 'application/json',
    },
});

export const authHeader = { headers: { "Authorization": `Bearer ${getAccessToken()}` } };
