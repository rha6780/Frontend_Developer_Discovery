import { ApiClient } from '../../index';
import { PasswordChangePayload } from '../../../models/User'
import { authHeader } from '@/api/api_client';


export const userChangePassword = async (passwordChangePayload: PasswordChangePayload) => {
    try {
        const { data } = await ApiClient.patch(`api/v1/users/password`, passwordChangePayload, authHeader);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
