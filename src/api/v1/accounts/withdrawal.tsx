import { ApiClient } from '@/api/index';
import { removeCookie, getCookie } from '@/api/cookies';
import { UserState } from '../../../models/User';


export const withDrawal = async () => {


    const { data } = await ApiClient.post(`accounts/withdrawal`,
        { headers: { authorization: `Bearer ${getCookie("access_token")}` } });
    removeCookie('access_token');
    removeCookie('refresh_token');
    return data;
};

