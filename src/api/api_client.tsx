import axios from 'axios';
import { getAccessToken, getCookie } from './cookies';
import { refreshToken } from './v1/tokens/token_refresh';


// TODO: stage 별로 url 등 변경할 수 있도록
// http://developerdiscovery.com
export const ApiClient = axios.create({
    baseURL: "https://developerdiscovery.com",
    headers: {
        'content-type': 'application/json',
    },
});

ApiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const {
            config,
            response: { status },
        } = error;
        if (status === 401) {
            // TODO : 메세지로 구분하기
            // if (error.response.data.message === "") {
            const originalRequest = config;
            await refreshToken();
            console.log("is_refreshed!");

            originalRequest.headers.Authorization = `Bearer ${getAccessToken()}`;
            return axios(originalRequest, authHeader);
            // }
        }
        return Promise.reject(error);
    }
);

export const authHeader = { headers: { "Authorization": `Bearer ${getAccessToken()}` } };
