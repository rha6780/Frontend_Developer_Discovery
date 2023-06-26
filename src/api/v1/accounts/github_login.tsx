import { ApiClient } from '../../index';
import { UserState } from '../../../models/User';


const githubLogin = async () => {
    try {
        const { data } = await ApiClient.get<UserState>(`api/v1/accounts/login/github`);
        return data;
    } catch (error) {
        console.log(error)
    }
};

export default githubLogin;