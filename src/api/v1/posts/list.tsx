import { ApiClient } from '../../index';
import { PostState } from '../../../models/Post';

export const postList = async (page: number) => {
    try {
        const { status, data } = await ApiClient.get<PostState[]>(`api/v1/posts/list`, { params: { page: page } });
        console.log(data, status);
        return data;
    } catch (error: any) {
        console.log(error.response.code);
        return { results: [] };
    }
};
