import { ApiClient } from '../../index';
import { UserState } from '../../../models/User'
import { getCookie } from '@/api/cookies';
import { refreshToken } from '../tokens/token_refresh';


export const userCurrent = async () => {
    refreshToken();
    const { data } = await ApiClient.get<UserState>(`api/v1/users/current`,
        { headers: { authorization: `Bearer ${getCookie("access_token")}` } });
    console.log(data);
    return data;
};
