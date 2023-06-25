import { ApiClient } from '@/api/index';
import { setAccessToken, setCookie } from '@/api/cookies';
import { UserState, SignInPayload } from '../../../models/User';


export const signIn = async (signInPayload: SignInPayload) => {
    try {
        const { data } = await ApiClient.post<UserState>(`accounts/signin`, signInPayload);
        setAccessToken(data.token['access']);
        setCookie('refresh_token', data.token['refresh'], { secure: true }); //httpOnly: true, 
        return data;
    } catch (error) {
        return error;
    }
};

