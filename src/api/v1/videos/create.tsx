import { ApiClient } from '../../index';

export const videoCreate = async () => {
    try {
        const { data } = await ApiClient.post(`api/v1/videos/create`);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error)
    }
};
