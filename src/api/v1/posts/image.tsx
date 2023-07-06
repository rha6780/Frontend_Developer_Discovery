import { ApiClient } from '../../index';
import { UserImagePayload, UserImageState } from '../../../models/User'
import { refreshToken } from '../tokens/token_refresh';
import { authHeader } from '@/api/api_client';
import { getCookie } from '@/api/cookies';
import axios, { AxiosRequestHeaders } from 'axios';


export const updatePostImage = async (imagepayload: FormData, headers: AxiosRequestHeaders) => {
    try {
        const { data } = await ApiClient.patch<UserImageState>(`api/v1/posts/image`, imagepayload, { headers });
        return data;
    } catch {
        return { image: '/user_icon.png' };
    }
};