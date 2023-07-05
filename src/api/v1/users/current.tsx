import { ApiClient } from '../../index';
import { UserState } from '../../../models/User'
import { refreshToken } from '../tokens/token_refresh';
import { authHeader } from '@/api/api_client';
import { getCookie } from '@/api/cookies';
import axios from 'axios';


export const userCurrent = async () => {
    if (getCookie('refresh_token')) {
        const { data } = await ApiClient.get<UserState>(`api/v1/users`, authHeader);
        setUsername(data.name);
        return data;
    } else {
        return undefined;
    }
};


export function getUsername() {
    return typeof window !== 'undefined' ? sessionStorage.getItem('username') : null;
}

export function setUsername(username: string) {
    sessionStorage.setItem("username", username);
}
