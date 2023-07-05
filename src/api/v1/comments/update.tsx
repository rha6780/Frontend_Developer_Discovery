import { ApiClient } from '../../index';
import { CommentCreatePayload } from '../../../models/Comment';
import { authHeader } from '@/api/api_client';

export const commentUpdate = async (id: string | string[], comment_id: string | string[], commentPayload: CommentCreatePayload) => {
    try {
        const { status, data } = await ApiClient.patch<CommentCreatePayload>(`api/v1/posts/${id}/comments/${comment_id}`, commentPayload, authHeader);
        console.log(data, status);
        return data;
    } catch (error: any) {
        console.log(error.response.code);
        return { results: [] };
    }
};
