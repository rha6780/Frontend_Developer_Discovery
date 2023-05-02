import { ApiClient } from '@/api/index';
import { setCookie } from '@/api/cookies';
import { EmailCheckPayload, ResetPasswordPayload } from '../../../models/User';


export const resetPassword = async (resetPasswordPayload: ResetPasswordPayload) => {
    const { data } = await ApiClient.post(`accounts/reset-password`, resetPasswordPayload);
    return data;
};

export const emailCheck = async (emailCheckPayload: EmailCheckPayload) => {
    const { data } = await ApiClient.post(`accounts/reset-password`, emailCheckPayload);
    return data;
};
