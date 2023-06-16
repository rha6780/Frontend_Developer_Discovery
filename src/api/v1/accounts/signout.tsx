import { setAccessToken, removeCookie } from '@/api/cookies';


export const signOut = async () => {
    try {
        // const { data } = await ApiClient.post<UserState>(`accounts/signin`, signInPayload);
        setAccessToken("");
        removeCookie('refresh_token');
        removeCookie('access_token');
        console.log('signout!');
    } catch (error) {
        console.log(error);
    }
};
