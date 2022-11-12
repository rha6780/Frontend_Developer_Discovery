import { ApiClient } from '../api_client.tsx';

import { AnswerState } from '../../models/Answer'

const getAnswers = async (id) => {
    try {
        const result = await ApiClient.get<AnswerState>(`v1/answers/${id}`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
};

export default getAnswers;
