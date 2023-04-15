import { ApiClient } from '../../index';
import { VideoState } from '../../../models/Video';


export const videoList = async () => {
    try {
        const { data: response } = await ApiClient.get<VideoState>(`api/v1/videos/list`);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error)
    }
};
