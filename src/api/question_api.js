import axios from 'axios';

const client = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        'content-type': 'application/json',
    },
});

export const getQuestions = async () => await client.get("question/1")

