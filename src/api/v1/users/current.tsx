import { ApiClient } from '../../index';
import { UserState } from '../../../models/User'
import { refreshToken } from '../tokens/token_refresh';
import { authHeader } from '@/api/api_client';
import { getCookie } from '@/api/cookies';
import axios from 'axios';


export const userCurrent = async () => {
    if (getCookie('refresh_token')) {
        const { data } = await ApiClient.get<UserState>(`api/v1/users/current`, authHeader);
        return data;
    } else {
        console.log('not login');
        return undefined;
    }
};
