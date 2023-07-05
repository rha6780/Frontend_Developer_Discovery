import { ApiClient } from '../../index';
import { CommentState } from '../../../models/Comment';
import { authHeader } from '@/api/api_client';

export const commentDelete = async (id: string | string[], comment_id: string | string[]) => {
    try {
        const { status, data } = await ApiClient.delete(`api/v1/posts/${id}/comments/${comment_id}`, authHeader);
        console.log(data, status);
        return data;
    } catch (error: any) {
        console.log(error.response.code);
        return { results: [] };
    }
};
