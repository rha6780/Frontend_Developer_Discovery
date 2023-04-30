export interface UserState {
    id: number;
    email: string;
    name: string;
}

export interface SignUpPayload {
    email: string;
    name: string;
    password: string;
    re_password: string;
}

export interface SignInPayload {
    email: string;
    password: string;
}

export interface ResetPasswordPayload {
    email: string;
    password: string;
}
