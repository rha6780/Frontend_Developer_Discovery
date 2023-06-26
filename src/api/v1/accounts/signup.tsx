import { ApiClient } from '@/api/index';
import { setAccessToken, setCookie } from '@/api/cookies';
import { UserState, SignUpPayload } from '../../../models/User';


export const signUp = async (signUpPayload: SignUpPayload) => {
    try {
        const { data } = await ApiClient.post<UserState>(`api/v1/accounts/signup`, signUpPayload);
        setAccessToken(data.token['access']);
        setCookie('refresh_token', data.token['refresh'], { secure: true }); // httpOnly: true,
        return data;
    } catch (error) {
        console.log(error);
    }
};

