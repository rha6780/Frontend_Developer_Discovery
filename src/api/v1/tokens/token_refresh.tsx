import { ApiClient } from '@/api/index';
import { getCookie, setAccessToken } from '@/api/cookies';


export const refreshToken = async () => {
    try {
        const { data } = await ApiClient.post(`api/v1/tokens/refresh`, { "refresh": getCookie('refresh_token') });
        setAccessToken(data['access']);
        return data;
    } catch (error) {
        console.log(error);
    }
};

