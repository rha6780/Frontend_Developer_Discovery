import { ApiClient } from '@/api/index';
import { setCookie } from '@/api/cookies';
import { EmailCheckPayload, ResetPasswordPayload } from '../../../models/User';


export const resetPassword = async (resetPasswordPayload: ResetPasswordPayload) => {
    try {
        const { data } = await ApiClient.post(`accounts/reset-password`, resetPasswordPayload);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const emailCheck = async (emailCheckPayload: EmailCheckPayload) => {
    try {
        const { data } = await ApiClient.post(`accounts/email-check`, emailCheckPayload);
        return data;
    } catch (error) {
        console.log(error);
    }
};
