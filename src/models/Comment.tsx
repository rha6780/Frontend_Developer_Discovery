import { Author } from "./User";

export interface CommentState {
    id: number;
    content: string;
    author: Author;
    created_at: Date;
}

export interface CommentListState {
    count: string;
    items: CommentState[];
}

export interface CommentCreatePayload {
    content: string | undefined;
}
