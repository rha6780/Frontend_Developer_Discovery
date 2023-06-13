import { ApiClient } from '../../index';
import { PostState } from '../../../models/Post';

export const postList = async () => {
    try {
        const { data } = await ApiClient.get<PostState[]>(`api/v1/posts/list`);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error)
    }
};
