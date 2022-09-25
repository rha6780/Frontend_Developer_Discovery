import axios from 'axios';

import { QuestionState } from '../models/Question'

const client = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        'content-type': 'application/json',
    },
});

const getQuestions = async () => {
    try {
        const result = await client.get<QuestionState>("main/question/1");
        // console.log(result.data);
        return result.data;
    } catch (error) {
        console.log(error)
    }
};

export default getQuestions;