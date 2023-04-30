import { ApiClient } from '../../index';
import { VideoState } from '../../../models/Video';

export const videoList = async () => {
    try {
        const { data } = await ApiClient.get<VideoState[]>(`api/v1/videos/list`);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error)
    }
};
