export interface UserState {
    id: number;
    email: string;
    name: string;
}

export interface EmailChangePayload {
    changed_email: string;
}

export interface PasswordChangePayload {
    changed_password: string;
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

export interface EmailCheckPayload {
    email: string;
}

export interface ResetPasswordPayload {
    password: string;
    token: any;
}

export interface Author {
    id: number;
    name: string;
}
