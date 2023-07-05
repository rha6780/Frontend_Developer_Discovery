import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const setCookie = (name: string, value: string, option?: any) => {
    return cookies.set(name, value, { ...option });
}

export const getCookie = (name: string) => {
    return cookies.get(name);
}

export const removeCookie = (name: string, option?: any) => {
    return cookies.remove(name, { ...option });
}

export function getAccessToken() {
    return typeof window !== 'undefined' ? sessionStorage.getItem('access') : null;
}

export function setAccessToken(token: string) {
    sessionStorage.setItem("access", token)
}
