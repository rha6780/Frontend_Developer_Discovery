import { ApiClient } from '../../index';
import { PostCreatePayload } from '../../../models/Post';
import { getAuthHeaders } from '@/api/api_client';

export const postUpdate = async (id: string | string[], postPaylod: PostCreatePayload) => {
    try {
        const { data } = await ApiClient.patch(`api/v1/posts/${id}`, postPaylod, getAuthHeaders);
        console.log(data);
        return data;
    } catch (error: any) {
        console.log(error.response.code);
    }
};
