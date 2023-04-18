export interface UserState {
    id: number;
    username: string;
    name: string;
}

export interface SignUpPayload {
    username: string;
    name: string;
    email: string;
    password: string;
    re_password: string;
}

export interface SignInPayload {
    username: string;
    password: string;
}