import { setAccessToken, removeCookie, getCookie } from '@/api/cookies';
import { setUsername } from '@/api/v1/users/current';


export const signOut = async () => {
    try {
        // const { data } = await ApiClient.post<UserState>(`accounts/signin`, signInPayload);
        setAccessToken("");
        setUsername("");
        removeCookie('refresh_token', { path: '/' });
    } catch (error) {
        console.log(error);
    }
};
