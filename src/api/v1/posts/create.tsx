import { ApiClient } from '../../index';
import { PostCreatePayload } from '../../../models/Post';
import { authHeader } from '@/api/api_client';

export const postCreate = async (postpayload: PostCreatePayload) => {
    try {
        const { data } = await ApiClient.post(`api/v1/posts/create`, postpayload, authHeader);
        console.log(data);
        return data;
    } catch (error: any) {
        console.log(error.response.code);
    }
};
