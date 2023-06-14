import { ApiClient } from '@/api/index';
import { getCookie, setCookie } from '@/api/cookies';


export const refreshToken = async () => {
    const { data } = await ApiClient.post(`api/v1/tokens/refresh`, { "refresh": getCookie('refresh_token') });
    setCookie('access_token', data['access'], { secure: true }); // httpOnly: true 
    return data;
};

