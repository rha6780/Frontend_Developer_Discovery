import { ApiClient } from '../../index';
import { PostDetailState } from '../../../models/Post';

export const postDetail = async (id: string | string[]) => {
    try {
        const { data } = await ApiClient.get<PostDetailState>(`api/v1/posts/${id}`);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error)
    }
};
