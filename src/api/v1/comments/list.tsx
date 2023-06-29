import { ApiClient } from '../../index';
import { CommentState } from '../../../models/Comment';

export const commentList = async (page: number, id: string | string[]) => {
    try {
        const { status, data } = await ApiClient.get<CommentState[]>(`api/v1/posts/${id}/comments/list`, { params: { page: page } });
        console.log(data, status);
        return data;
    } catch (error: any) {
        console.log(error.response.code);
        return { results: [] };
    }
};
