export interface VideoState {
    id: number;
    title: string;
    user: number;
    youtube_link: string;
    thumbnail: string;
}

export interface VideoListState {
    items: VideoState[];
}