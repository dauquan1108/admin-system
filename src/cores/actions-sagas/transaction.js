import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";


export const TYPE_ACTION_TRANSACTION = {
    ADD: "transaction/add"
}

// Action to add a new todo
export const addTransaction = createAction(TYPE_ACTION_TRANSACTION.ADD, (data, callback) => {
    console.log('addTransaction callback: ', callback)
    return {
        payload: data,
        callback,
    };
});
