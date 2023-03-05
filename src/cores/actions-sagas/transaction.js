import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Action to add a new todo
export const addTransaction = createAction("transaction/add", (data) => {
    return {
        payload: data,
    };
});
