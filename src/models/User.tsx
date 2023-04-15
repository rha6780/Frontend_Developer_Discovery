export interface UserState {
    id: number;
    email: string;
    name: string;
}

export interface SignUpPayload {
    email: string;
    name: string;
    password: string;
}