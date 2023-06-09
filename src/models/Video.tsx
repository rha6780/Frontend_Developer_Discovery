export interface VideoState {
    id: number;
    title: string;
    user: number;
    introduction: string;
    youtube_link: string;
    thumbnail: string;
}

export interface VideoListState {
    items: VideoState[];
}

export interface VideoCreatePayload {
    title: string;
    introduction: string;
    video_link: string;
    thumbnail: string;
}
