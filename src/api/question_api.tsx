import axios from 'axios';

import { Question } from '../models/Question.tsx'

const client = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        'content-type': 'application/json',
    },
});

export const getQuestions = async () => {
    const { data } = await client.get<Question[]>("question/1");

    return data;
};

