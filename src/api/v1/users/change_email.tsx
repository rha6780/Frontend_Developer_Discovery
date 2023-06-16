import { ApiClient } from '../../index';
import { EmailChangePayload } from '../../../models/User'
import { getAuthHeaders } from '@/api/api_client';
import { refreshToken } from '../tokens/token_refresh';


export const userChangeEmail = async (emailChangePayload: EmailChangePayload) => {
    refreshToken();
    const { data } = await ApiClient.patch(`api/v1/users/email`, emailChangePayload, getAuthHeaders);
    console.log(data);
    return data;
};
