import { ApiClient } from '../../index';
import { VideoCreatePayload } from '@/models/Video';
import { getCookie } from '@/api/cookies';

export const videoCreate = async (videoCreatePayload: VideoCreatePayload) => {
    try {
        const { data } = await ApiClient.post(`api/v1/videos/create`, videoCreatePayload,
            { headers: { authorization: `Bearer ${getCookie("access_token")}` } });
        console.log(data);
        return data;
    } catch (error) {
        console.log(error)
    }
};
