import { ApiClient } from '../../index';
import { UserImagePayload } from '../../../models/User'
import { refreshToken } from '../tokens/token_refresh';
import { authHeader } from '@/api/api_client';
import { getCookie } from '@/api/cookies';
import axios from 'axios';


export const updateImage = async (imagepayload: FormData, headers: any) => {
    try {
        const { data } = await ApiClient.patch<UserImagePayload>(`api/v1/users/image`, imagepayload, headers);
        return data;
    } catch {
        return undefined;
    }
};