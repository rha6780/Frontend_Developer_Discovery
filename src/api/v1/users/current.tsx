import { ApiClient } from '../../index';
import { UserState } from '../../../models/User'
import { getAuthHeaders } from '@/api/api_client';
import { refreshToken } from '../tokens/token_refresh';


export const userCurrent = async () => {
    refreshToken();
    const { data } = await ApiClient.get<UserState>(`api/v1/users/current`, getAuthHeaders);
    console.log(data);
    return data;
};
