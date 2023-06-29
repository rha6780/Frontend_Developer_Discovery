export interface CommentState {
    id: number;
    content: string;
    user: string;
    created_at: Date;
}

export interface CommentListState {
    items: CommentState[];
}

export interface CommentCreatePayload {
    content: string | undefined;
}
