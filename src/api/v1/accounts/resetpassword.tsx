import { ApiClient } from '@/api/index';
import { setCookie } from '@/api/cookies';
import { ResetPasswordPayload } from '../../../models/User';


export const resetPassword = async (resetPasswordPayload: ResetPasswordPayload) => {
    console.log('payload:', resetPasswordPayload);

    const { data } = await ApiClient.post(`accounts/reset-password`, resetPasswordPayload);
    return data;
};

