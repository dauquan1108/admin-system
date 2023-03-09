import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";


export const TYPE_ACTION_TRANSACTION = {
    ADD: "transaction/add",
    GET_LIST: "transaction/get_list",
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