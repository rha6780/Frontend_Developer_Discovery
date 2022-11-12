import { ApiClient } from '../api_client.tsx';

import { AnswerState } from '../../models/Answer'

const getAnswersList = async (category) => {
    try {
        const result = await ApiClient.get<AnswerState>(`v1/answers/${category}`);
        return result.data;
    } catch (error) {
        console.log(error)
    }
};

export default getAnswersList;
