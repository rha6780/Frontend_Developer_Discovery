import axios from 'axios';

import { AnswerState } from '../models/Answer'

const client = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        'content-type': 'application/json',
    },
});

const getAnswers = async () => {
    try {
        const result = await client.get<AnswerState>("/main/answer/1");
        return result.data;
    } catch (error) {
        console.log(error)
    }
};

export default getAnswers;
