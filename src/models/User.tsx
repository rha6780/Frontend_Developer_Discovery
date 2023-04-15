export interface UserState {
    id: number;
    username: string;
    name: string;
}

export interface SignUpPayload {
    username: string;
    name: string;
    password: string;
}