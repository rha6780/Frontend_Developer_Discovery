import { ApiClient } from '../../index';
import { UserState } from '../../../models/User'


const userCurrent = async () => {
    try {
        const { data } = await ApiClient.get<UserState>(`api/v1/users/current`);
        return data;
    } catch (error) {
        console.log(error)
    }
};

export default userCurrent;