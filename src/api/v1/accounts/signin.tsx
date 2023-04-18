import { ApiClient } from '../../index';
import { UserState, SignInPayload } from '../../../models/User';


export const signIn = async (signInPayload: SignInPayload) => {
    console.log('payload:', signInPayload);

    try {
        const { data } = await ApiClient.post<UserState>(`accounts/signin`, signInPayload);
        return data;
    } catch (error) {
        console.log(error);
    }
};

