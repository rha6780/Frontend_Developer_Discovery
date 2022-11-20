export interface QuestionState {
    id: number;
    category: string;
    content: string;
}

export interface QuestionListState {
    items: QuestionState[];
}
