import { ApiClient } from '@/api/index';
import { removeCookie, getCookie } from '@/api/cookies';
import { authHeader } from '@/api/api_client';


export const withDrawal = async () => {
    const { data } = await ApiClient.post(`accounts/withdrawal`, authHeader);
    removeCookie('access_token');
    removeCookie('refresh_token');
    return data;
};

