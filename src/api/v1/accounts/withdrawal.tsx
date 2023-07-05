import { ApiClient } from '@/api/index';
import { removeCookie, getCookie, setAccessToken } from '@/api/cookies';
import { authHeader } from '@/api/api_client';
import { setUsername } from '../users/current';


export const withDrawal = async () => {
    try {
        const { data } = await ApiClient.post(`api/v1/accounts/withdrawal`, authHeader);
        setAccessToken("");
        setUsername("");
        removeCookie('access_token');
        removeCookie('refresh_token');
        return data;
    } catch (error) {
        console.log(error);
    }
};

