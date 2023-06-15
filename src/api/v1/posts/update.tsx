import { ApiClient } from '../../index';
import { PostCreatePayload } from '../../../models/Post';
import { getCookie } from '@/api/cookies';

export const postUpdate = async (id: string | string[], postPaylod: PostCreatePayload) => {
    try {
        const { data } = await ApiClient.patch(`api/v1/posts/${id}`, postPaylod,
            { headers: { authorization: `Bearer ${getCookie("access_token")}` } });
        console.log(data);
        return data;
    } catch (error: any) {
        console.log(error.response.code);
    }
};
