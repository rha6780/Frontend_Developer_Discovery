import { ApiClient } from '../index';

import { QuestionState } from '../../models/Question'

const getQuestions = async (id) => {
    try {
        const { data } = await ApiClient.get<QuestionState>(`v1/questions/${id}`);
        return data;
    } catch (error) {
        console.log(error)
    }
};

export default getQuestions;
