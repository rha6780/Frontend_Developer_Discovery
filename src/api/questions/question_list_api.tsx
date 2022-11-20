import { ApiClient } from '../index';

import { QuestionListState } from '../../models/Question'


const getQuestionsList = async (category) => {
    try {
        const { data } = await ApiClient.get<QuestionListState>(`v1/questions/${category}`);
        return data;
    } catch (error) {
        console.log(error)
    }
};

export default getQuestionsList;
