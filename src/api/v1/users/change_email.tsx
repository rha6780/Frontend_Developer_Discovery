import { ApiClient } from '../../index';
import { EmailChangePayload } from '../../../models/User'
import { getCookie } from '@/api/cookies';
import { refreshToken } from '../tokens/token_refresh';


export const userChangeEmail = async (emailChangePayload: EmailChangePayload) => {
    refreshToken();
    const { data } = await ApiClient.patch(`api/v1/users/email`, emailChangePayload,
        { headers: { authorization: `Bearer ${getCookie("access_token")}` } });
    console.log(data);
    return data;
};
