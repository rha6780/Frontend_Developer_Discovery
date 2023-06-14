import { ApiClient } from '../../index';
import { PostCreatePayload } from '../../../models/Post';
import { getCookie } from '@/api/cookies';

export const postCreate = async (postpayload: PostCreatePayload) => {
    try {
        const { data } = await ApiClient.post(`api/v1/posts/create`, postpayload,
            { headers: { authorization: `Bearer ${getCookie("access_token")}` } });
        console.log(data);
        return data;
    } catch (error) {
        console.log(error)
    }
};
