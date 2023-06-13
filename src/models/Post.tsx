export interface PostState {
    id: number;
    title: string;
    user: number;
    content: string;
    thumbnail: string;
}

export interface VideoListState {
    items: PostState[];
}