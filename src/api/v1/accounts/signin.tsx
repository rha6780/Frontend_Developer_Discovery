import { ApiClient } from '@/api/index';
import { setCookie } from '@/api/cookies';
import { UserState, SignInPayload } from '../../../models/User';


export const signIn = async (signInPayload: SignInPayload) => {
    console.log('payload:', signInPayload);

    const { data } = await ApiClient.post<UserState>(`accounts/signin`, signInPayload);
    setCookie('refresh_token', data.token['refresh'], { secure: true }); //httpOnly: true,
    return data;
};

