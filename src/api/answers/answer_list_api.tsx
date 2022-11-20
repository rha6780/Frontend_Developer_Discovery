import { ApiClient } from '../index';

import { AnswerState } from '../../models/Answer'

const getAnswersList = async (category) => {
    try {
        const { data } = await ApiClient.get<AnswerState>(`v1/answers/${category}`);
        return data;
    } catch (error) {
        console.log(error)
    }
};

export default getAnswersList;
