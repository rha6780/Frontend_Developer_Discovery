import { ApiClient } from '../../index';
import { UserImagePayload, UserImageState } from '../../../models/User'
import { refreshToken } from '../tokens/token_refresh';
import { authHeader } from '@/api/api_client';
import { getCookie } from '@/api/cookies';
import axios, { AxiosRequestHeaders } from 'axios';


export const updateImage = async (imagepayload: FormData, headers: AxiosRequestHeaders) => {
    try {
        const { data } = await ApiClient.patch<UserImageState>(`api/v1/users/image`, imagepayload, { headers });
        console.log()
        return data;
    } catch {
        return undefined;
    }
};