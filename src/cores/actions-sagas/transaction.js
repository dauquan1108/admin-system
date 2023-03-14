import { createAction } from "@reduxjs/toolkit";

export const TYPE_ACTION_TRANSACTION = {
    ADD: "saga-transaction/add",
    GET_LIST: "saga-transaction/getList",
}

// Action to add a new todo
export const addTransaction = createAction(TYPE_ACTION_TRANSACTION.ADD, (data, callback) => {
    return {
        payload: {
            data,
            callback,
        },
    };
});

export const getListTransaction = createAction(TYPE_ACTION_TRANSACTION.GET_LIST, (data, callback) => {
    return {
        payload: {
            data,
            callback,
        },
    };
});