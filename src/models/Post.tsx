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
    content: string;
    // thumbnail: null;
}
