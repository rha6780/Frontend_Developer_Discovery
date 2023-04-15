import { ApiClient } from '../../index';
import { UserState, SignUpPayload } from '../../../models/User';


export const signUp = async (signUpPayload: SignUpPayload) => {
    console.log('payload:', signUpPayload);

    try {
        const { data } = await ApiClient.post<UserState>(`accounts/signup`, signUpPayload);
        return data;
    } catch (error) {
        console.log(error);
    }
};

