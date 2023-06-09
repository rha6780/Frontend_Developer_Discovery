import { ApiClient } from '../../index';
import { VideoCreatePayload } from '@/models/Video';

export const videoCreate = async (videoCreatePayload: VideoCreatePayload) => {
    try {
        const { data } = await ApiClient.post(`api/v1/videos/create`);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error)
    }
};
