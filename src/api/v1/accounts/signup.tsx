import { ApiClient } from '@/api/index';
import { setCookie } from '@/api/cookies';
import { UserState, SignUpPayload } from '../../../models/User';


export const signUp = async (signUpPayload: SignUpPayload) => {
    console.log('payload:', signUpPayload);

    try {
        const { data } = await ApiClient.post<UserState>(`accounts/signup`, signUpPayload);
        setCookie('refresh_token', data.token['refresh'], { secure: true }); //httpOnly: true,
        return data;
    } catch (error) {
        console.log(error);
    }
};

