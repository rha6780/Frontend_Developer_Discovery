import { ApiClient } from '../../index';
import { UserState } from '../../../models/User'
import { refreshToken } from '../tokens/token_refresh';
import { authHeader } from '@/api/api_client';


export const userCurrent = async () => {
    refreshToken();
    const { data } = await ApiClient.get<UserState>(`api/v1/users/current`, authHeader);
    return data;
};
