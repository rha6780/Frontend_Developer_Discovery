import { ApiClient } from '../../index';
import { PostDetailState } from '../../../models/Post';

export const postLike = async (id: string | string[]) => {
    try {
        const { data } = await ApiClient.post(`api/v1/posts/like/${id}`);
        console.log('like!', data);
        return data;
    } catch (error) {
        console.log(error)
    }
};
