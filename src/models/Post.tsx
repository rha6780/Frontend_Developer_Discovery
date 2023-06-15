import { PostUser } from "./User";

export interface PostState {
    id: number;
    title: string;
    user: number;
    content: string;
    thumbnail: string;
    author: string;
    created_at: Date;
}

export interface PostListState {
    items: PostState[];
}

export interface PostCreatePayload {
    title: string;
    content: string | undefined;
    // thumbnail: null;
}

export interface PostDetailState {
    id: number;
    title: string;
    content: string;
    thumbnail: string;
    created_at: string;
    author: PostUser;
}
