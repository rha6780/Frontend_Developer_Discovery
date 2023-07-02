import { ApiClient } from '../../index';
import { CommentCreatePayload } from '../../../models/Comment';
import { authHeader } from '@/api/api_client';

export const commentCreate = async (commentpayload: CommentCreatePayload, id: string | string[]) => {
    try {
        const { data, status } = await ApiClient.post(`api/v1/posts/${id}/comments`, commentpayload, authHeader);
        console.log(data, status);
        return data;
    } catch (error: any) {
        console.log(error.response.code);
    }
};
