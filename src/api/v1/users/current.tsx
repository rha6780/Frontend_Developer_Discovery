import { ApiClient } from '../../index';
import { UserState } from '../../../models/User'
import { getCookie } from '@/api/cookies';


export const userCurrent = async () => {
    const { data } = await ApiClient.get<UserState>(`api/v1/users/current`,
        { headers: { authorization: `Bearer ${getCookie("access_token")}` } });
    console.log(data);
    return data;
};
