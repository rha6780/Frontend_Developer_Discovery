import { ApiClient } from '../../index';
import { EmailChangePayload } from '../../../models/User'
import { refreshToken } from '../tokens/token_refresh';
import { authHeader } from '@/api/api_client';


export const userChangeEmail = async (emailChangePayload: EmailChangePayload) => {
    try {
        refreshToken();
        const { data } = await ApiClient.patch(`api/v1/users/email`, emailChangePayload, authHeader);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
