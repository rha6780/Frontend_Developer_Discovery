import { ApiClient } from '../../index';
import { getAuthHeaders } from '@/api/api_client';

export const postDelete = async (id: string | string[]) => {
    try {
        const { data } = await ApiClient.delete(`api/v1/posts/${id}`, getAuthHeaders);
        console.log(data);
        return data;
    } catch (error: any) {
        console.log(error.response.code);
    }
};
