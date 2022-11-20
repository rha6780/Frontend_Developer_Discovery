import { ApiClient } from '../index';

import { AnswerState } from '../../models/Answer'

const getAnswers = async (id) => {
    try {
        const { data } = await ApiClient.get<AnswerState>(`v1/answers/${id}`);
        return data;
    } catch (error) {
        console.log(error)
    }
};

export default getAnswers;
