import { ApiClient } from '../../index';
import { UserState, SignUpPayload } from '../../../models/User';


export const githubLogin = async (signUpPayload: SignUpPayload) => {
    try {
        const { data } = await ApiClient.get<UserState>(`accounts/signup`, {
            user: signUpPayload,
        });
        return data;
    } catch (error) {
        console.log(error)
    }
};

