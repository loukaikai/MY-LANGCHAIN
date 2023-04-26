import {CHANG_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM} from './actionType'
export const changeInputValue = (value) => ({
    type: CHANG_INPUT_VALUE,
    value
});

export const addListItem = (value) => ({
    type: ADD_LIST_ITEM,
    value
});

export const deleteListItem = (value) => ({
    type: DELETE_LIST_ITEM,
    value
});


