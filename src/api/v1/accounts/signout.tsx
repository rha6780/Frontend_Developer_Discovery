import { removeCookie } from '@/api/cookies';


export const signOut = async () => {
    try {
        removeCookie('refresh_token');
        removeCookie('access_token');
    } catch (error) {
        console.log(error);
    }
};
