import { ApiClient } from '@/api/index';
import { removeCookie, getCookie } from '@/api/cookies';
import { UserState } from '../../../models/User';
import { getAuthHeaders } from '@/api/api_client';


export const withDrawal = async () => {
    const { data } = await ApiClient.post(`accounts/withdrawal`, getAuthHeaders);
    removeCookie('access_token');
    removeCookie('refresh_token');
    return data;
};

