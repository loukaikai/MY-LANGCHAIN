import { useReducer } from 'react';
import { CHANG_INPUT_VALUE, ADD_LIST_ITEM } from './actionType'
const defaultState = {
    inputValue: '',
    answer: '',
}

export const reducer = (state = defaultState, action) => {
    if (action.type === CHANG_INPUT_VALUE){
        const newStates = state;
        newStates.inputValue = action.value;
        return newStates;
    }

    if (action.type === ADD_LIST_ITEM) {
        const newStates = state;
        newStates.answer = action.value;
        return newStates;
    }

    return state;
}